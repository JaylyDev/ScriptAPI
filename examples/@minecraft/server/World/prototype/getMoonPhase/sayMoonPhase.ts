import { MoonPhase, world } from "@minecraft/server";

// Get the current moon phase
const moonPhase: MoonPhase = world.getMoonPhase();

// Display a message based on the current moon phase
switch (moonPhase) {
  case MoonPhase.FullMoon:
    world.sendMessage("It's full moon!");
    break;
  case MoonPhase.WaningGibbous:
    world.sendMessage("It's waning gibbous moon!");
    break;
  // Add cases for other moon phases as needed
  default:
    world.sendMessage("It's another phase of the moon.");
}
