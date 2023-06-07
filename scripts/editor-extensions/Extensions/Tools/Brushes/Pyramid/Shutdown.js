/**
 * @param {import("@minecraft/server-editor").IPlayerUISession} uiSession 
 */
export const Shutdown = (uiSession) => uiSession.log.debug( `Shutting down ${uiSession.extensionContext.extensionName} extension` );