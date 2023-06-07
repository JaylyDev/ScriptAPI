/**
 * @param {import("@minecraft/server-editor").IPlayerUISession} uiSession 
 */
export default (uiSession) => {
    uiSession.toolRail.addTool(
        {
            displayAltText: "Divider",
            icon: "pack://textures/editor/divider.png?filtering=point",
        },
    );
};