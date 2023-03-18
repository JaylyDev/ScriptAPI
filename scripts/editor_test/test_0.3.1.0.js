import { registerEditorExtension, BlockVolume } from "@minecraft/server-editor"

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
      const transactionManager = session.extensionContext.transactionManager;
      const clipboardManager = session.extensionContext.clipboardManager;
      
      transactionManager.trackBlockChangeList([
        { x: 0, y: 0, z: 0 }
      ]);

      clipboardManager.clipboard.readFromWorld(
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 },
      )

      clipboardManager.create().clear()
    });
  }
);