// Script example for ScriptAPI
// Author: xKingDark <https://github.com/DarkGamerYT>
// Project: https://github.com/DarkGamerYT/Bedrock-Editor-Extension
import * as Editor from "@minecraft/server-editor";
import Divider from "./Extensions/Divider";
//Tools
import * as CylinderBrush from "./Extensions/Tools/Brushes/Cylinder/index";
import * as SphereBrush from "./Extensions/Tools/Brushes/Sphere/index";
import * as CubeBrush from "./Extensions/Tools/Brushes/Cube/index";
import * as StructurePlacer from "./Extensions/Tools/Structures/StructurePlacer/index";
import * as StructureSaver from "./Extensions/Tools/Structures/StructureSaver/index";
import * as EntitySpawner from "./Extensions/Tools/Spawners/EntitySpawner/index";
import * as ItemSpawner from "./Extensions/Tools/Spawners/ItemSpawner/index";
import * as BlocksCounter from "./Extensions/Tools/BlocksCounter/index";
import * as BlockModifier from "./Extensions/Tools/BlockModifier/index";
import * as BlocksReplacer from "./Extensions/Tools/BlocksReplacer/index";
import * as PlayerPosition from "./Extensions/StatusBars/PlayerPosition/index";
import * as NightVision from "./Extensions/Actions/NightVision/index";
//Actions
Editor.registerEditorExtension("nightVision", NightVision.Start, NightVision.Shutdown);
//StatusBars
Editor.registerEditorExtension("playerPosition", PlayerPosition.Start, PlayerPosition.Shutdown);
//Brushes
Editor.registerEditorExtension("cylinderBrush", CylinderBrush.Start, CylinderBrush.Shutdown);
Editor.registerEditorExtension("sphereBrush", SphereBrush.Start, SphereBrush.Shutdown);
Editor.registerEditorExtension("cubeBrush", CubeBrush.Start, CubeBrush.Shutdown);
//Divider
Editor.registerEditorExtension("divider_", Divider, () => { });
//Structures
Editor.registerEditorExtension("structurePlacer", StructurePlacer.Start, StructurePlacer.Shutdown);
Editor.registerEditorExtension("structureSaver", StructureSaver.Start, StructureSaver.Shutdown);
//Divider
Editor.registerEditorExtension("divider__", Divider, () => { });
//Spawners
Editor.registerEditorExtension("entitySpawner", EntitySpawner.Start, EntitySpawner.Shutdown);
Editor.registerEditorExtension("itemSpawner", ItemSpawner.Start, ItemSpawner.Shutdown);
//Divider
Editor.registerEditorExtension("_divider_", Divider, () => { });
Editor.registerEditorExtension("blocksCounter", BlocksCounter.Start, BlocksCounter.Shutdown);
Editor.registerEditorExtension("blockModifier", BlockModifier.Start, BlockModifier.Shutdown);
Editor.registerEditorExtension("blocksReplacer", BlocksReplacer.Start, BlocksReplacer.Shutdown);