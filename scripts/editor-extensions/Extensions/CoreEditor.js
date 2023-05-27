import * as Server from "@minecraft/server";
import * as Editor from "@minecraft/server-editor";
import * as EditorUtilities from "../editor-utilities";
export default (uiSession) => {
    console.log('Initializing CoreEditor Extension\n');
    uiSession.scratchStorage = {};
    // Initialize tool rail.
    uiSession.toolRail.show();
    // Create the core UI that other functionality may build off of
    uiSession.scratchStorage.coreMenuItems = createCoreUI(uiSession);
    // Add transaction functionality
    const transactions = new UndoRedoBehavior(uiSession, uiSession.scratchStorage.coreMenuItems);
    // Add selection functionality
    const selectBehavior = new SelectionBehavior(uiSession);
    // Add clipboard functionality
    uiSession.scratchStorage.clipboard = new ClipboardBehavior(uiSession, uiSession.scratchStorage.coreMenuItems, selectBehavior.toolId);
    // Add block inspector functionality
    // disabled until we have a better design
    //const blockInspector = new BlockInspectorBehavior(uiSession);
    // Add delete functionality
    uiSession.scratchStorage.deleteBehavior = new DeleteBehavior(uiSession, uiSession.scratchStorage.coreMenuItems);
    console.log('CoreEditor Extension Initialized\n');
    return [
        selectBehavior,
        uiSession.scratchStorage.clipboard,
        uiSession.scratchStorage.deleteBehavior,
        transactions,
    ];
};

var SelectionCursorMode;
(function (SelectionCursorMode) {
    SelectionCursorMode[SelectionCursorMode["Freeform"] = 0] = "Freeform";
    SelectionCursorMode[SelectionCursorMode["FixedDistance"] = 1] = "FixedDistance";
    SelectionCursorMode[SelectionCursorMode["AdjacentFace"] = 2] = "AdjacentFace";
})(SelectionCursorMode || (SelectionCursorMode = {}));
const Controls = {
    Up: Editor.KeyboardKey.PAGE_UP,
    Down: Editor.KeyboardKey.PAGE_DOWN,
    Forward: Editor.KeyboardKey.UP,
    Back: Editor.KeyboardKey.DOWN,
    Left: Editor.KeyboardKey.LEFT,
    Right: Editor.KeyboardKey.RIGHT,
    Select: Editor.KeyboardKey.ENTER,
    Clear: Editor.KeyboardKey.KEY_D,
};
const TicksRefreshRate = 5;

function createCoreUI(uiSession) {
    if (!uiSession.scratchStorage) {
        throw new Error('Core UI initialization order incorrect');
    }
    const player = uiSession.extensionContext.player;
    //#region Action Creation
    const exportAsWorldAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            player
                .runCommandAsync('project export world')
                .catch(_ => console.error('Unable to export project as world due to unknown error.'));
        },
    });
    const showUISettingsAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.builtInUIManager.updateUISettingsPanelVisibility(true);
        },
    });
    const pauseScreenAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.builtInUIManager.navigateToPauseScreen();
        },
    });
    const pauseMobsAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            Server.world.getDimension('overworld')
                .runCommandAsync('simulationtype editor')
                .catch(_ => console.error('Unable to pause mobs due to unknown error.'));
        },
    });
    const unpauseMobsAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            Server.world.getDimension('overworld')
                .runCommandAsync('simulationtype game')
                .catch(_ => console.error('Unable to unpause mobs due to unknown error.'));
        },
    });
    const overworldAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            const rotation = player.getRotation();
            player.teleport(player.location, Server.world.getDimension(String(Server.MinecraftDimensionTypes.overworld)), rotation.x, rotation.y, false);
        },
    });
    const netherAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            const rotation = player.getRotation();
            player.teleport(player.location, Server.world.getDimension(String(Server.MinecraftDimensionTypes.nether)), rotation.x, rotation.y, false);
        },
    });
    const endAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.extensionContext.transactionManager.openTransaction('Transaction dimension change');
            const rotation = player.getRotation();
            player.teleport(player.location, Server.world.getDimension(String(Server.MinecraftDimensionTypes.theEnd)), rotation.x, rotation.y, false);
            uiSession.extensionContext.transactionManager.commitOpenTransaction();
        },
    });
    const turnOnDaylightCycleAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            Server.world.getDimension('overworld')
                .runCommandAsync('alwaysday false')
                .then(() => Server.world.getDimension('overworld')
                .runCommandAsync('say daylight cycle on')
                .catch(_ => console.error('Unable to say daylight cycle turned on.')))
                .catch(_ => console.error('Unable to turn on daylight cycle due to unknown error.'));
        },
    });
    const turnOffDaylightCycleAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            Server.world.getDimension('overworld')
                .runCommandAsync('alwaysday true')
                .then(() => Server.world.getDimension('overworld')
                .runCommandAsync('say daylight cycle off')
                .catch(_ => console.error('Unable to say daylight cycle turned off.')))
                .catch(_ => console.error('Unable to turn off daylight cycle due to unknown error.'));
        },
    });
    const quickStartAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.builtInUIManager.updateWelcomePanelVisibility(true);
        },
    });
    const documentationAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.builtInUIManager.navigateToDocumentation();
        },
    });
    const feedbackAction = uiSession.actionManager.createAction({
        actionType: Editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.builtInUIManager.navigateToFeedback();
        },
    });
    //#endregion
    //#region Input Binding
    uiSession.inputManager.registerKeyBinding(Editor.EditorInputContext.GlobalToolMode, pauseScreenAction, Editor.KeyboardKey.KEY_Q, Editor.InputModifier.Control);
    //#endregion
    //#region Menu Composition
    const file = uiSession.createMenu({
        name: 'resourcePack.editor.menuBar.file',
        displayStringLocId: 'resourcePack.editor.menuBar.file',
    });
    const exportMenu = file.addItem({
        name: 'resourcePack.editor.menuBar.file.export',
        displayStringLocId: 'resourcePack.editor.menuBar.file.export',
    });
    exportMenu.addItem({
        name: 'resourcePack.editor.menuBar.file.export.world',
        displayStringLocId: 'resourcePack.editor.menuBar.file.export.world',
    }, exportAsWorldAction);
    file.addItem({
        name: 'resourcePack.editor.menuBar.file.settings',
        displayStringLocId: 'resourcePack.editor.menuBar.file.settings',
    }, showUISettingsAction);
    file.addItem({
        name: 'resourcePack.editor.menuBar.file.pauseScreen',
        displayStringLocId: 'resourcePack.editor.menuBar.file.pauseScreen',
    }, pauseScreenAction);
    const edit = uiSession.createMenu({
        name: 'resourcePack.editor.menuBar.edit',
        displayStringLocId: 'resourcePack.editor.menuBar.edit',
    });
    const worldOptions = uiSession.createMenu({
        name: 'resourcePack.editor.menuBar.worldOptions',
        displayStringLocId: 'resourcePack.editor.menuBar.worldOptions',
    });
    const actors = worldOptions.addItem({
        name: 'resourcePack.editor.menuBar.worldOptions.actors',
        displayStringLocId: 'resourcePack.editor.menuBar.worldOptions.actors',
    });
    actors.addItem({
        name: 'resourcePack.editor.menuBar.worldOptions.pause.pauseActors',
        displayStringLocId: 'resourcePack.editor.menuBar.worldOptions.pause.pauseActors',
    }, pauseMobsAction);
    actors.addItem({
        name: 'resourcePack.editor.menuBar.worldOptions.pause.unpauseActors',
        displayStringLocId: 'resourcePack.editor.menuBar.worldOptions.pause.unpauseActors',
    }, unpauseMobsAction);
    const changeDimension = worldOptions.addItem({
        name: 'resourcePack.editor.menuBar.worldOptions.changeDimension',
        displayStringLocId: 'resourcePack.editor.menuBar.worldOptions.changeDimension',
    });
    changeDimension.addItem({
        name: 'resourcePack.editor.menuBar.worldOptions.changeDimension.overworld',
        displayStringLocId: 'resourcePack.editor.menuBar.worldOptions.changeDimension.overworld',
    }, overworldAction);
    changeDimension.addItem({
        name: 'resourcePack.editor.menuBar.worldOptions.changeDimension.nether',
        displayStringLocId: 'resourcePack.editor.menuBar.worldOptions.changeDimension.nether',
    }, netherAction);
    changeDimension.addItem({
        name: 'resourcePack.editor.menuBar.worldOptions.changeDimension.end',
        displayStringLocId: 'resourcePack.editor.menuBar.worldOptions.changeDimension.end',
    }, endAction);
    const daylightCycle = worldOptions.addItem({
        name: 'resourcePack.editor.menuBar.worldOptions.daylightCycle',
        displayStringLocId: 'resourcePack.editor.menuBar.worldOptions.daylightCycle',
    });
    daylightCycle.addItem({
        name: 'resourcePack.editor.menuBar.worldOptions.daylightCycle.turnOnDaylightCycle',
        displayStringLocId: 'resourcePack.editor.menuBar.worldOptions.daylightCycle.turnOnDaylightCycle',
    }, turnOnDaylightCycleAction);
    daylightCycle.addItem({
        name: 'resourcePack.editor.menuBar.worldOptions.daylightCycle.turnOffDaylightCycle',
        displayStringLocId: 'resourcePack.editor.menuBar.worldOptions.daylightCycle.turnOffDaylightCycle',
    }, turnOffDaylightCycleAction);
    const help = uiSession.createMenu({
        name: 'resourcePack.editor.menuBar.help',
        displayStringLocId: 'resourcePack.editor.menuBar.help',
    });
    help.addItem({
        name: 'resourcePack.editor.menuBar.help.quickStart',
        displayStringLocId: 'resourcePack.editor.menuBar.help.quickStart',
    }, quickStartAction);
    help.addItem({
        name: 'resourcePack.editor.menuBar.help.documentation',
        displayStringLocId: 'resourcePack.editor.menuBar.help.documentation',
    }, documentationAction);
    help.addItem({
        name: 'resourcePack.editor.menuBar.help.feedback',
        displayStringLocId: 'resourcePack.editor.menuBar.help.feedback',
    }, feedbackAction);
    //#endregion
    file.show();
    edit.show();
    worldOptions.show();
    help.show();
    return {
        file,
        edit,
        worldOptions,
        help,
    };
};

