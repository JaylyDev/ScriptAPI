import * as Server from "@minecraft/server";
import * as Editor from "@minecraft/server-editor";
import { Color } from "../../../utils";
/**
 * @param {import("@minecraft/server-editor").IPlayerUISession} uiSession 
 */
export const Start = (uiSession) => {
    uiSession.log.debug( `Initializing ${uiSession.extensionContext.extensionName} extension` );
    const tool = uiSession.toolRail.addTool(
        {
            displayAltText: "Block Modifier",
            tooltipAltText: "",
            icon: "pack://textures/editor/block_modifier.png?filtering=point",
        },
    );

    uiSession.scratchStorage = {
        currentCursorState: {
            outlineColor: new Color( 1, 1, 0, 1 ),
            controlMode: Editor.CursorControlMode.KeyboardAndMouse,
            targetMode: Editor.CursorTargetMode.Block,
            visible: true,
            fixedModeDistance: 5
        },
    };
    
    tool.onModalToolActivation.subscribe(
        eventData => {
            if (eventData.isActiveTool)
                uiSession.extensionContext.cursor.setProperties( uiSession.scratchStorage.currentCursorState );
        },
    );
    
    tool.registerMouseButtonBinding(
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.MouseRayCastAction,
                // @ts-ignore
                onExecute: ( mouseRay, mouseProps ) => {
                    if (mouseProps.mouseAction == Editor.MouseActionType.LeftButton) {
                        if (mouseProps.inputType == Editor.MouseInputType.ButtonDown) {
                            const player = uiSession.extensionContext.player;
                            blockModifier( uiSession, tool, player, uiSession.extensionContext.cursor.getPosition() );
                        };
                    };
                },
            },
        ),
    );
};

