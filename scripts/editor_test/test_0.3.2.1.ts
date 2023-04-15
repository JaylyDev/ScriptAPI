// @ts-nocheck
import { IPlayerUISession, registerEditorExtension } from "@minecraft/server-editor";

export function testExtension (uiSession: IPlayerUISession) {
  uiSession.teardown();
};

registerEditorExtension("TestExtension", testExtension);
