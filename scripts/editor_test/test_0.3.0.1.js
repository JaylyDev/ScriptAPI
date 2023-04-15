// test script for server-editor-bindings 0.3.1
// @ts-nocheck
import { registerEditorExtension, ClipboardMirrorAxis, ClipboardRotation } from "@minecraft/server-editor";

registerEditorExtension(
  'jayly',
  (session) => {
    const tool = session.toolRail.addTool({
      displayString: "Test button",
      tooltip: "Left mouse click or drag-to-paint",
      icon: "pack://textures/editor/Cube.png?filtering=point",
    });

    tool.onModalToolActivation.subscribe((event) => {
      if (!event.isActiveTool) return;
      const clipboardManager = session.extensionContext.clipboardManager;
      const selectionManager = session.extensionContext.selectionManager;

      clipboardManager.clipboard.readFromSelection(selectionManager.selection);
      clipboardManager.clipboard.getPredictedWriteAsSelection(
        { x: 0, y: 0, z: 0 },
        {
          anchor: { x: 0, y: 0, z: 0 },
          offset: undefined,
          mirror: ClipboardMirrorAxis.none,
          rotation: ClipboardRotation.none
        }
      )
    });
  }
);