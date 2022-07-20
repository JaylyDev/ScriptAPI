import { EntityDeathEventSignal } from "./index.js";

const entityDeath = new EntityDeathEventSignal();

let callback = entityDeath.subscribe((evd) => {
  evd.deadEntity.runCommandAsync("say this entity is dead");

  entityDeath.unsubscribe(callback);
});