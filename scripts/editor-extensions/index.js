import * as Editor from "@minecraft/server-editor";
import * as Server from "@minecraft/server";
import { Shutdown } from "./utils";

//Tools
import CylinderTool from "./Extensions/CylinderTool";
import SphereTool from "./Extensions/SphereTool";
import CubeTool from "./Extensions/CubeTool";

import StructurePlacerTool from "./Extensions/StructurePlacerTool";
import StructureSaverTool from "./Extensions/StructureSaverTool";

import BlockModifierTool from "./Extensions/BlockModifierTool";
import EntitySpawnerTool from "./Extensions/EntitySpawnerTool";
import ItemSpawnerTool from "./Extensions/ItemSpawnerTool";
import ReplaceBlocksTool from "./Extensions/ReplaceBlocksTool";
import BlocksCounterTool from "./Extensions/BlocksCounterTool";
//import CoreEditor from "./Extensions/CoreEditor";

Editor.registerEditorExtension( "cylinderTool", CylinderTool, Shutdown );
Editor.registerEditorExtension( "sphereTool", SphereTool, Shutdown );
Editor.registerEditorExtension( "cubeBrush", CubeTool, Shutdown );

Editor.registerEditorExtension( "divider", ((uiSession) => uiSession.toolRail.addTool({ displayString: "Divider", icon: "pack://textures/editor/divider.png?filtering=point" })), Shutdown );

Editor.registerEditorExtension( "blocksCounterTool", BlocksCounterTool, Shutdown );

Editor.registerEditorExtension( "divider_", ((uiSession) => uiSession.toolRail.addTool({ displayString: "Divider", icon: "pack://textures/editor/divider.png?filtering=point" })), Shutdown );

Editor.registerEditorExtension( "structurePlacerTool", StructurePlacerTool, Shutdown );
Editor.registerEditorExtension( "structureSaverTool", StructureSaverTool, Shutdown );

Editor.registerEditorExtension( "divider__", ((uiSession) => uiSession.toolRail.addTool({ displayString: "Divider", icon: "pack://textures/editor/divider.png?filtering=point" })), Shutdown );

Editor.registerEditorExtension( "entitySpawnerTool", EntitySpawnerTool, Shutdown );
Editor.registerEditorExtension( "itemSpawnerTool", ItemSpawnerTool, Shutdown );

Editor.registerEditorExtension( "_divider_", ((uiSession) => uiSession.toolRail.addTool({ displayString: "Divider", icon: "pack://textures/editor/divider.png?filtering=point" })), Shutdown ) ;

Editor.registerEditorExtension( "blockModifier", BlockModifierTool, Shutdown );
Editor.registerEditorExtension( "replaceBlocksTool", ReplaceBlocksTool, Shutdown );
//Editor.registerEditorExtension( "CoreEditor", CoreEditor, Shutdown );



//Actions
import NightVision from "./Extensions/Actions/NightVision";

Editor.registerEditorExtension( "nightVision", NightVision, Shutdown );



//StatusBars
import * as PlayerPosition from "./Extensions/StatusBars/PlayerPosition";

Editor.registerEditorExtension( "playerPosition", PlayerPosition.Activate, PlayerPosition.Shutdown );