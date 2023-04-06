import { FullbrightToggle } from "./index";
import { registerEditorExtension } from "@minecraft/server-editor";
export function createMenu(uiSession) {
    if (!uiSession.scratchStorage) {
        throw new Error('Core UI initialization order incorrect');
    }
    const edit = uiSession.createMenu({
        name: 'FullBright',
        displayStringLocId: 'FullBright',
    });
    edit.show();
    return edit;
}
;
registerEditorExtension('nightVision', (uiSession) => {
    uiSession.scratchStorage = {};
    // Initialize tool rail.
    uiSession.toolRail.show();
    // Add selection functionality
    new FullbrightToggle(uiSession, createMenu(uiSession));
});
