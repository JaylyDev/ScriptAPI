import { WeatherType, system, world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((event) => {
  const { message, sender } = event;
  const { dimension } =sender;

  if (message === '!weather clear') {
    event.cancel = true;
    system.run(() => {
      dimension.setWeather(WeatherType.Clear);
    });
  };
});