// test script for server-editor-bindings 0.3.1
// @ts-nocheck
import {
  ActionTypes,
  InputModifier,
  KeyboardKey,
  registerEditorExtension,
} from "@minecraft/server-editor";

registerEditorExtension("jayly", (session) => {
  const tool = session.toolRail.addTool({
    displayString: "Test button",
    tooltip: "Left mouse click or drag-to-paint",
    icon: "pack://textures/editor/Cube.png?filtering=point",
  });
  const menu = session.createMenu({
    name: "test",
    displayStringLocId: "test.mc",
  });

  tool.onModalToolActivation.subscribe((event) => {
    if (!event.isActiveTool) return;
    const clipboardManager = session.extensionContext.clipboardManager;
    const selectionManager = session.extensionContext.selectionManager;

    const {
      peekLastVolume,
      borderColor,
      boundingBox,
      isEmpty,
      visible,
      fillColor,
    } = selectionManager.createSelection();

    peekLastVolume.boundingBox.center;
    borderColor.red;
    borderColor.green;
    borderColor.blue;
    borderColor.alpha;
    boundingBox.center.x;
    isEmpty.valueOf();
    visible.valueOf;
    fillColor.green;

    tool.registerKeyBinding(
      {
        actionType: ActionTypes.NoArgsAction,
        id: "testid",
        onExecute() {
          console.warn("test");
        },
      },
      KeyboardKey.F4,
      InputModifier.Alt
    );

    tool.registerMouseButtonBinding(
      session.actionManager.createAction({
        actionType: ActionTypes.MouseRayCastAction,
        onExecute(mouseRay, mouseProps) {
          console.warn(mouseProps.inputType, mouseRay.location);
        },
      })
    );
    tool.registerMouseDragBinding(
      session.actionManager.createAction({
        actionType: ActionTypes.NoArgsAction,
        onExecute() {},
      })
    );

    tool.registerMouseWheelBinding(
      session.actionManager.createAction({
        actionType: ActionTypes.NoArgsAction,
        onExecute() {},
      })
    );
    menu.addItem(
      {
        name: "e",
        displayStringLocId: "e",
      },
      session.actionManager.createAction({
        actionType: ActionTypes.MouseRayCastAction,
        onExecute(mouseRay, mouseProps) {
          mouseProps.inputType;
          mouseRay.cursorBlockLocation.x;
        },
      })
    );
  });
});
