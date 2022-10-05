# Spawn simulated player

You have to spawn a simulated player through a gametest test. To do this, register a gametest.

```js
import * as GameTest from '@minecraft/server-gametest';
import { BlockLocation } from '@minecraft/server';

// Name of the class of tests this test should be a part of.
const testClassName = 'testClass';
// Name of this specific test.
const testName = 'test';
// Implementation of the test function.
/**
 * @param {GameTest.Test} test
 */
const testFunction = (test) => {
  test.spawnSimulatedPlayer(new BlockLocation(0, 1, 0)); // Spawns simulated player on 0, 1, 0 from test origin
  // Simulated player code here
};

GameTest.register(testClassName, testName, testFunction)
```

To make simulated player stays on world until server close or behavior pack reloads, call function `RegistrationBuilder.maxTicks` and set the parameter to a very high number so it wouldn't despawn.

```js
GameTest.register(testClassName, testName, testFunction).maxTicks(0x7fffffff);
```