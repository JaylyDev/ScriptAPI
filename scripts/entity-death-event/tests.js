// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

import { EntityDeathEventSignal } from "./index.js";

const entityDeath = new EntityDeathEventSignal();

let callback = entityDeath.subscribe((evd) => {
  evd.hurtEntity.runCommandAsync("say this entity is dead");

  entityDeath.unsubscribe(callback);
});