export default (/** @type {import("@minecraft/server-editor").IPlayerUISession} */ uiSession) => {
    uiSession.toolRail.addTool(
        {
            displayString: "Divider",
            icon: "pack://textures/editor/divider.png?filtering=point",
        },
    );
};