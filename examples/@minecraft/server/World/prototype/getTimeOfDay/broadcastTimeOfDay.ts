import { TimeOfDay, system, world } from "@minecraft/server";

function GetWorldTime () {
  const daytime = world.getTimeOfDay() + 6000;
  const datetime = new Date(daytime * 3.6 * 1000);
  const hours = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
  const minutes = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();

  return { hours, minutes };
};

system.runInterval(() => {
  const { hours, minutes } = GetWorldTime();
  for (const player of world.getAllPlayers()) {
    player.onScreenDisplay.setActionBar(`Time - ${hours}:${minutes}`);
  }
});