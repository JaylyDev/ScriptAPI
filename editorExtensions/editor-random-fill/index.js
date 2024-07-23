// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { system, CompoundBlockVolumeAction, BlockVolume, BoundingBoxUtils, BlockTypes } from "@minecraft/server";
import { KeyboardKey, ActionTypes, MouseActionType, MouseInputType, CursorControlMode, InputModifier, getLocalizationId, CursorTargetMode, EditorInputContext, executeLargeOperation, bindDataSource, registerEditorExtension } from "@minecraft/server-editor";
import { getRotationCorrectedDirectionVector, Direction, } from "editor-utilities/index";
import { getRelativeXYAxisAsNormal, growVolumeAlongViewAxis, intersectRayPlane, shrinkVolumeAlongViewAxis, } from "./functions";
import { VECTOR3_BACK, VECTOR3_DOWN, VECTOR3_FORWARD, VECTOR3_UP, Vector3Utils } from "@minecraft/math";
// ------------------------------------------------------------------------------------------------
// General collection of selection related variables for this instance
// ------------------------------------------------------------------------------------------------
var SelectionCursorMode;
(function (SelectionCursorMode) {
    SelectionCursorMode[SelectionCursorMode["Freeform"] = 0] = "Freeform";
    SelectionCursorMode[SelectionCursorMode["FixedDistance"] = 1] = "FixedDistance";
    SelectionCursorMode[SelectionCursorMode["AdjacentFace"] = 2] = "AdjacentFace";
})(SelectionCursorMode || (SelectionCursorMode = {}));
;
const Controls = {
    Up: KeyboardKey.PAGE_UP,
    Down: KeyboardKey.PAGE_DOWN,
    Forward: KeyboardKey.UP,
    Back: KeyboardKey.DOWN,
    Left: KeyboardKey.LEFT,
    Right: KeyboardKey.RIGHT,
    Select: KeyboardKey.ENTER,
    Clear: KeyboardKey.KEY_D,
};
const TicksRefreshRate = 5;
// ------------------------------------------------------------------------------------------------
export class SelectionBehavior {
    get toolId() {
        return this.tool.id;
    }
    constructor(uiSession) {
        this.uiSession = uiSession;
        this.fnUnregisterToolBindings = () => {
            this.tool.unregisterInputBindings();
        };
        this.singleClick = (uiSession, mouseRay, shiftPressed, ctrlPressed, altPressed) => {
            const clickLoc = mouseRay.cursorBlockLocation;
            // Nothing pressed, then clear the stack and create a single 1x1x1
            if (!shiftPressed && !ctrlPressed && !altPressed) {
                uiSession.extensionContext.selectionManager.selection.clear();
                uiSession.extensionContext.selectionManager.selection.pushVolume({
                    action: CompoundBlockVolumeAction.Add,
                    volume: new BlockVolume(clickLoc, clickLoc)
                });
                // Store this as the anchor point
                this.lastAnchorPosition = clickLoc;
            }
            // Shift pressed, an no volume exists - create a single 1x1x1
            //  if a volume does exist - use it to anchor the min corner and make a volume
            //  from anchor to new click
            else if (shiftPressed && !ctrlPressed && !altPressed) {
                if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                    // Create a new 1x1x1 selection volume at the click position
                    uiSession.extensionContext.selectionManager.selection.pushVolume({
                        action: CompoundBlockVolumeAction.Add,
                        volume: new BlockVolume(clickLoc, clickLoc)
                    });
                    // Store this as the anchor point
                    this.lastAnchorPosition = clickLoc;
                }
                else {
                    // Use the last anchor point (i.e. the first click selection) as the
                    // corner for the new click, and defining a new volume area
                    const lastAnchorPosition = this.lastAnchorPosition;
                    uiSession.extensionContext.selectionManager.selection.popVolume();
                    const newVolume = new BlockVolume(lastAnchorPosition, clickLoc);
                    uiSession.extensionContext.selectionManager.selection.pushVolume({
                        action: CompoundBlockVolumeAction.Add,
                        volume: newVolume
                    });
                }
            }
            // Control pressed and no volume exists - create a single 1x1x1
            //  If a volume exists, just push a new 1x1x1 to the stack
            else if (ctrlPressed && !shiftPressed && !altPressed) {
                uiSession.extensionContext.selectionManager.selection.pushVolume({
                    action: CompoundBlockVolumeAction.Add,
                    volume: new BlockVolume(clickLoc, clickLoc)
                });
                // Store this as the anchor point
                this.lastAnchorPosition = clickLoc;
            }
            // If ALT is pressed, and there IS already a full volume, then we're going into 3-click volume
            // mode and we need to do some intersection calculations
            else if (altPressed && !shiftPressed && !ctrlPressed) {
                const currentItem = uiSession.extensionContext.selectionManager.selection.peekLastVolume();
                if (!currentItem) {
                    uiSession.extensionContext.selectionManager.selection.pushVolume({
                        action: CompoundBlockVolumeAction.Add,
                        volume: new BlockVolume(clickLoc, clickLoc)
                    });
                    this.lastAnchorPosition = clickLoc;
                }
                else {
                    const currentVolume = currentItem.volume;
                    const currentBounds = currentVolume.getBoundingBox();
                    const translatedRayLocation = Vector3Utils.subtract(mouseRay.location, currentBounds.min);
                    const XYPlaneNormal = getRelativeXYAxisAsNormal(uiSession.extensionContext.player.getRotation().y);
                    const intersection = intersectRayPlane(translatedRayLocation, mouseRay.direction, XYPlaneNormal, 0);
                    if (intersection) {
                        const translatedIntersection = Vector3Utils.add(intersection, currentBounds.min);
                        const newY = Math.ceil(translatedIntersection.y) - 1;
                        uiSession.extensionContext.selectionManager.selection.popVolume();
                        uiSession.extensionContext.selectionManager.selection.pushVolume({
                            action: currentItem.action,
                            volume: new BlockVolume(currentBounds.min, {
                                x: currentBounds.max.x,
                                y: newY,
                                z: currentBounds.max.z
                            })
                        });
                    }
                }
            }
        };
        this.moveTopSelection = (uiSession, lastAnchor, direction) => {
            const lastVolumeItem = uiSession.extensionContext.selectionManager.selection.peekLastVolume();
            if (!lastVolumeItem) {
                return undefined;
            }
            const lastVolume = lastVolumeItem.volume;
            uiSession.extensionContext.selectionManager.selection.popVolume();
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const correctedVector = getRotationCorrectedDirectionVector(rotationY, direction);
            lastVolume.translate({
                x: correctedVector.x,
                y: correctedVector.y,
                z: correctedVector.z
            });
            uiSession.extensionContext.selectionManager.selection.pushVolume({
                action: CompoundBlockVolumeAction.Add,
                volume: lastVolume
            });
            // Update the last cursor click position with the move vector
            // so that extend-click operations work correctly with the new corner position
            const updatedClick = {
                x: lastAnchor.x + correctedVector.x,
                y: lastAnchor.y + correctedVector.y,
                z: lastAnchor.z + correctedVector.z,
            };
            return updatedClick;
        };
        this.moveBlockCursorManually = (uiSession, direction) => {
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const rotationCorrectedVector = getRotationCorrectedDirectionVector(rotationY, direction);
            uiSession.extensionContext.cursor.moveBy(rotationCorrectedVector);
        };
        this.moveAllSelections = (uiSession, anchorPosition, direction) => {
            if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                return undefined;
            }
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const correctedVector = getRotationCorrectedDirectionVector(rotationY, direction);
            uiSession.extensionContext.selectionManager.selection.moveBy({
                x: correctedVector.x,
                y: correctedVector.y,
                z: correctedVector.z,
            });
            const updatedClick = {
                x: anchorPosition.x + correctedVector.x,
                y: anchorPosition.y + correctedVector.y,
                z: anchorPosition.z + correctedVector.z,
            };
            return updatedClick;
        };
        this.shrinkVolume = (uiSession, direction) => {
            if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                return;
            }
            const lastVolume = uiSession.extensionContext.selectionManager.selection.peekLastVolume;
            uiSession.extensionContext.selectionManager.selection.popVolume();
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const newVolume = shrinkVolumeAlongViewAxis(lastVolume, rotationY, direction, 1);
            uiSession.extensionContext.selectionManager.selection.pushVolume({
                action: CompoundBlockVolumeAction.Add,
                volume: newVolume
            });
        };
        this.growVolume = (uiSession, direction) => {
            const lastVolumeItem = uiSession.extensionContext.selectionManager.selection.peekLastVolume();
            if (!lastVolumeItem) {
                return;
            }
            const lastVolume = lastVolumeItem.volume;
            uiSession.extensionContext.selectionManager.selection.popVolume();
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const newVolume = growVolumeAlongViewAxis(lastVolume, rotationY, direction, 1);
            uiSession.extensionContext.selectionManager.selection.pushVolume({
                action: lastVolumeItem.action,
                volume: newVolume
            });
        };
        // Input and tool binding functions
        // ------------------------------------------------------------------------------------------------
        this.bindToolInput = (uiSession) => {
            // Bind Single Mouse Click
            const singleClickAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.mouseAction === MouseActionType.LeftButton) {
                        if (mouseProps.inputType === MouseInputType.ButtonDown) {
                            if (mouseRay.rayHit || this.toolCursorProperties.controlMode === CursorControlMode.Fixed) {
                                this.singleClick(uiSession, mouseRay, mouseProps.modifiers.shift, mouseProps.modifiers.ctrl, mouseProps.modifiers.alt);
                            }
                            else {
                                // If we're clicking on nothing or something too far away - clear the selection stack
                                uiSession.extensionContext.selectionManager.selection.clear();
                            }
                        }
                    }
                },
            });
            this.tool.registerMouseButtonBinding(singleClickAction);
            // Bind Keyboard MOVE functions
            const keyUpAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.cursor.moveBy(VECTOR3_UP);
                },
            });
            const keyDownAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.cursor.moveBy(VECTOR3_DOWN);
                },
            });
            const keyLeftAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, Direction.Left);
                },
            });
            const keyRightAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, Direction.Right);
                },
            });
            const keyForwardAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, Direction.Forward);
                },
            });
            const keyBackAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, Direction.Back);
                },
            });
            // Bind arrow keys to manual cursor control
            this.tool.registerKeyBinding(keyForwardAction, Controls.Forward, InputModifier.None);
            this.tool.registerKeyBinding(keyBackAction, Controls.Back, InputModifier.None);
            this.tool.registerKeyBinding(keyLeftAction, Controls.Left, InputModifier.None);
            this.tool.registerKeyBinding(keyRightAction, Controls.Right, InputModifier.None);
            this.tool.registerKeyBinding(keyUpAction, Controls.Up, InputModifier.None);
            this.tool.registerKeyBinding(keyDownAction, Controls.Down, InputModifier.None);
            const mouseWheelAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.inputType === MouseInputType.WheelOut) {
                        if (mouseProps.modifiers.shift) {
                            this.growVolume(uiSession, Direction.Left);
                            this.growVolume(uiSession, Direction.Right);
                        }
                        else if (mouseProps.modifiers.ctrl) {
                            this.growVolume(uiSession, Direction.Forward);
                            this.growVolume(uiSession, Direction.Back);
                        }
                        else if (mouseProps.modifiers.alt) {
                            this.growVolume(uiSession, Direction.Up);
                            this.growVolume(uiSession, Direction.Down);
                        }
                        else if (this.toolCursorProperties.controlMode === CursorControlMode.Fixed) {
                            uiSession.extensionContext.cursor.moveBy(VECTOR3_FORWARD);
                        }
                    }
                    else if (mouseProps.inputType === MouseInputType.WheelIn) {
                        if (mouseProps.modifiers.shift) {
                            this.shrinkVolume(uiSession, Direction.Left);
                            this.shrinkVolume(uiSession, Direction.Right);
                        }
                        else if (mouseProps.modifiers.ctrl) {
                            this.shrinkVolume(uiSession, Direction.Forward);
                            this.shrinkVolume(uiSession, Direction.Back);
                        }
                        else if (mouseProps.modifiers.alt) {
                            this.shrinkVolume(uiSession, Direction.Up);
                            this.shrinkVolume(uiSession, Direction.Down);
                        }
                        else if (this.toolCursorProperties.controlMode === CursorControlMode.Fixed) {
                            uiSession.extensionContext.cursor.moveBy(VECTOR3_BACK);
                        }
                    }
                },
            });
            this.tool.registerMouseWheelBinding(mouseWheelAction);
            // Bind ARROWS+ALT for MOVE selection volume (single)
            // -----------------------------------------
            const moveSelectionUpAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Up);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionDownAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Down);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionLeftAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Left);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionRightAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Right);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionForwardAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Forward);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionBackAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Back);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            // Bind arrow keys to manual cursor control
            this.tool.registerKeyBinding(moveSelectionForwardAction, Controls.Forward, InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionBackAction, Controls.Back, InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionLeftAction, Controls.Left, InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionRightAction, Controls.Right, InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionUpAction, Controls.Up, InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionDownAction, Controls.Down, InputModifier.Alt);
            // Bind ARROWS+ALT+CTRL to move ALL selections
            const moveAllSelectionUpAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Up);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionDownAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Down);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionLeftAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Left);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionRightAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Right);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionForwardAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Forward);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionBackAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Back);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            this.tool.registerKeyBinding(moveAllSelectionForwardAction, Controls.Forward, InputModifier.Alt | InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionBackAction, Controls.Back, InputModifier.Alt | InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionLeftAction, Controls.Left, InputModifier.Alt | InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionRightAction, Controls.Right, InputModifier.Alt | InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionUpAction, Controls.Up, InputModifier.Alt | InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionDownAction, Controls.Down, InputModifier.Alt | InputModifier.Control);
            // Bind ARROW+SHIFT
            const keyGrowUpAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, Direction.Up);
                },
            });
            this.tool.registerKeyBinding(keyGrowUpAction, Controls.Up, InputModifier.Shift);
            const keyGrowDownAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, Direction.Down);
                },
            });
            this.tool.registerKeyBinding(keyGrowDownAction, Controls.Down, InputModifier.Shift);
            const keyGrowForwardAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, Direction.Forward);
                },
            });
            this.tool.registerKeyBinding(keyGrowForwardAction, Controls.Forward, InputModifier.Shift);
            const keyGrowBackAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, Direction.Back);
                },
            });
            this.tool.registerKeyBinding(keyGrowBackAction, Controls.Back, InputModifier.Shift);
            const keyGrowLeftAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, Direction.Left);
                },
            });
            this.tool.registerKeyBinding(keyGrowLeftAction, Controls.Left, InputModifier.Shift);
            const keyGrowRightAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, Direction.Right);
                },
            });
            this.tool.registerKeyBinding(keyGrowRightAction, Controls.Right, InputModifier.Shift);
            // Bind ARROW+CTRL
            const keyShrinkUpAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, Direction.Up);
                },
            });
            this.tool.registerKeyBinding(keyShrinkUpAction, Controls.Up, InputModifier.Control);
            const keyShrinkDownAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, Direction.Down);
                },
            });
            this.tool.registerKeyBinding(keyShrinkDownAction, Controls.Down, InputModifier.Control);
            const keyShrinkForwardAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, Direction.Forward);
                },
            });
            this.tool.registerKeyBinding(keyShrinkForwardAction, Controls.Forward, InputModifier.Control);
            const keyShrinkBackAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, Direction.Back);
                },
            });
            this.tool.registerKeyBinding(keyShrinkBackAction, Controls.Back, InputModifier.Control);
            const keyShrinkLeftAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, Direction.Left);
                },
            });
            this.tool.registerKeyBinding(keyShrinkLeftAction, Controls.Left, InputModifier.Control);
            const keyShrinkRightAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, Direction.Right);
                },
            });
            this.tool.registerKeyBinding(keyShrinkRightAction, Controls.Right, InputModifier.Control);
        };
        this.onTickRefresh = (uiSession, tool) => {
            let ticks = 0;
            this.tickRefreshHandle = system.run(() => {
                if (uiSession.extensionContext.selectionManager === undefined) {
                    return;
                }
                if (!this.settingsObject) {
                    console.error('Pane settings object not defined, unable to refresh values for selection.');
                    return;
                }
                if (ticks++ % TicksRefreshRate === 0) {
                    ticks = 0;
                    let x = 0, y = 0, z = 0;
                    let sx = 0, sy = 0, sz = 0;
                    const selection = uiSession.extensionContext.selectionManager.selection;
                    const lastVolumeItem = selection.peekLastVolume();
                    if (lastVolumeItem) {
                        const lastVolume = lastVolumeItem.volume;
                        const bounds = lastVolume.getBoundingBox();
                        const boundSize = BoundingBoxUtils.getSpan(bounds);
                        x = bounds.min.x;
                        y = bounds.min.y;
                        z = bounds.min.z;
                        sx = boundSize.x;
                        sy = boundSize.y;
                        sz = boundSize.z;
                        if (!this.originPropertyItem?.enable) {
                            if (this.originPropertyItem) {
                                this.originPropertyItem.enable = true;
                            }
                        }
                        if (!this.sizePropertyItem?.enable) {
                            if (this.sizePropertyItem) {
                                this.sizePropertyItem.enable = true;
                            }
                        }
                    }
                    else {
                        if (this.originPropertyItem?.enable) {
                            if (this.originPropertyItem) {
                                this.originPropertyItem.enable = false;
                            }
                        }
                        if (this.sizePropertyItem?.enable) {
                            if (this.sizePropertyItem) {
                                this.sizePropertyItem.enable = false;
                            }
                        }
                    }
                    if (this.settingsObject.origin.x !== x || this.settingsObject.origin.y !== y || this.settingsObject.origin.z !== z || this.settingsObject.size.x !== sx || this.settingsObject.size.y !== sy || this.settingsObject.size.z !== sz) {
                        this.settingsObject.origin.x = Math.trunc(x);
                        this.settingsObject.origin.y = Math.trunc(y);
                        this.settingsObject.origin.z = Math.trunc(z);
                        this.settingsObject.size.x = Math.trunc(sx);
                        this.settingsObject.size.y = Math.trunc(sy);
                        this.settingsObject.size.z = Math.trunc(sz);
                    }
                }
                if (uiSession.toolRail.selectedOptionId === tool.id) {
                    this.tickRefreshHandle = system.run(() => this.onTickRefresh(uiSession, tool));
                }
            });
        };
        // Add a settings pane for the modal Tool
        this.addSettingsPane = (uiSession) => {
            this.pane.addDropdown(this.settingsObject, 'selectionMode', {
                titleStringId: getLocalizationId('selectionTool.selectionMode'),
                titleAltText: 'Mode',
                enable: true,
                dropdownItems: [
                    {
                        displayAltText: 'Freeform',
                        displayStringId: getLocalizationId('selectionTool.selectionMode.mouseAndKeyboard'),
                        value: SelectionCursorMode.Freeform,
                    },
                    {
                        displayAltText: 'Fixed Distance',
                        displayStringId: getLocalizationId('selectionTool.selectionMode.fixedDistance'),
                        value: SelectionCursorMode.FixedDistance,
                    },
                    {
                        displayAltText: 'Adjacent Face',
                        displayStringId: getLocalizationId('selectionTool.selectionMode.adjacent'),
                        value: SelectionCursorMode.AdjacentFace,
                    },
                ],
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    let cursorControlMode = CursorControlMode.KeyboardAndMouse;
                    let cursorTargetMode = CursorTargetMode.Block;
                    if (_oldValue !== _newValue) {
                        switch (_newValue) {
                            case SelectionCursorMode.Freeform:
                                cursorControlMode = CursorControlMode.KeyboardAndMouse;
                                cursorTargetMode = CursorTargetMode.Block;
                                break;
                            case SelectionCursorMode.FixedDistance:
                                cursorControlMode = CursorControlMode.Fixed;
                                cursorTargetMode = CursorTargetMode.Block;
                                break;
                            case SelectionCursorMode.AdjacentFace:
                                cursorControlMode = CursorControlMode.KeyboardAndMouse;
                                cursorTargetMode = CursorTargetMode.Face;
                                break;
                            default:
                                console.error(`Unknown value from selection mode drop-down`);
                                return;
                        }
                        this.toolCursorProperties = uiSession.extensionContext.cursor.getProperties();
                        this.toolCursorProperties.controlMode = cursorControlMode;
                        this.toolCursorProperties.targetMode = cursorTargetMode;
                        uiSession.extensionContext.cursor.setProperties(this.toolCursorProperties);
                    }
                },
            });
            const onOriginOrSizeChange = (_obj, _property, _oldValue, _newValue) => {
                if (_oldValue === _newValue) {
                    return;
                }
                const selection = uiSession.extensionContext.selectionManager.selection;
                if (!selection.isEmpty) {
                    const lastVolume = selection.peekLastVolume;
                    if (lastVolume) {
                        const min = {
                            x: this.settingsObject.origin.x,
                            y: this.settingsObject.origin.y,
                            z: this.settingsObject.origin.z,
                        };
                        const max = {
                            x: this.settingsObject.origin.x + this.settingsObject.size.x - 1,
                            y: this.settingsObject.origin.y + this.settingsObject.size.y - 1,
                            z: this.settingsObject.origin.z + this.settingsObject.size.z - 1,
                        };
                        const newVolume = new BlockVolume(min, max);
                        selection.popVolume();
                        selection.pushVolume({
                            action: CompoundBlockVolumeAction.Add,
                            volume: newVolume
                        });
                    }
                }
            };
            const subPaneTransform = this.pane.createPropertyPane({
                titleStringId: getLocalizationId('selectionTool.transformPane.title'),
                titleAltText: 'Transform',
            });
            this.originPropertyItem = subPaneTransform.addVector3(this.settingsObject, 'origin', {
                titleStringId: getLocalizationId('selectionTool.transformPane.origin'),
                titleAltText: 'Origin',
                enable: true,
                minX: -0x80000000,
                minY: -0x80000000,
                minZ: -0x80000000,
                onChange: onOriginOrSizeChange,
            });
            this.sizePropertyItem = subPaneTransform.addVector3(this.settingsObject, 'size', {
                titleStringId: getLocalizationId('selectionTool.transformPane.size'),
                titleAltText: 'Size',
                enable: true,
                minX: 1,
                minY: 1,
                minZ: 1,
                maxX: 100,
                maxY: 100,
                maxZ: 100,
                onChange: onOriginOrSizeChange,
            });
            // Fill
            const subPaneFill = this.pane.createPropertyPane({
                titleStringId: getLocalizationId('selectionTool.fillPane.title'),
                titleAltText: 'Fill Selection',
            });
            const blockPickers = [];
            subPaneFill.addNumber(bindDataSource(subPaneFill, {
                size: 1,
            }), 'size', {
                titleStringId: getLocalizationId('toolRail.cubeBrushSettings.size'),
                titleAltText: 'Brush Size',
                min: 1,
                max: 16,
                showSlider: true,
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    function adjustBlockPickers() {
                        if (blockPickers.length < _newValue) {
                            blockPickers.push(subPaneFill.addBlockPicker(this.settingsObject, 'block', {
                                titleAltText: 'Block Type',
                            }));
                        }
                        else if (blockPickers.length > _newValue) {
                            const lastBlockPicker = blockPickers[blockPickers.length - 1];
                            lastBlockPicker.visible = false;
                            lastBlockPicker.enable = false;
                            lastBlockPicker.dispose();
                            blockPickers.pop();
                        }
                        if (blockPickers.length === _newValue) {
                            system.clearRun(id);
                        }
                    }
                    const id = system.runInterval(adjustBlockPickers);
                },
            });
            subPaneFill.addButton(this.executeFillAction, {
                titleStringId: getLocalizationId('selectionTool.fillPane.fillAction'),
                titleAltText: 'Fill Selection',
            });
            this.pane.addDivider();
            // CTRL+D
            const actionClearSelection = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.selectionManager.selection.clear();
                },
            });
            this.pane.addButton(actionClearSelection, {
                titleStringId: getLocalizationId('selectionTool.deselect'),
                titleAltText: 'Deselect',
                variant: 'secondary',
            });
            this.tool.bindPropertyPane(this.pane);
        };
        // Add a modal tool to the tool rail and set up an activation subscription to set/unset the cursor states
        this.addTool = (uiSession) => {
            const tool = uiSession.toolRail.addTool({
                displayAltText: 'Random Fill (CTRL + S)',
                icon: 'pack://textures/editor/Select-Fill.png?filtering=point',
                tooltipStringId: 'Random Fill Tool',
            });
            tool.onModalToolActivation.subscribe((eventData) => {
                if (eventData.isActiveTool) {
                    uiSession.extensionContext.cursor.setProperties(this.toolCursorProperties);
                    // Start refreshing the position
                    this.onTickRefresh(uiSession, tool);
                }
            });
            return tool;
        };
        // Bind the tool activation to a keypress on a global level
        this.bindGlobalActivationShortcut = (uiSession, storage) => {
            const toggleAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.toolRail.setSelectedOptionId(this.tool.id, true);
                },
            });
            const deselectAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.selectionManager.selection.clear();
                },
            });
            uiSession.inputManager.registerKeyBinding(EditorInputContext.GlobalEditor, toggleAction, KeyboardKey.KEY_S, InputModifier.Control);
            uiSession.inputManager.registerKeyBinding(EditorInputContext.GlobalToolMode, this.executeFillAction, KeyboardKey.KEY_F, InputModifier.Control);
            uiSession.inputManager.registerKeyBinding(EditorInputContext.GlobalEditor, deselectAction, KeyboardKey.KEY_D, InputModifier.Control);
            storage.coreMenuItems?.edit.addItem({ name: 'menuBar.edit.quickFill', displayStringId: getLocalizationId('menuBar.edit.quickFill') }, this.executeFillAction);
            storage.coreMenuItems?.edit.addItem({ name: 'menuBar.edit.deselect', displayStringId: getLocalizationId('menuBar.edit.deselect') }, deselectAction);
        };
        this.performFillOperation = async (context, fillType) => {
            const player = context.player;
            const dimension = player.dimension;
            if (context.selectionManager.selection.isEmpty) {
                // Need a better way to surface errors and warnings to the user - this only prints to the
                // chat window, so if it's not open - you don't see it
                player.sendMessage('No selection available to fill');
                return;
            }
            context.transactionManager.openTransaction("Select-Fill");
            const bounds = context.selectionManager.selection.getBoundingBox();
            context.transactionManager.trackBlockChangeArea(bounds.min, bounds.max);
            await executeLargeOperation(context.selectionManager.selection, (blockLocation => {
                const block = dimension.getBlock(blockLocation);
                if (block) {
                    block.setWaterlogged(false);
                    block.setType(fillType);
                }
            })).catch((e => {
                console.error(e);
                context.transactionManager.discardOpenTransaction();
            })).then((() => {
                context.transactionManager.commitOpenTransaction();
            }));
        };
        const storage = uiSession.scratchStorage;
        if (!storage) {
            throw new Error('Can not instantiate Selection functionality without valid CoreEditor storage.');
        }
        // Add the tool to the tool rail
        this.tool = this.addTool(uiSession);
        // Create pane.
        this.pane = uiSession.createPropertyPane({
            titleAltText: 'Random Fill',
            titleStringId: getLocalizationId('selectionTool.title'),
        });
        /**
         * Allowed blocks for the block picker
         */
        const allowedBlocks = BlockTypes.getAll().map(blockType => blockType.id.replace('minecraft:', ''));
        // Here is the binding created.
        this.settingsObject = bindDataSource(this.pane, {
            selectionMode: SelectionCursorMode.Freeform,
            origin: { x: 0, y: 0, z: 0 },
            size: { x: 0, y: 0, z: 0 },
            block: "minecraft:bedrock",
        });
        // This is the initial cursor state for Selection
        this.toolCursorProperties = uiSession.extensionContext.cursor.getProperties();
        this.toolCursorProperties.outlineColor = { red: 1, green: 1, blue: 0, alpha: 1 }; // Yellow
        this.toolCursorProperties.controlMode = CursorControlMode.KeyboardAndMouse;
        this.toolCursorProperties.targetMode = CursorTargetMode.Block;
        this.toolCursorProperties.visible = true;
        this.lastAnchorPosition = { x: 0, y: 0, z: 0 };
        this.executeFillAction = uiSession.actionManager.createAction({
            actionType: ActionTypes.NoArgsAction,
            onExecute: () => {
                this.performFillOperation(uiSession.extensionContext, this.settingsObject.block).catch(e => console.error(e));
            },
        });
        // Add a settings pane for options
        this.addSettingsPane(uiSession);
        // bind mouse actions
        this.bindToolInput(uiSession);
        // We want global activation, so bind it into a keypress
        this.bindGlobalActivationShortcut(uiSession, storage);
        uiSession.toolRail.setSelectedOptionId(this.tool.id, true);
    }
    teardown() {
        // Shutdown
        console.log('Shutting down minecraft::selection behavior\n');
        if (this.tickRefreshHandle !== undefined) {
            system.clearRun(this.tickRefreshHandle);
            this.tickRefreshHandle = undefined;
        }
        this.fnUnregisterToolBindings();
        // If we're doing a /reload - clear the selection
        this.uiSession.extensionContext.selectionManager.selection.clear();
    }
}
registerEditorExtension('randomFill', (uiSession) => {
    uiSession.scratchStorage = {};
    // Initialize tool rail.
    uiSession.toolRail.show();
    // Add selection functionality
    return [
        new SelectionBehavior(uiSession)
    ];
}, (uiSession) => {
    uiSession.log.info('Shutting down minecraft::selection behavior');
    // Shutdown
    uiSession.scratchStorage = undefined;
}, {
    description: 'Randomly fills blocks in the selection',
});
