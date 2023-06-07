import * as Server from "@minecraft/server";
/**
 * @param {import("@minecraft/server-editor").IPlayerUISession} uiSession 
 */
export const Shutdown = (uiSession) => {
    if (
        uiSession.scratchStorage
        && uiSession.scratchStorage.latestRunId !== -1
    ) {
        uiSession.scratchStorage.isDisposed = true;
        Server.system.clearRun(uiSession.scratchStorage.latestRunId);
    };
    
    uiSession.log.debug( `Shutting down ${uiSession.extensionContext.extensionName} extension` );
};