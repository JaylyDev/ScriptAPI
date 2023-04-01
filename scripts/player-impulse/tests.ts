// Script example for ScriptAPI
// Author: Usernam#2058 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI

import { applyImpulse } from "./index";
import { Vector3, world } from "@minecraft/server";

const armorStand = [...world.getDimension("overworld").getEntities({ type: 'minecraft:armor_stand' })][0];
const player = world.getAllPlayers()[0];
const vector: Vector3 = { x: 0, y: 2, z: 0 };

armorStand.applyImpulse(vector);
applyImpulse(player, vector);