class SelectionBehavior {
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
                uiSession.extensionContext.selectionManager.selection.pushVolume(Editor.SelectionBlockVolumeAction.add, new Editor.BlockVolume(clickLoc, clickLoc));
                // Store this as the anchor point
                this.lastAnchorPosition = clickLoc;
            }
            // Shift pressed, an no volume exists - create a single 1x1x1
            //  if a volume does exist - use it to anchor the min corner and make a volume
            //  from anchor to new click
            else if (shiftPressed && !ctrlPressed && !altPressed) {
                if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                    // Create a new 1x1x1 selection volume at the click position
                    uiSession.extensionContext.selectionManager.selection.pushVolume(Editor.SelectionBlockVolumeAction.add, new Editor.BlockVolume(clickLoc, clickLoc));
                    // Store this as the anchor point
                    this.lastAnchorPosition = clickLoc;
                }
                else {
                    // Use the last anchor point (i.e. the first click selection) as the
                    // corner for the new click, and defining a new volume area
                    const lastAnchorPosition = this.lastAnchorPosition;
                    uiSession.extensionContext.selectionManager.selection.popVolume();
                    const newVolume = new Editor.BlockVolume(lastAnchorPosition, clickLoc);
                    uiSession.extensionContext.selectionManager.selection.pushVolume(Editor.SelectionBlockVolumeAction.add, newVolume);
                }
            }
            // Control pressed and no volume exists - create a single 1x1x1
            //  If a volume exists, just push a new 1x1x1 to the stack
            else if (ctrlPressed && !shiftPressed && !altPressed) {
                uiSession.extensionContext.selectionManager.selection.pushVolume(Editor.SelectionBlockVolumeAction.add, new Editor.BlockVolume(clickLoc, clickLoc));
                // Store this as the anchor point
                this.lastAnchorPosition = clickLoc;
            }
            // If ALT is pressed, and there IS already a full volume, then we're going into 3-click volume
            // mode and we need to do some intersection calculations
            else if (altPressed && !shiftPressed && !ctrlPressed) {
                if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                    // Create a new 1x1x1 selection volume at the click position
                    uiSession.extensionContext.selectionManager.selection.pushVolume(Editor.SelectionBlockVolumeAction.add, new Editor.BlockVolume(clickLoc, clickLoc));
                    // Store this as the anchor point
                    this.lastAnchorPosition = clickLoc;
                }
                else {
                    const currentVolume = uiSession.extensionContext.selectionManager.selection.peekLastVolume;
                    const currentBounds = currentVolume.boundingBox;
                    const translatedRayLocation = Server.Vector.subtract(new Server.Vector(mouseRay.location.x, mouseRay.location.y, mouseRay.location.z), new Server.Vector(currentBounds.min.x, currentBounds.min.y, currentBounds.min.z));
                    const XYPlaneNormal = EditorUtilities.getRelativeXYAxisAsNormal(uiSession.extensionContext.player.getRotation().y);
                    const intersection = EditorUtilities.intersectRayPlane(translatedRayLocation, mouseRay.direction, XYPlaneNormal, 0);
                    if (intersection) {
                        const translatedIntersection = Server.Vector.add(intersection, new Server.Vector(currentBounds.min.x, currentBounds.min.y, currentBounds.min.z));
                        const newY = Math.ceil(translatedIntersection.y) - 1;
                        const newVolume = new Editor.BlockVolume({ x: currentBounds.min.x, y: currentBounds.min.y, z: currentBounds.min.z }, { x: currentBounds.max.x, y: newY, z: currentBounds.max.z });
                        uiSession.extensionContext.selectionManager.selection.popVolume();
                        uiSession.extensionContext.selectionManager.selection.pushVolume(Editor.SelectionBlockVolumeAction.add, newVolume);
                    }
                }
            }
        };
        this.moveTopSelection = (uiSession, lastAnchor, direction) => {
            if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                return undefined;
            }
            const lastVolume = uiSession.extensionContext.selectionManager.selection.peekLastVolume;
            uiSession.extensionContext.selectionManager.selection.popVolume();
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const correctedVector = EditorUtilities.getRotationCorrectedDirectionVector(rotationY, direction);
            const newVolume = lastVolume.offset({ x: correctedVector.x, y: correctedVector.y, z: correctedVector.z });
            uiSession.extensionContext.selectionManager.selection.pushVolume(Editor.SelectionBlockVolumeAction.add, newVolume);
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
            const rotationCorrectedVector = EditorUtilities.getRotationCorrectedDirectionVector(rotationY, direction);
            uiSession.extensionContext.cursor.moveBy(rotationCorrectedVector);
        };
        this.moveAllSelections = (uiSession, anchorPosition, direction) => {
            if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                return undefined;
            }
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const correctedVector = EditorUtilities.getRotationCorrectedDirectionVector(rotationY, direction);
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
            const newVolume = EditorUtilities.shrinkVolumeAlongViewAxis(lastVolume, rotationY, direction, 1);
            uiSession.extensionContext.selectionManager.selection.pushVolume(Editor.SelectionBlockVolumeAction.add, newVolume);
        };
        this.growVolume = (uiSession, direction) => {
            if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                return;
            }
            const lastVolume = uiSession.extensionContext.selectionManager.selection.peekLastVolume;
            uiSession.extensionContext.selectionManager.selection.popVolume();
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const newVolume = EditorUtilities.growVolumeAlongViewAxis(lastVolume, rotationY, direction, 1);
            uiSession.extensionContext.selectionManager.selection.pushVolume(Editor.SelectionBlockVolumeAction.add, newVolume);
        };
        // Input and tool binding functions
        // ------------------------------------------------------------------------------------------------
        this.bindToolInput = (uiSession) => {
            // Bind Single Mouse Click
            const singleClickAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.mouseAction === Editor.MouseActionType.LeftButton) {
                        if (mouseProps.inputType === Editor.MouseInputType.ButtonDown) {
                            if (mouseRay.rayHit || this.toolCursorState.controlMode === Editor.CursorControlMode.Fixed) {
                                this.singleClick(uiSession, mouseRay, mouseProps.modifiers.shift, mouseProps.modifiers.ctrl, mouseProps.modifiers.alt);
                            }
                            else {
                                // If we're clicking on nothing or something too far away - clear the selection stack
                                uiSession.extensionContext.selectionManager.selection.clear();
                            }
                        }
                        else if (mouseProps.inputType === Editor.MouseInputType.ButtonUp) {
                            // do nothing
                        }
                    }
                },
            });
            this.tool.registerMouseButtonBinding(singleClickAction);
            // Bind Keyboard MOVE functions
            const keyUpAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.cursor.moveBy(Server.Vector.up);
                },
            });
            const keyDownAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.cursor.moveBy(Server.Vector.down);
                },
            });
            const keyLeftAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, EditorUtilities.Direction.Left);
                },
            });
            const keyRightAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, EditorUtilities.Direction.Right);
                },
            });
            const keyForwardAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, EditorUtilities.Direction.Forward);
                },
            });
            const keyBackAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, EditorUtilities.Direction.Back);
                },
            });
            // Bind arrow keys to manual cursor control
            this.tool.registerKeyBinding(keyForwardAction, Controls.Forward, Editor.InputModifier.None);
            this.tool.registerKeyBinding(keyBackAction, Controls.Back, Editor.InputModifier.None);
            this.tool.registerKeyBinding(keyLeftAction, Controls.Left, Editor.InputModifier.None);
            this.tool.registerKeyBinding(keyRightAction, Controls.Right, Editor.InputModifier.None);
            this.tool.registerKeyBinding(keyUpAction, Controls.Up, Editor.InputModifier.None);
            this.tool.registerKeyBinding(keyDownAction, Controls.Down, Editor.InputModifier.None);
            const mouseWheelAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.inputType === Editor.MouseInputType.WheelOut) {
                        if (mouseProps.modifiers.shift) {
                            this.growVolume(uiSession, EditorUtilities.Direction.Left);
                            this.growVolume(uiSession, EditorUtilities.Direction.Right);
                        }
                        else if (mouseProps.modifiers.ctrl) {
                            this.growVolume(uiSession, EditorUtilities.Direction.Forward);
                            this.growVolume(uiSession, EditorUtilities.Direction.Back);
                        }
                        else if (mouseProps.modifiers.alt) {
                            this.growVolume(uiSession, EditorUtilities.Direction.Up);
                            this.growVolume(uiSession, EditorUtilities.Direction.Down);
                        }
                        else if (this.toolCursorState.controlMode === Editor.CursorControlMode.Fixed) {
                            uiSession.extensionContext.cursor.moveBy(Server.Vector.forward);
                        }
                    }
                    else if (mouseProps.inputType === Editor.MouseInputType.WheelIn) {
                        if (mouseProps.modifiers.shift) {
                            this.shrinkVolume(uiSession, EditorUtilities.Direction.Left);
                            this.shrinkVolume(uiSession, EditorUtilities.Direction.Right);
                        }
                        else if (mouseProps.modifiers.ctrl) {
                            this.shrinkVolume(uiSession, EditorUtilities.Direction.Forward);
                            this.shrinkVolume(uiSession, EditorUtilities.Direction.Back);
                        }
                        else if (mouseProps.modifiers.alt) {
                            this.shrinkVolume(uiSession, EditorUtilities.Direction.Up);
                            this.shrinkVolume(uiSession, EditorUtilities.Direction.Down);
                        }
                        else if (this.toolCursorState.controlMode === Editor.CursorControlMode.Fixed) {
                            uiSession.extensionContext.cursor.moveBy(Server.Vector.back);
                        }
                    }
                },
            });
            this.tool.registerMouseWheelBinding(mouseWheelAction);
            // Bind ARROWS+ALT for MOVE selection volume (single)
            // -----------------------------------------
            const moveSelectionUpAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Up);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionDownAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Down);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionLeftAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Left);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionRightAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Right);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionForwardAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Forward);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionBackAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Back);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            // Bind arrow keys to manual cursor control
            this.tool.registerKeyBinding(moveSelectionForwardAction, Controls.Forward, Editor.InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionBackAction, Controls.Back, Editor.InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionLeftAction, Controls.Left, Editor.InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionRightAction, Controls.Right, Editor.InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionUpAction, Controls.Up, Editor.InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionDownAction, Controls.Down, Editor.InputModifier.Alt);
            // Bind ARROWS+ALT+CTRL to move ALL selections
            const moveAllSelectionUpAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Up);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionDownAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Down);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionLeftAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Left);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionRightAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Right);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionForwardAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Forward);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionBackAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, EditorUtilities.Direction.Back);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            this.tool.registerKeyBinding(moveAllSelectionForwardAction, Controls.Forward, Editor.InputModifier.Alt | Editor.InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionBackAction, Controls.Back, Editor.InputModifier.Alt | Editor.InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionLeftAction, Controls.Left, Editor.InputModifier.Alt | Editor.InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionRightAction, Controls.Right, Editor.InputModifier.Alt | Editor.InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionUpAction, Controls.Up, Editor.InputModifier.Alt | Editor.InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionDownAction, Controls.Down, Editor.InputModifier.Alt | Editor.InputModifier.Control);
            // Bind ENTER (+CTRL +SHIFT) to select (same as single click with mouse)
            const keySelectAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const blockLocation = uiSession.extensionContext.cursor.position;
                    const ray = {
                        location: { x: 0, y: 0, z: 0 },
                        direction: new Server.Vector(0, 0, 0),
                        cursorBlockLocation: blockLocation,
                        rayHit: false,
                    };
                    this.singleClick(uiSession, ray, false, false, false);
                },
            });
            this.tool.registerKeyBinding(keySelectAction, Controls.Select, Editor.InputModifier.None);
            const keySelectMultipleAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const blockLocation = uiSession.extensionContext.cursor.position;
                    const ray = {
                        location: { x: 0, y: 0, z: 0 },
                        direction: new Server.Vector(0, 0, 0),
                        cursorBlockLocation: blockLocation,
                        rayHit: false,
                    };
                    this.singleClick(uiSession, ray, false, true, false);
                },
            });
            this.tool.registerKeyBinding(keySelectMultipleAction, Controls.Select, Editor.InputModifier.Control);
            const keySelectAndExtendAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const blockLocation = uiSession.extensionContext.cursor.position;
                    const ray = {
                        location: { x: 0, y: 0, z: 0 },
                        direction: new Server.Vector(0, 0, 0),
                        cursorBlockLocation: blockLocation,
                        rayHit: false,
                    };
                    this.singleClick(uiSession, ray, true, false, false);
                },
            });
            this.tool.registerKeyBinding(keySelectAndExtendAction, Controls.Select, Editor.InputModifier.Shift);
            // Bind ARROW+SHIFT
            const keyGrowUpAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, EditorUtilities.Direction.Up);
                },
            });
            this.tool.registerKeyBinding(keyGrowUpAction, Controls.Up, Editor.InputModifier.Shift);
            const keyGrowDownAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, EditorUtilities.Direction.Down);
                },
            });
            this.tool.registerKeyBinding(keyGrowDownAction, Controls.Down, Editor.InputModifier.Shift);
            const keyGrowForwardAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, EditorUtilities.Direction.Forward);
                },
            });
            this.tool.registerKeyBinding(keyGrowForwardAction, Controls.Forward, Editor.InputModifier.Shift);
            const keyGrowBackAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, EditorUtilities.Direction.Back);
                },
            });
            this.tool.registerKeyBinding(keyGrowBackAction, Controls.Back, Editor.InputModifier.Shift);
            const keyGrowLeftAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, EditorUtilities.Direction.Left);
                },
            });
            this.tool.registerKeyBinding(keyGrowLeftAction, Controls.Left, Editor.InputModifier.Shift);
            const keyGrowRightAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, EditorUtilities.Direction.Right);
                },
            });
            this.tool.registerKeyBinding(keyGrowRightAction, Controls.Right, Editor.InputModifier.Shift);
            // Bind ARROW+CTRL
            const keyShrinkUpAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, EditorUtilities.Direction.Up);
                },
            });
            this.tool.registerKeyBinding(keyShrinkUpAction, Controls.Up, Editor.InputModifier.Control);
            const keyShrinkDownAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, EditorUtilities.Direction.Down);
                },
            });
            this.tool.registerKeyBinding(keyShrinkDownAction, Controls.Down, Editor.InputModifier.Control);
            const keyShrinkForwardAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, EditorUtilities.Direction.Forward);
                },
            });
            this.tool.registerKeyBinding(keyShrinkForwardAction, Controls.Forward, Editor.InputModifier.Control);
            const keyShrinkBackAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, EditorUtilities.Direction.Back);
                },
            });
            this.tool.registerKeyBinding(keyShrinkBackAction, Controls.Back, Editor.InputModifier.Control);
            const keyShrinkLeftAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, EditorUtilities.Direction.Left);
                },
            });
            this.tool.registerKeyBinding(keyShrinkLeftAction, Controls.Left, Editor.InputModifier.Control);
            const keyShrinkRightAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, EditorUtilities.Direction.Right);
                },
            });
            this.tool.registerKeyBinding(keyShrinkRightAction, Controls.Right, Editor.InputModifier.Control);
        };
        this.onTickRefresh = (uiSession, tool) => {
            let ticks = 0;
            this.tickRefreshHandle = Server.system.run(() => {
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
                    if (selection && !selection.isEmpty) {
                        const bounds = selection.peekLastVolume.boundingBox;
                        x = bounds.min.x;
                        y = bounds.min.y;
                        z = bounds.min.z;
                        sx = bounds.spanX;
                        sy = bounds.spanY;
                        sz = bounds.spanZ;
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
                    // If our current selection object settings
                    if (this.settingsObject.origin.x !== x ||
                        this.settingsObject.origin.y !== y ||
                        this.settingsObject.origin.z !== z ||
                        this.settingsObject.size.x !== sx ||
                        this.settingsObject.size.y !== sy ||
                        this.settingsObject.size.z !== sz) {
                        this.settingsObject.origin.x = Math.trunc(x);
                        this.settingsObject.origin.y = Math.trunc(y);
                        this.settingsObject.origin.z = Math.trunc(z);
                        this.settingsObject.size.x = Math.trunc(sx);
                        this.settingsObject.size.y = Math.trunc(sy);
                        this.settingsObject.size.z = Math.trunc(sz);
                    }
                }
                if (uiSession.toolRail.selectedOptionId === tool.id) {
                    this.tickRefreshHandle = Server.system.run(() => this.onTickRefresh(uiSession, tool));
                }
            });
        };
        // Add a settings pane for the modal Tool
        this.addSettingsPane = (uiSession) => {
            this.pane.addDropdown(this.settingsObject, 'selectionMode', {
                titleStringId: 'selectionTool.selectionMode',
                titleAltText: 'Mode',
                enable: true,
                dropdownItems: [
                    {
                        displayAltText: 'Freeform',
                        displayStringId: 'selectionTool.selectionMode.mouseAndKeyboard',
                        value: SelectionCursorMode.Freeform,
                    },
                    {
                        displayAltText: 'Fixed Distance',
                        displayStringId: 'selectionTool.selectionMode.fixedDistance',
                        value: SelectionCursorMode.FixedDistance,
                    },
                    {
                        displayAltText: 'Adjacent Face',
                        displayStringId: 'selectionTool.selectionMode.adjacent',
                        value: SelectionCursorMode.AdjacentFace,
                    },
                ],
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    const oldVal = _oldValue;
                    const newVal = _newValue;
                    let cursorControlMode = Editor.CursorControlMode.KeyboardAndMouse;
                    let cursorTargetMode = Editor.CursorTargetMode.Block;
                    if (oldVal !== newVal) {
                        switch (newVal) {
                            case SelectionCursorMode.Freeform:
                                cursorControlMode = Editor.CursorControlMode.KeyboardAndMouse;
                                cursorTargetMode = Editor.CursorTargetMode.Block;
                                break;
                            case SelectionCursorMode.FixedDistance:
                                cursorControlMode = Editor.CursorControlMode.Fixed;
                                cursorTargetMode = Editor.CursorTargetMode.Block;
                                break;
                            case SelectionCursorMode.AdjacentFace:
                                cursorControlMode = Editor.CursorControlMode.KeyboardAndMouse;
                                cursorTargetMode = Editor.CursorTargetMode.Face;
                                break;
                            default:
                                console.error(`Unknown value from selection mode drop-down`);
                                return;
                        }
                        this.toolCursorState = uiSession.extensionContext.cursor.getState();
                        this.toolCursorState.controlMode = cursorControlMode;
                        this.toolCursorState.targetMode = cursorTargetMode;
                        uiSession.extensionContext.cursor.setState(this.toolCursorState);
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
                        const newVolume = new Editor.BlockVolume(min, max);
                        selection.popVolume();
                        selection.pushVolume(Editor.SelectionBlockVolumeAction.add, newVolume);
                    }
                }
            };
            const subPaneTransform = this.pane.createPropertyPane({
                titleStringId: 'selectionTool.transformPane.title',
                titleAltText: 'Transform',
            });
            this.originPropertyItem = subPaneTransform.addVec3(this.settingsObject, 'origin', {
                titleStringId: 'selectionTool.transformPane.origin',
                titleAltText: 'Origin',
                enable: true,
                minX: Number.MIN_SAFE_INTEGER,
                minY: Number.MIN_SAFE_INTEGER,
                minZ: Number.MIN_SAFE_INTEGER,
                onChange: onOriginOrSizeChange,
            });
            this.sizePropertyItem = subPaneTransform.addVec3(this.settingsObject, 'size', {
                titleStringId: 'selectionTool.transformPane.size',
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
                titleStringId: 'selectionTool.fillPane.title',
                titleAltText: 'Fill Selection',
            });
            subPaneFill.addBlockPicker(this.settingsObject, 'block', {
                titleStringId: 'selectionTool.fillPane.blockType',
                titleAltText: 'Block Type',
            });
            subPaneFill.addButtonAndBindAction(this.executeFillAction, {
                titleStringId: 'selectionTool.fillPane.fillAction',
                titleAltText: 'Fill Selection',
            });
            this.pane.addDivider();
            // CTRL+D
            const actionClearSelection = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.selectionManager.selection.clear();
                },
            });
            this.pane.addButtonAndBindAction(actionClearSelection, {
                titleStringId: 'selectionTool.deselect',
                titleAltText: 'Deselect',
                variant: 'secondary',
            });
            this.tool.bindPropertyPane(this.pane);
        };
        // Add a modal tool to the tool rail and set up an activation subscription to set/unset the cursor states
        this.addTool = (uiSession) => {
            const tool = uiSession.toolRail.addTool({
                displayString: 'Selection (CTRL + S)',
                displayStringLocId: 'selectionTool.toolRail.title',
                icon: 'pack://textures/editor/marquee.png?filtering=point',
                tooltip: 'Selection Tool',
                tooltipLocId: 'selectionTool.toolRail.description',
            });
            tool.onModalToolActivation.subscribe((eventData) => {
                if (eventData.isActiveTool) {
                    uiSession.extensionContext.cursor.setState(this.toolCursorState);
                    // Start refreshing the position
                    this.onTickRefresh(uiSession, tool);
                }
            });
            return tool;
        };
        // Bind the tool activation to a keypress on a global level
        this.bindGlobalActivationShortcut = (uiSession, storage) => {
            const toggleAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.toolRail.setSelectedOptionId(this.tool.id, true);
                },
            });
            const deselectAction = uiSession.actionManager.createAction({
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.selectionManager.selection.clear();
                },
            });
            uiSession.inputManager.registerKeyBinding(Editor.EditorInputContext.GlobalEditor, toggleAction, Editor.KeyboardKey.KEY_S, Editor.InputModifier.Control);
            uiSession.inputManager.registerKeyBinding(Editor.EditorInputContext.GlobalToolMode, this.executeFillAction, Editor.KeyboardKey.KEY_F, Editor.InputModifier.Control);
            uiSession.inputManager.registerKeyBinding(Editor.EditorInputContext.GlobalEditor, deselectAction, Editor.KeyboardKey.KEY_D, Editor.InputModifier.Control);
            storage.coreMenuItems?.edit.addItem({ name: 'resourcePack.editor.menuBar.edit.quickFill', displayStringLocId: 'resourcePack.editor.menuBar.edit.quickFill' }, this.executeFillAction);
            storage.coreMenuItems?.edit.addItem({ name: 'resourcePack.editor.menuBar.edit.deselect', displayStringLocId: 'resourcePack.editor.menuBar.edit.deselect' }, deselectAction);
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
            context.transactionManager.openTransaction('Select-Fill');
            const bounds = context.selectionManager.selection.boundingBox;
            context.transactionManager.trackBlockChangeArea(bounds.min, bounds.max);
            await Editor.executeLargeOperation(context.selectionManager.selection, (blockLocation) => {
                const block = dimension.getBlock(blockLocation);
                if (block) {
                    block.isWaterlogged = false;
                    block.setType(fillType);
                }
            })
                .catch(e => {
                console.error(e);
                context.transactionManager.discardOpenTransaction();
            })
                .then(() => {
                context.transactionManager.commitOpenTransaction();
            });
        };
        const storage = uiSession.scratchStorage;
        if (!storage) {
            throw new Error('Can not instantiate Selection functionality without valid CoreEditor storage.');
        }
        // Add the tool to the tool rail
        this.tool = this.addTool(uiSession);
        // Create pane.
        this.pane = uiSession.createPropertyPane({
            titleStringId: 'selectionTool.settingsPane.title',
            titleAltText: 'Selection',
        });
        // Here is the binding created.
        this.settingsObject = Editor.createPaneBindingObject(this.pane, {
            selectionMode: SelectionCursorMode.Freeform,
            origin: { x: 0, y: 0, z: 0 },
            size: { x: 0, y: 0, z: 0 },
            block: Server.MinecraftBlockTypes.stone,
        });
        // This is the initial cursor state for Selection
        this.toolCursorState = uiSession.extensionContext.cursor.getState();
        this.toolCursorState.color = { red: 1, green: 1, blue: 0, alpha: 1 }; // Yellow
        this.toolCursorState.controlMode = Editor.CursorControlMode.KeyboardAndMouse;
        this.toolCursorState.targetMode = Editor.CursorTargetMode.Block;
        this.toolCursorState.visible = true;
        this.lastAnchorPosition = { x: 0, y: 0, z: 0 };
        this.executeFillAction = uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
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
            Server.system.clearRun(this.tickRefreshHandle);
            this.tickRefreshHandle = undefined;
        }
        this.fnUnregisterToolBindings();
        // If we're doing a /reload - clear the selection
        this.uiSession.extensionContext.selectionManager.selection.clear();
    }
}

