import { registerEditorExtension } from "@minecraft/server-editor";
export function testExtension(uiSession) {
    uiSession.teardown();
}
;
registerEditorExtension("TestExtension", testExtension);
