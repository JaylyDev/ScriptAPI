import { registerEditorExtension } from "@minecraft/server-editor";
/**
 * @param {import("@minecraft/server-editor").IPlayerUISession} uiSession
 */
export function testExtension(uiSession) {
  uiSession.builtInUIManager.updateLogPanelVisibility(false)
  uiSession.scratchStorage = {
    hello: 'world'
  }
  uiSession.scratchStorage[0] = 'e'
}
;
registerEditorExtension("TestExtension", testExtension);