class ClipboardBehavior {
    constructor(uiSession, coreMenuItems, fallbackToolId) {
        this.fallbackToolId = fallbackToolId;
        this.pastePreviewLocation = { x: 0, y: 0, z: 0 };
        this.rotationLookup = [
            Editor.ClipboardRotation.none,
            Editor.ClipboardRotation.Rotate90,
            Editor.ClipboardRotation.Rotate180,
            Editor.ClipboardRotation.Rotate270,
        ];
        this.settings = this.getDefaultClipboardSettings();
        this.selectionPreview = uiSession.extensionContext.selectionManager.createSelection();
        this.selectionPreview.fillColor = { red: 1.0, green: 1.0, blue: 0.0, alpha: 0.25 };
        this.selectionPreview.borderColor = { red: 1.0, green: 0.0, blue: 1.0, alpha: 1.0 };
        this.setup(uiSession, coreMenuItems);
    }
    getDefaultClipboardSettings() {
        return {
            rotationIndex: 0,
            mirrorX: false,
            mirrorZ: false,
            origin: { x: 0, y: 0, z: 0 },
        };
    }
    setup(uiSession, coreMenuItems) {
        if (!uiSession.scratchStorage) {
            throw new Error('Unable to set up Clipboard due to missing CoreUIState.');
        }
        this.tool = uiSession.toolRail.addTool({
            displayString: 'Paste Preview (CTRL + SHIFT + V)',
            displayStringLocId: 'paste.toolRail.title',
            icon: 'pack://textures/editor/Paste.png?filtering=point',
            tooltip: 'Left mouse click or drag-to-paint',
            tooltipLocId: 'paste.toolRail.description',
        });
        this.tool.onModalToolActivation.subscribe((eventData) => {
            this.selectionPreview.visible = eventData.isActiveTool;
            if (eventData.isActiveTool) {
                uiSession.extensionContext.cursor.resetToDefaultState();
                this.updateSelectionPreview(uiSession.extensionContext);
                this.tryUpdateToSelection(uiSession);
            }
        });
        const pane = uiSession.createPropertyPane({
            titleStringId: 'paste.pane.title',
            titleAltText: 'Paste',
        });
        this.settings = Editor.createPaneBindingObject(pane, this.getDefaultClipboardSettings());
        const submitPastePreviewAction = uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.doPaste(uiSession.extensionContext, this.generateWriteOptions(this.settings));
            },
        });
        pane.addButtonAndBindAction(submitPastePreviewAction, {
            titleStringId: 'paste.pane.submitButton',
            titleAltText: 'Confirm Paste',
        });
        const transformPane = pane.createPropertyPane({
            titleStringId: 'paste.pane.transform.title',
            titleAltText: 'Transform',
        });
        transformPane.addVec3(this.settings, 'origin', {
            titleStringId: 'paste.pane.transform.origin.title',
            titleAltText: 'Origin',
            minX: Number.MIN_SAFE_INTEGER,
            minY: Number.MIN_SAFE_INTEGER,
            minZ: Number.MIN_SAFE_INTEGER,
            onChange: (_obj, _property, _oldValue, _newValue) => {
                this.updateSelectionPreview(uiSession.extensionContext);
            },
        });
        transformPane.addDropdown(this.settings, 'rotationIndex', {
            titleStringId: 'paste.pane.transform.rotation.title',
            titleAltText: 'Rotate',
            dropdownItems: [
                {
                    displayAltText: '0°',
                    displayStringId: 'paste.pane.transform.rotation.none',
                    value: 0,
                },
                {
                    displayAltText: '90°',
                    displayStringId: 'paste.pane.transform.rotation.90',
                    value: 1,
                },
                {
                    displayAltText: '180°',
                    displayStringId: 'paste.pane.transform.rotation.180',
                    value: 2,
                },
                {
                    displayAltText: '270°',
                    displayStringId: 'paste.pane.transform.rotation.270',
                    value: 3,
                },
            ],
            onChange: (_obj, _property, _oldValue, _newValue) => {
                this.updateSelectionPreview(uiSession.extensionContext);
            },
        });
        transformPane.addBool(this.settings, 'mirrorX', {
            titleStringId: 'paste.pane.transform.mirrorX',
            titleAltText: 'Mirror X',
            onChange: (_obj, _property, _oldValue, _newValue) => {
                this.updateSelectionPreview(uiSession.extensionContext);
            },
        });
        transformPane.addBool(this.settings, 'mirrorZ', {
            titleStringId: 'paste.pane.transform.mirrorZ',
            titleAltText: 'Mirror Z',
            onChange: (_obj, _property, _oldValue, _newValue) => {
                this.updateSelectionPreview(uiSession.extensionContext);
            },
        });
        this.tool.bindPropertyPane(pane);
        const copyAction = uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.doCopy(uiSession);
            },
        });
        uiSession.inputManager.registerKeyBinding(Editor.EditorInputContext.GlobalToolMode, copyAction, Editor.KeyboardKey.KEY_C, Editor.InputModifier.Control);
        const cutAction = uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.doCopy(uiSession);
                deleteOperation(uiSession.extensionContext).catch(e => console.error(e));
            },
        });
        uiSession.inputManager.registerKeyBinding(Editor.EditorInputContext.GlobalToolMode, cutAction, Editor.KeyboardKey.KEY_X, Editor.InputModifier.Control);
        const pasteAction = uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                if (uiSession.toolRail.selectedOptionId === this.tool?.id) {
                    this.doPaste(uiSession.extensionContext, this.generateWriteOptions(this.settings));
                }
                else {
                    this.doQuickPaste(uiSession);
                }
            },
        });
        uiSession.inputManager.registerKeyBinding(Editor.EditorInputContext.GlobalToolMode, pasteAction, Editor.KeyboardKey.KEY_V, Editor.InputModifier.Control);
        uiSession.inputManager.registerKeyBinding(Editor.EditorInputContext.GlobalToolMode, uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.selectPasteTool(uiSession);
            },
        }), Editor.KeyboardKey.KEY_V, Editor.InputModifier.Control | Editor.InputModifier.Shift);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.selectionPreview.clear();
                if (this.fallbackToolId !== undefined) {
                    uiSession.toolRail.setSelectedOptionId(this.fallbackToolId, true);
                }
            },
        }), Editor.KeyboardKey.KEY_D, Editor.InputModifier.Control);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, getAxisAlignedDirection(uiSession.extensionContext.player.getRotation().y));
            },
        }), Editor.KeyboardKey.UP);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, getAxisAlignedDirection(uiSession.extensionContext.player.getRotation().y + 180));
            },
        }), Editor.KeyboardKey.DOWN);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, getAxisAlignedDirection(uiSession.extensionContext.player.getRotation().y + 270));
            },
        }), Editor.KeyboardKey.LEFT);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, getAxisAlignedDirection(uiSession.extensionContext.player.getRotation().y + 90));
            },
        }), Editor.KeyboardKey.RIGHT);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, { x: 0, y: 1, z: 0 });
            },
        }), Editor.KeyboardKey.PAGE_UP);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, { x: 0, y: -1, z: 0 });
            },
        }), Editor.KeyboardKey.PAGE_DOWN);
        this.tool.registerMouseButtonBinding(uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.MouseRayCastAction,
            onExecute: (mouseRay, mouseProps) => {
                if (mouseProps.mouseAction === Editor.MouseActionType.LeftButton) {
                    if (mouseProps.inputType === Editor.MouseInputType.ButtonDown) {
                        this.movePreviewToRay(uiSession.extensionContext, mouseRay);
                    }
                }
            },
        }));
        this.tool.registerMouseDragBinding(uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.MouseRayCastAction,
            onExecute: (mouseRay, mouseProps) => {
                if (mouseProps.inputType === Editor.MouseInputType.Drag) {
                    this.movePreviewToRay(uiSession.extensionContext, mouseRay);
                }
            },
        }));
        this.tool.registerKeyBinding(submitPastePreviewAction, Editor.KeyboardKey.ENTER);
        // Add to the file menu
        coreMenuItems.edit.addItem({ name: 'resourcePack.editor.menuBar.edit.cut', displayStringLocId: 'resourcePack.editor.menuBar.edit.cut' }, cutAction);
        coreMenuItems.edit.addItem({ name: 'resourcePack.editor.menuBar.edit.copy', displayStringLocId: 'resourcePack.editor.menuBar.edit.copy' }, copyAction);
        coreMenuItems.edit.addItem({ name: 'resourcePack.editor.menuBar.edit.quickPaste', displayStringLocId: 'resourcePack.editor.menuBar.edit.quickPaste' }, pasteAction);
    }
    teardown() {
        this.pastePreviewLocation = { x: 0, y: 0, z: 0 };
        this.selectionPreview.clear();
        this.settings = this.getDefaultClipboardSettings();
        this.tool = undefined;
    }
    resetSettings() {
        // We can't just reinitialize this.settings or else the Pane's settings tracking breaks down.
        this.settings.rotationIndex = 0;
        this.settings.mirrorX = false;
        this.settings.mirrorZ = false;
        this.settings.origin = { x: 0, y: 0, z: 0 };
    }
    selectPasteTool(uiSession) {
        uiSession.toolRail.setSelectedOptionId(this.tool?.id, true);
        this.updateSelectionPreview(uiSession.extensionContext);
        this.tryUpdateToSelection(uiSession);
    }
    doCopy(uiSession) {
        const clipboardManager = uiSession.extensionContext.clipboardManager;
        const selectionManager = uiSession.extensionContext.selectionManager;
        clipboardManager.clipboard.readFromSelection(selectionManager.selection);
        uiSession.extensionContext.player.sendMessage('Selection Copied');
        this.resetSettings();
        if (uiSession.toolRail.selectedOptionId === this.tool?.id) {
            this.updateSelectionPreview(uiSession.extensionContext);
        }
    }
    doQuickPaste(uiSession) {
        const extensionContext = uiSession.extensionContext;
        const selectionManager = extensionContext.selectionManager;
        if (selectionManager.selection.isEmpty) {
            uiSession.toolRail.setSelectedOptionId(this.tool?.id, true);
            this.tryUpdateToSelection(uiSession);
        }
        else {
            this.tryUpdateToSelection(uiSession);
            this.doPaste(uiSession.extensionContext, this.generateWriteOptions(this.settings));
        }
    }
    doPaste(extensionContext, writeOptions) {
        const clipboardManager = extensionContext.clipboardManager;
        const transactionManager = extensionContext.transactionManager;
        transactionManager.openTransaction('Paste');
        clipboardManager.clipboard.writeToWorld(this.pastePreviewLocation, writeOptions);
        transactionManager.commitOpenTransaction();
    }
    tryUpdateToSelection(uiSession) {
        const selectionManager = uiSession.extensionContext.selectionManager;
        let rotation = this.getClipboardRotationFromDropdownIndex(this.settings.rotationIndex);
        let bounds;
        if (!selectionManager.selection.isEmpty) {
            bounds = selectionManager.selection.boundingBox;
        }
        else {
            const cursorPosition = uiSession.extensionContext.cursor.position;
            const clipboardSize = uiSession.extensionContext.clipboardManager.clipboard.size;
            bounds = new Editor.BoundingBox(cursorPosition.x, cursorPosition.y, cursorPosition.z, cursorPosition.x + clipboardSize.x, cursorPosition.y + clipboardSize.y, cursorPosition.z + clipboardSize.z);
            this.settings.rotationIndex = 0;
            rotation = Editor.ClipboardRotation.none;
        }
        switch (rotation) {
            case Editor.ClipboardRotation.none: {
                this.pastePreviewLocation = bounds.min;
                break;
            }
            case Editor.ClipboardRotation.Rotate90: {
                this.pastePreviewLocation = { x: bounds.max.x, y: bounds.min.y, z: bounds.min.z };
                break;
            }
            case Editor.ClipboardRotation.Rotate180: {
                this.pastePreviewLocation = { x: bounds.max.x, y: bounds.min.y, z: bounds.max.z };
                break;
            }
            case Editor.ClipboardRotation.Rotate270: {
                this.pastePreviewLocation = { x: bounds.min.x, y: bounds.min.y, z: bounds.max.z };
                break;
            }
            default: {
                console.error('Unknown Rotation, unable to paste.');
                return;
            }
        }
    }
    generateWriteOptions(settings) {
        const writeOptions = new Editor.ClipboardWriteOptions();
        writeOptions.rotation = this.getClipboardRotationFromDropdownIndex(this.settings.rotationIndex);
        if (settings.mirrorX) {
            if (settings.mirrorZ) {
                writeOptions.mirror = Editor.ClipboardMirrorAxis.XZ;
            }
            else {
                writeOptions.mirror = Editor.ClipboardMirrorAxis.X;
            }
        }
        else if (settings.mirrorZ) {
            writeOptions.mirror = Editor.ClipboardMirrorAxis.Z;
        }
        writeOptions.anchor = { x: -1, y: -1, z: -1 };
        writeOptions.offset = { x: settings.origin.x, y: settings.origin.y, z: settings.origin.z };
        return writeOptions;
    }
    updateSelectionPreview(extensionContext) {
        const writeOptions = this.generateWriteOptions(this.settings);
        const clipboardManager = extensionContext.clipboardManager;
        this.selectionPreview.copyFrom(clipboardManager.clipboard.getPredictedWriteAsSelection(this.pastePreviewLocation, writeOptions));
    }
    movePreviewToPlayer(extensionContext) {
        this.pastePreviewLocation = findPasteTarget(extensionContext.player);
        this.updateSelectionPreview(extensionContext);
    }
    movePreviewToRay(extensionContext, ray) {
        this.pastePreviewLocation = findPasteTarget(extensionContext.player, ray);
        this.updateSelectionPreview(extensionContext);
    }
    movePreview(extensionContext, offset) {
        this.pastePreviewLocation = {
            x: this.pastePreviewLocation.x + offset.x,
            y: this.pastePreviewLocation.y + offset.y,
            z: this.pastePreviewLocation.z + offset.z,
        };
        this.updateSelectionPreview(extensionContext);
    }
    getClipboardRotationFromDropdownIndex(index) {
        if (index < 0 || index >= this.rotationLookup.length) {
            console.error('Unexpected rotation index, unable to convert to clipboard rotation.');
            return this.rotationLookup[0];
        }
        return this.rotationLookup[index % this.rotationLookup.length];
    }
}

