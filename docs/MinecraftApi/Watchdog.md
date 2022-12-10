# Watchdog

Watchdog is a performance watchdog system that is enabled in Minecraft script plugins by default.

## Server properties

Watchdog configuration can be modified via `server.properties` in Dedicated Server. This features are added since 1.19.20.

```properties
# Enables the watchdog (default = true)
script-watchdog-enable=true

# Sets the watchdog threshold for single tick hangs (default = 3000 ms)
script-watchdog-hang-threshold=3000

# Sets the watchdog threshold for single tick spikes (default = 100 ms)
script-watchdog-spike-threshold=100

# Sets the watchdog threshold for slow scripts over multiple ticks (default = 2ms)
script-watchdog-slow-threshold=2

# Saves and shuts down the world when the combined memory usage exceeds the given threshold (in megabytes). Setting this value to 0 disables the limit. (default = 250)
script-watchdog-memory-limit=250

# Produces a content log warning when the combined memory usage exceeds the given threshold (in megabytes). Setting this value to 0 disables the warning. (default = 100)
script-watchdog-memory-warning=100

# Enables watchdog exception handling via the events.beforeWatchdogTerminate event (default = true)
script-watchdog-enable-exception-handling=true

# Enables server shutdown in the case of an unhandled watchdog exception (default = true)
script-watchdog-enable-shutdown=true

# Throws a critical exception when a hang occurs (default = true)
script-watchdog-hang-exception=true
```

## Errors

These watchdog errors are thrown with `[Watchdog]` label in error.

- Slow-running script detected in behavior pack '%s' (x ms average)

  Script runtime is delayed by over a certain timeframe. This

- x ms script spike detected in behavior pack '%s'

  There is a spike in script runtime.

- Out of memory exception detected in behavior pack '%s'

  This error occurs when the combined memory usage exceeds.

  This saves and shuts down the world by Watchdog termination and cannot be canceled using `BeforeWatchdogTerminateEvent`.

- x ms script hang detected in behavior pack '%s'

  The scripts freezes at a certain location of your script for more than the watchdog threshold for single tick.

  This is usually caused by iteration, such as `while` loop and `for` loop.

- Stack overflow detected in behavior pack '%s'

  Occurs when there is a recursive function (a function that calls itself) without an exit point.

- High memory usage detected

  Produces a content log warning when the combined memory usage exceeds the given threshold in megabytes.

- Unhandled critical exception of type '%s' in behavior pack '%s'

  Produces a content log error when an unhandled critical exception occurs.