// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
//         Usernam#2058 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world, TimeOfDay } from '@minecraft/server';

/**
 * @returns The hours and minutes of the world time.
 * @example getworldtime.js
 * import { world } from '@minecraft/server';
 * 
 * const { hours, minutes } = GetWorldTime();
 * world.sendMessage(`The time is ${hours}:${minutes}`);
 */
function GetWorldTime () {
  const daytime = world.getTimeOfDay() + 6000;
  const datetime = new Date(daytime * 3.6 * 1000);
  const hours = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
  const minutes = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();

  return { hours, minutes };
};

/**
 * Gets the name of the time of day
 * @returns {keyof typeof TimeOfDay} 'Sunrise', 'Day', 'Noon', 'Sunset', 'Night', or 'Midnight'
 */
function getTimeOfDay () {
  const time = world.getTimeOfDay();
  if (time >= TimeOfDay.Sunrise || time < TimeOfDay.Day) return 'Sunrise';
  else if (time >= TimeOfDay.Day && time < TimeOfDay.Noon) return 'Day';
  else if (time >= TimeOfDay.Noon && time < TimeOfDay.Sunset) return 'Noon';
  else if (time >= TimeOfDay.Sunset && time < TimeOfDay.Night) return 'Sunset';
  else if (time >= TimeOfDay.Night && time < TimeOfDay.Midnight) return 'Night';
  else if (time >= TimeOfDay.Midnight && time < TimeOfDay.Sunrise) return 'Midnight';
};

export {
  getTimeOfDay,
  GetWorldTime
};