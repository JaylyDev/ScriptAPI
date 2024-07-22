import { Player, world } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";
let form = new ModalFormData();
let effectList = [
  { name: "Regeneration", id: "minecraft:regeneration", },
  { name: "Resistance", id: "minecraft:resistance", },
  { name: "Fire Resistance", id: "minecraft:fire_resistance", },
  { name: "Poison", id: "minecraft:poison", }
];
form.title("Effect Generator");
form.textField("Target", "Target of Effect");
form.dropdown("Effect Type", effectList.map(effect => effect.name));
form.slider("Effect Level", 0, 255, 1);
form.toggle("Hide Effect Particle", true);
for (const player of world.getAllPlayers()) {
  form.show(player).then((response) => {
    if (response.canceled) {
      player.sendMessage("Canceled due to " + response.cancelationReason);
    } else {
      const [ targetName, dropdownValue, effectLevel, hideParticles ] = response.formValues;
      if (typeof dropdownValue !== 'string' || typeof dropdownValue !== 'number' || typeof effectLevel !== 'number' || typeof hideParticles !== 'boolean') return player.sendMessage("Cannot process form result.");
      const target = world.getAllPlayers().find(player => player.name === targetName);
      if(!(target instanceof Player)) return player.sendMessage("Target does not exist.");
      target.addEffect(effectList[dropdownValue].id, 50, { amplifier: effectLevel, showParticles: !hideParticles });
    }
  });
}
