import * as Server from "@minecraft/server";
import * as Editor from "@minecraft/server-editor";
import { Color } from "../color/index";
/**
 * @param {import("@minecraft/server-editor").IPlayerUISession} uiSession
 */
export default (uiSession) => {
    const tool = uiSession.toolRail.addTool(
        {
            displayString: "Block Replace (Ctrl + R)",
            tooltip: "",
            icon: "pack://textures/editor/replace.png?filtering=point",
        },
    );

    uiSession.scratchStorage = {
        currentCursorState: {
            outlineColor: new Color(1, 1, 0, 1),
            controlMode: Editor.CursorControlMode.KeyboardAndMouse,
            targetMode: Editor.CursorTargetMode.Block,
            visible: true,
            fixedModeDistance: 5
        },
    };

    let lastAnchorPosition = { x: 0, y: 0, z: 0 };
    
    const pane = uiSession.createPropertyPane(
        {
            titleAltText: "Block Replace",
        },
    );

    const settings = Editor.createPaneBindingObject(
        pane,
        {
            origin: {
                x: 0,
                y: 0,
                z: 0,
            },
            size: {
                x: 0,
                y: 0,
                z: 0,
            },
            blockType: Server.MinecraftBlockTypes.stone,
            replaceWith: Server.MinecraftBlockTypes.stone,
        }
    );

    const singleClick = (uiSession, mouseRay, shiftPressed, ctrlPressed, altPressed) => {
        const clickLoc = mouseRay.cursorBlockLocation;
        if (!shiftPressed && !ctrlPressed && !altPressed) {
            uiSession.extensionContext.selectionManager.selection.clear();
            uiSession.extensionContext.selectionManager.selection.pushVolume(
                {
                    action: Server.CompoundBlockVolumeAction.Add,
                    volume: {
                        from: clickLoc,
                        to: clickLoc,
                    },
                }
            );
            lastAnchorPosition = clickLoc;
        } else if (shiftPressed && !ctrlPressed && !altPressed) {
            if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                uiSession.extensionContext.selectionManager.selection.pushVolume(
                    {
                        action: Server.CompoundBlockVolumeAction.Add,
                        volume: {
                            from: clickLoc,
                            to: clickLoc,
                        },
                    }
                );
                lastAnchorPosition = clickLoc;
            } else {
                const lastAnchorPosition_ = lastAnchorPosition;
                uiSession.extensionContext.selectionManager.selection.popVolume();
                const newVolume = { from: lastAnchorPosition_, to: clickLoc };
                uiSession.extensionContext.selectionManager.selection.pushVolume(
                    {
                        action: Server.CompoundBlockVolumeAction.Add,
                        volume: newVolume,
                    }
                );
            }
        } else if (ctrlPressed && !shiftPressed && !altPressed) {
            uiSession.extensionContext.selectionManager.selection.pushVolume(
                {
                    action: Server.CompoundBlockVolumeAction.Add,
                    volume: {
                        from: clickLoc,
                        to: clickLoc,
                    },
                }
            );
            lastAnchorPosition = clickLoc;
        } else if (altPressed && !shiftPressed && !ctrlPressed) {
            if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                uiSession.extensionContext.selectionManager.selection.pushVolume(
                    {
                        action: Server.CompoundBlockVolumeAction.Add,
                        volume: {
                            from: clickLoc,
                            to: clickLoc,
                        },
                    }
                );
                lastAnchorPosition = clickLoc;
            } else {
                const currentVolume = uiSession.extensionContext.selectionManager.selection.peekLastVolume().volume;
                const currentBounds = currentVolume.getBoundingBox();
                const translatedRayLocation = Server.Vector.subtract(new Server.Vector(mouseRay.location.x, mouseRay.location.y, mouseRay.location.z), new Server.Vector(currentBounds.min.x, currentBounds.min.y, currentBounds.min.z));
                const intersection = true;
                if (intersection) {
                    const newY = Math.ceil(translatedRayLocation.y) - 1;
                    const newVolume = { from: { x: currentBounds.min.x, y: currentBounds.min.y, z: currentBounds.min.z }, to: { x: currentBounds.max.x, y: newY, z: currentBounds.max.z } };
                    uiSession.extensionContext.selectionManager.selection.popVolume();
                    uiSession.extensionContext.selectionManager.selection.pushVolume(
                        {
                            action: Server.CompoundBlockVolumeAction.Add,
                            volume: newVolume,
                        }
                    );
                }
            }
        }
    };

    const keySelectAction = uiSession.actionManager.createAction(
        {
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                const blockLocation = uiSession.extensionContext.cursor.getPosition();
                const ray = {
                    location: { x: 0, y: 0, z: 0 },
                    direction: new Server.Vector(0, 0, 0),
                    cursorBlockLocation: blockLocation,
                    rayHit: false,
                };
                singleClick(uiSession, ray, false, false, false);
            },
        }
    );
    tool.registerKeyBinding(keySelectAction, Editor.KeyboardKey.ENTER, Editor.InputModifier.None);
    const keySelectMultipleAction = uiSession.actionManager.createAction(
        {
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                const blockLocation = uiSession.extensionContext.cursor.getPosition();
                const ray = {
                    location: { x: 0, y: 0, z: 0 },
                    direction: new Server.Vector(0, 0, 0),
                    cursorBlockLocation: blockLocation,
                    rayHit: false,
                };
                singleClick(uiSession, ray, false, true, false);
            },
        }
    );
    tool.registerKeyBinding(keySelectMultipleAction, Editor.KeyboardKey.ENTER, Editor.InputModifier.Control);
    const keySelectAndExtendAction = uiSession.actionManager.createAction(
        {
            actionType: Editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                const blockLocation = uiSession.extensionContext.cursor.getPosition();
                const ray = {
                    location: { x: 0, y: 0, z: 0 },
                    direction: new Server.Vector(0, 0, 0),
                    cursorBlockLocation: blockLocation,
                    rayHit: false,
                };
                singleClick(uiSession, ray, true, false, false);
            },
        }
    );
    tool.registerKeyBinding(keySelectAndExtendAction, Editor.KeyboardKey.ENTER, Editor.InputModifier.Shift);

    const singleClickAction = uiSession.actionManager.createAction(
        {
            actionType: Editor.ActionTypes.MouseRayCastAction,
            onExecute: (mouseRay, mouseProps) => {
                if (mouseProps.mouseAction === Editor.MouseActionType.LeftButton) {
                    if (mouseProps.inputType === Editor.MouseInputType.ButtonDown) {
                        if (mouseRay.rayHit) {
                            singleClick(uiSession, mouseRay, mouseProps.modifiers.shift, mouseProps.modifiers.ctrl, mouseProps.modifiers.alt);
                        } else {
                            uiSession.extensionContext.selectionManager.selection.clear();
                        }
                    } else if (mouseProps.inputType === Editor.MouseInputType.ButtonUp) {}
                }
            },
        }
    );
    tool.registerMouseButtonBinding(singleClickAction);

    const onOriginOrSizeChange = (_obj, _property, _oldValue, _newValue) => {
        if (_oldValue === _newValue) return;
        const selection = uiSession.extensionContext.selectionManager.selection;
        if (!selection.isEmpty) {
            const lastVolume = selection.peekLastVolume().volume;
            if (lastVolume) {
                const min = {
                    x: settings.origin.x,
                    y: settings.origin.y,
                    z: settings.origin.z,
                };
                const max = {
                    x: settings.origin.x + settings.size.x - 1,
                    y: settings.origin.y + settings.size.y - 1,
                    z: settings.origin.z + settings.size.z - 1,
                };
                const newVolume = { from: min, to: max };
                selection.popVolume();
                selection.pushVolume(
                    {
                        action: Server.CompoundBlockVolumeAction.Add,
                        volume: newVolume
                    }
                );
            }
        }
    };
    const subPaneTransform = pane.createPropertyPane(
        {
            titleAltText: "Transform",
        }
    );
    const originPropertyItem = subPaneTransform.addVec3(
        settings,
        "origin",
        {
            titleAltText: "Origin",
            enable: true,
            minX: Number.MIN_SAFE_INTEGER,
            minY: Number.MIN_SAFE_INTEGER,
            minZ: Number.MIN_SAFE_INTEGER,
            onChange: onOriginOrSizeChange,
        }
    );
    const sizePropertyItem = subPaneTransform.addVec3(
        settings,
        "size",
        {
            titleAltText: "Size",
            enable: true,
            minX: 1,
            minY: 1,
            minZ: 1,
            maxX: 100,
            maxY: 100,
            maxZ: 100,
            onChange: onOriginOrSizeChange,
        }
    );

    const onTickRefresh = (uiSession, tool) => {
        let ticks = 0;
        let tickRefreshHandle = Server.system.run(() => {
            if (uiSession.extensionContext.selectionManager === undefined) return;
            if (!settings) {
                console.error('Pane settings object not defined, unable to refresh values for selection.');
                return;
            }
            if (ticks++ % 5 === 0) {
                ticks = 0;
                let x = 0, y = 0, z = 0;
                let sx = 0, sy = 0, sz = 0;
                const selection = uiSession.extensionContext.selectionManager.selection;
                if (selection && !selection.isEmpty) {
                    const bounds = selection.peekLastVolume().volume.getBoundingBox();
                    x = bounds.min.x;
                    y = bounds.min.y;
                    z = bounds.min.z;
                    sx = bounds.spanX;
                    sy = bounds.spanY;
                    sz = bounds.spanZ;
                    if (!originPropertyItem?.enable) {
                        if (originPropertyItem) {
                            originPropertyItem.enable = true;
                        }
                    }
                    if (!sizePropertyItem?.enable) {
                        if (sizePropertyItem) {
                            sizePropertyItem.enable = true;
                        }
                    }
                } else {
                    if (originPropertyItem?.enable) {
                        if (originPropertyItem) {
                            originPropertyItem.enable = false;
                        }
                    }
                    if (sizePropertyItem?.enable) {
                        if (sizePropertyItem) {
                            sizePropertyItem.enable = false;
                        }
                    }
                }
                
                if (settings.origin.x !== x ||
                    settings.origin.y !== y ||
                    settings.origin.z !== z ||
                    settings.size.x !== sx ||
                    settings.size.y !== sy ||
                    settings.size.z !== sz) {
                    settings.origin.x = Math.trunc(x);
                    settings.origin.y = Math.trunc(y);
                    settings.origin.z = Math.trunc(z);
                    settings.size.x = Math.trunc(sx);
                    settings.size.y = Math.trunc(sy);
                    settings.size.z = Math.trunc(sz);
                }
            }
            if (uiSession.toolRail.selectedOptionId === tool.id) tickRefreshHandle = Server.system.run(() => onTickRefresh(uiSession, tool));
        });
    };

    tool.onModalToolActivation.subscribe(
        eventData => {
            if (eventData.isActiveTool) {
                uiSession.extensionContext.cursor.setProperties(uiSession.scratchStorage.currentCursorState);
                onTickRefresh(uiSession, tool);
            }
        },
    );
    
    uiSession.inputManager.registerKeyBinding(
        Editor.EditorInputContext.GlobalToolMode,
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.toolRail.setSelectedOptionId(tool.id, true);
                },
            },
        ),
        Editor.KeyboardKey.KEY_R,
        Editor.InputModifier.Control,
    );
    
    pane.addBlockPicker(
        settings,
        "blockType",
        {
            titleAltText: "Block Type",
        },
    );
    
    pane.addBlockPicker(
        settings,
        "replaceWith",
        {
            titleAltText: "Replace With",
        },
    );

    pane.addButtonAndBindAction(
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: async () => {
                    const player = uiSession.extensionContext.player;
                    const dimension = player.dimension;
                    if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                        player.sendMessage("No selection available to fill");
                        return;
                    };

                    uiSession.extensionContext.transactionManager.openTransaction("BlockReplacer");
                    uiSession.extensionContext.transactionManager.trackBlockChangeSelection(uiSession.extensionContext.selectionManager.selection);
                    await Editor.executeLargeOperation(uiSession.extensionContext.selectionManager.selection, (blockLocation) => {
                        const block = dimension.getBlock(blockLocation);
                        if (block) {
                            block.isWaterlogged = false;
                            if(block?.typeId == settings.blockType.id) block.setType(settings.replaceWith);
                        };
                    })
                    .catch(e => {
                        console.error(e);
                        uiSession.extensionContext.transactionManager.discardOpenTransaction();
                    })
                    .then(() => {
                        uiSession.extensionContext.transactionManager.commitOpenTransaction();
                    });
                },
            },
        ),
        {
            titleAltText: "Replace",
        },
    );

    pane.addDivider();
    pane.addButtonAndBindAction(
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.selectionManager.selection.clear();
                },
            }
        ),
        {
            titleAltText: "Deselect",
            variant: "secondary",
        }
    );
    
    tool.bindPropertyPane(pane);
};