class DeleteBehavior {
    constructor(uiSession, coreMenuItems) {
        const deleteAction = uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                deleteOperation(uiSession.extensionContext).catch(e => console.error(e));
            },
        });
        coreMenuItems.edit.addItem({ name: 'resourcePack.editor.menuBar.edit.delete', displayStringLocId: 'resourcePack.editor.menuBar.edit.delete' }, deleteAction);
        uiSession.inputManager.registerKeyBinding(Editor.EditorInputContext.GlobalEditor, deleteAction, Editor.KeyboardKey.DELETE);
    }
    teardown() { }
}

async function deleteOperation(context) {
    if (context.selectionManager.selection.isEmpty) {
        console.log('selection volume is empty - nothing to clear');
        return;
    }
    context.transactionManager.openTransaction('Delete');
    context.transactionManager.trackBlockChangeSelection(context.selectionManager.selection);
    const player = context.player;
    const dimension = player.dimension;
    await Editor.executeLargeOperation(context.selectionManager.selection, (blockLocation) => {
        const block = dimension.getBlock(blockLocation);
        if (block) {
            block.isWaterlogged = false;
            block.setType(Server.MinecraftBlockTypes.air);
        }
    })
        .catch(e => {
        console.error(e);
        context.transactionManager.discardOpenTransaction();
    })
        .then(() => {
        context.transactionManager.commitOpenTransaction();
    });
}

class UndoRedoBehavior {
    constructor(uiSession, coreMenuItems) {
        // Set actions
        const undoAction = uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.extensionContext.transactionManager.undo();
            },
        });
        const redoAction = uiSession.actionManager.createAction({
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.extensionContext.transactionManager.redo();
            },
        });
        // Add actions to menu
        coreMenuItems.edit.addItem({ name: 'resourcePack.editor.menuBar.edit.undo', displayStringLocId: 'resourcePack.editor.menuBar.edit.undo' }, undoAction);
        coreMenuItems.edit.addItem({ name: 'resourcePack.editor.menuBar.edit.redo', displayStringLocId: 'resourcePack.editor.menuBar.edit.redo' }, redoAction);
        // Create key bindings
        uiSession.inputManager.registerKeyBinding(Editor.EditorInputContext.GlobalEditor, undoAction, Editor.KeyboardKey.KEY_Z, Editor.InputModifier.Control);
        uiSession.inputManager.registerKeyBinding(Editor.EditorInputContext.GlobalEditor, redoAction, Editor.KeyboardKey.KEY_Y, Editor.InputModifier.Control);
    }
    teardown() { }
}