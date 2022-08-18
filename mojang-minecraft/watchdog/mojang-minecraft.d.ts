declare module "mojang-minecraft" {
  /**
   * Contains a set of events that are available across the scope of the Minecraft add-on system.
   */
  export class SystemEvents {
    readonly 'beforeWatchdogTerminate': BeforeWatchdogTerminateEventSignal;
  }

  /**
  * Manages callbacks that are connected to a callback that will be called when a script
  * runtime is being terminated due to a violation of the performance watchdog system.
  */
  export class BeforeWatchdogTerminateEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a script runtime is being terminated due to a violation of the performance watchdog system.
     * @param callback 
     */
    subscribe(callback: (arg: BeforeWatchdogTerminateEvent) => void): (arg: BeforeWatchdogTerminateEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a script runtime is being terminated due to a violation of the performance watchdog system.
     * @param callback 
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeWatchdogTerminateEvent) => void): void;
  }
  /**
  * Contains information related to a script watchdog termination.
  */
  export class BeforeWatchdogTerminateEvent {
    'cancel': boolean;
    readonly 'terminateReason': string;
  }
  /**
  * A class that provides system-level events and functions.
  */
  export class System {
    /**
     * Contains a set of events that are applicable for the lifecycle of items in the Minecraft system.
     */
    readonly 'events': SystemEvents;
  }

  export const system: System;
}