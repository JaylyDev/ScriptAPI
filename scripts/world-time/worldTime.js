// Script examples for ScriptAPI
// Author: Usernam#2058 <Jayly Discord>
import { world, TimeOfDay } from '@minecraft/server';

function GetWorldTime () {
  const daytime = world.getTime() + 6000;
  const datetime = new Date(daytime * 3.6 * 1000);
  const hours = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
  const minutes = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();

  return { hours, minutes };
};

/**
 * @returns {TimeOfDay}
 */
function getTimeOfDay () {
  const time = world.getTime();
  if (time >= TimeOfDay.Sunrise || time < TimeOfDay.Day) return TimeOfDay.Sunrise;
  else if (time >= TimeOfDay.Day && time < TimeOfDay.Noon) return TimeOfDay.Day;
  else if (time >= TimeOfDay.Noon && time < TimeOfDay.Sunset) return TimeOfDay.Noon;
  else if (time >= TimeOfDay.Sunset && time < TimeOfDay.Night) return TimeOfDay.Sunset;
  else if (time >= TimeOfDay.Night && time < TimeOfDay.Midnight) return TimeOfDay.Night;
  else if (time >= TimeOfDay.Midnight && time < TimeOfDay.Sunrise) return TimeOfDay.Midnight;
};

export {
  getTimeOfDay,
  GetWorldTime
};