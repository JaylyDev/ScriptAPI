import { world } from "@minecraft/server";

for (const player of world.getPlayers()) {
  const health = player.getComponent("health");
  player.sendMessage("Your health is " + health.currentValue + "/" + health.effectiveMax);
  health.setCurrentValue(15); // set player to 15 hp
  health.resetToMaxValue();   // reset player to max hp
}
