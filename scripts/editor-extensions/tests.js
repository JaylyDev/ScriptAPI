import * as Editor from "@minecraft/server-editor";

//Tools
import { CylinderTool, SphereTool, CubeTool, EntitySpawnerTool, StructurePlacerTool, ReplaceBlocksTool } from "./index";

Editor.registerEditorExtension("cylinderTool", CylinderTool);
Editor.registerEditorExtension("sphereTool", SphereTool);
Editor.registerEditorExtension("cubeBrush", CubeTool);

Editor.registerEditorExtension("divider", uiSession => uiSession.toolRail.addTool({ displayString: "Divider", icon: "pack://textures/editor/divider.png?filtering=point" }));

Editor.registerEditorExtension("entitySpawnerTool", EntitySpawnerTool);
Editor.registerEditorExtension("structurePlacerTool", StructurePlacerTool);
Editor.registerEditorExtension("replaceBlocksTool", ReplaceBlocksTool);