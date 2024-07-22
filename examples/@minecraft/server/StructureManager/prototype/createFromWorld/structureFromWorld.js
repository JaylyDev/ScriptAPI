import { StructureSaveMode, world } from "@minecraft/server";
import { Vector3Builder, Vector3Utils } from "@minecraft/math";
const player = world.getAllPlayers()[0];
const from = player.location;
const to = Vector3Utils.add(from, new Vector3Builder(15, 15, 15));
world.structureManager.createFromWorld('mystructure:test', player.dimension, from, to, { saveMode: StructureSaveMode.World });