const blockModifier = ( /** @type {Editor.IPlayerUISession} */ uiSession, /** @type {Editor.IModalTool} */ tool, /** @type {Server.Player} */ player, /** @type {Server.Vector3} */ location ) => {
    const targetBlock = player.dimension.getBlock( location );
    const pane = uiSession.createPropertyPane(
        {
            titleAltText: "Block Modifier",
            width: 40,
        },
    );
    
    const settings = Editor.bindDataSource(
        pane,
        {
            blockType: targetBlock.typeId,
            newBlockType: Server.MinecraftBlockTypes.stone,
            location: targetBlock.location,
            waterlogged: targetBlock.isWaterlogged,
            weirdo_direction: targetBlock.permutation.getState("weirdo_direction"),
            direction: targetBlock.permutation.getState("direction"),
            lever_direction: targetBlock.permutation.getState("lever_direction"),
            brushed_progress: targetBlock.permutation.getState("brushed_progress"),
            growth: targetBlock.permutation.getState("growth"),
            redstone_signal: targetBlock.permutation.getState("redstone_signal"),
            repeater_delay: targetBlock.permutation.getState("repeater_delay"),
            rail_direction: targetBlock.permutation.getState("rail_direction"),
            damage: targetBlock.permutation.getState("damage"),
        },
    );

    pane.addString(
        settings,
        "blockType",
        {
            titleAltText: "Block Type",
            enable: false,
        },
    );

    pane.addVector3(
        settings,
        "location",
        {
            titleAltText: "Location",
            enable: false,
            minX: Number.MIN_SAFE_INTEGER,
            minY: Number.MIN_SAFE_INTEGER,
            minZ: Number.MIN_SAFE_INTEGER,
        }
    );

    pane.addDivider();

    pane.addBlockPicker(
        settings,
        "newBlockType",
        { titleAltText: "Block Type" },
    );

    pane.addButton(
        uiSession.actionManager.createAction(
            {
                actionType: Editor.ActionTypes.NoArgsAction,
                onExecute: async () => {
                    pane.dispose();
                    targetBlock.setType( settings.newBlockType );
                    if (settings.newBlockType.id != "minecraft:air") blockModifier( uiSession, tool, player, location );
                },
            },
        ),
        {
            titleAltText: "Change Type",
        }
    );

    pane.addDivider();
    
    if (Server.MinecraftBlockTypes.get( targetBlock.typeId ).canBeWaterlogged) {
        pane.addBool(
            settings,
            "waterlogged",
            {
                titleAltText: "Waterlogged",
                onChange: ( _obj, _property, _oldValue, _newValue ) => {
                    targetBlock.isWaterlogged = settings.waterlogged;
                },
            }
        );
    };

    if (targetBlock.permutation.getState( "lever_direction" )) {
        pane.addDropdown(
            settings,
            "lever_direction",
            {
                titleAltText: "Lever Direction",
                // @ts-ignore
                dropdownItems: Server.BlockStates.get( "lever_direction" ).validValues.map(
                    (value) => (
                        {
                            displayAltText: value,
                            value,
                        }
                    ),
                ),
                onChange: ( _obj, _property, _oldValue, _newValue ) => {
                    try {
                        const blockPermutation = Server.BlockPermutation.resolve(
                            targetBlock.typeId,
                            { lever_direction: settings.lever_direction },
                        );

                        targetBlock.setPermutation( blockPermutation );
                    } catch(e) {
                        pane.dispose();
                    };
                },
            }
        );
    };
    
    if (targetBlock.permutation.getState( "redstone_signal" ) != undefined) {
        pane.addNumber(
            // @ts-ignore
            settings,
            "redstone_signal",
            {
                titleAltText: "Redstone Signal",
                min: 0,
                max: 15,
                showSlider: true,
                onChange: ( _obj, _property, _oldValue, _newValue ) => {
                    try {
                        const blockPermutation = Server.BlockPermutation.resolve(
                            targetBlock.typeId,
                            { redstone_signal: settings.redstone_signal },
                        );

                        targetBlock.setPermutation( blockPermutation );
                    } catch(e) {
                        pane.dispose();
                    };
                },
            }
        );
    };

    if (targetBlock.permutation.getState( "repeater_delay" ) != undefined) {
        pane.addNumber(
            // @ts-ignore
            settings,
            "repeater_delay",
            {
                titleAltText: "Repeater Delay",
                min: 0,
                max: 3,
                showSlider: true,
                onChange: ( _obj, _property, _oldValue, _newValue ) => {
                    try {
                        const blockPermutation = Server.BlockPermutation.resolve(
                            targetBlock.typeId,
                            { repeater_delay: settings.repeater_delay },
                        );

                        targetBlock.setPermutation( blockPermutation );
                    } catch(e) {
                        pane.dispose();
                    };
                },
            }
        );
    };

    if (
        targetBlock.permutation.getState( "weirdo_direction" ) != undefined
        || targetBlock.permutation.getState( "direction" ) != undefined
    ) {
        pane.addNumber(
            // @ts-ignore
            settings,
            targetBlock.permutation.getState( "weirdo_direction" ) != undefined ? "weirdo_direction" :"direction",
            {
                titleAltText: "Direction",
                min: 0,
                max: 3,
                showSlider: true,
                onChange: ( _obj, _property, _oldValue, _newValue ) => {
                    try {
                        let direction = targetBlock.permutation.getState( "weirdo_direction" ) != undefined ? { weirdo_direction: settings.weirdo_direction } : { direction: settings.direction };
                        const blockPermutation = Server.BlockPermutation.resolve(
                            targetBlock.typeId,
                            direction,
                        );

                        targetBlock.setPermutation( blockPermutation );
                    } catch(e) {};
                },
            }
        );
    };

    if (targetBlock.permutation.getState( "brushed_progress" ) != undefined) {
        pane.addNumber(
            // @ts-ignore
            settings,
            "brushed_progress",
            {
                titleAltText: "Brushed Progress",
                min: 0,
                max: 3,
                showSlider: true,
                onChange: ( _obj, _property, _oldValue, _newValue ) => {
                    try {
                        const blockPermutation = Server.BlockPermutation.resolve(
                            targetBlock.typeId,
                            { brushed_progress: settings.brushed_progress },
                        );

                        targetBlock.setPermutation( blockPermutation );
                    } catch(e) {
                        pane.dispose();
                    };
                },
            }
        );
    };

    if (targetBlock.permutation.getState( "growth" ) != undefined) {
        pane.addNumber(
            // @ts-ignore
            settings,
            "growth",
            {
                titleAltText: "Growth",
                min: 0,
                max: 7,
                showSlider: true,
                onChange: ( _obj, _property, _oldValue, _newValue ) => {
                    try {
                        const blockPermutation = Server.BlockPermutation.resolve(
                            targetBlock.typeId,
                            { growth: settings.growth },
                        );

                        targetBlock.setPermutation( blockPermutation );  
                    } catch(e) {
                        pane.dispose();
                    };
                },
            }
        );
    };

    if (targetBlock.permutation.getState( "rail_direction" ) != undefined) {
        pane.addNumber(
            // @ts-ignore
            settings,
            "rail_direction",
            {
                titleAltText: "Rail Direction",
                min: 0,
                max: 9,
                showSlider: true,
                onChange: ( _obj, _property, _oldValue, _newValue ) => {
                    try {
                        const blockPermutation = Server.BlockPermutation.resolve(
                            targetBlock.typeId,
                            { rail_direction: settings.rail_direction },
                        );

                        targetBlock.setPermutation( blockPermutation );
                    } catch(e) {
                        pane.dispose();
                    };
                },
            }
        );
    };

    if (targetBlock.permutation.getState( "damage" )) {
        pane.addDropdown(
            settings,
            "damage",
            {
                titleAltText: "Damage",
                // @ts-ignore
                dropdownItems: Server.BlockStates.get( "damage" ).validValues.map(
                    (value) => (
                        {
                            displayAltText: value,
                            value,
                        }
                    ),
                ),
                onChange: ( _obj, _property, _oldValue, _newValue ) => {
                    try {
                        const blockPermutation = Server.BlockPermutation.resolve(
                            targetBlock.typeId,
                            { damage: settings.damage },
                        );
                            
                        targetBlock.setPermutation( blockPermutation );
                    } catch(e) {
                        pane.dispose();
                    };
                },
            }
        );
    };

    tool.bindPropertyPane( pane );
    pane.update( true );
};