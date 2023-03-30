// Script example for ScriptAPI
// Author: iBlqzed <https://github.com/iBlqzed>
// Project: https://github.com/JaylyDev/ScriptAPI

import { system, world } from "@minecraft/server"
import { TickEventSignal } from "tick-event/index"

const log = new Map()
const blockLog = new Map()

world.events.blockBreak.subscribe(({ block, brokenBlockPermutation, dimension, player }) => {
  const old = log.get(player.name)
  log.set(player.name, { time: Date.now(), amount: old?.amount ?? 0 })
  if (!old) return
  if ((old.time ?? Date.now()) < (Date.now() - 50)) return blockLog.set(player.name, { location: block.location, permutation: brokenBlockPermutation })
  if (blockLog.has(player.name) && log.get(player.name).amount === 0) {
    dimension.getBlock(blockLog.get(player.name).location).setPermutation(blockLog.get(player.name).permutation)
    setTickTimeout(() => {
      dimension.getEntitiesAtBlockLocation(blockLog.get(player.name)?.location ?? block.location)?.filter((entity) => entity.typeId === "minecraft:item")?.forEach((item) => item.kill())
      blockLog.delete(player.name)
    }, 0)
  }
  dimension.getBlock(block.location).setPermutation(brokenBlockPermutation)
  setTickTimeout(() => {
    dimension.getEntitiesAtBlockLocation(block.location)?.filter((entity) => entity.typeId === "minecraft:item").forEach((item) => item.kill())
  }, 0)
  log.set(player.name, { time: Date.now(), amount: ++old.amount })
})

system.runInterval(() => {
  [...log.keys()]?.forEach(pN => {
    if (log.get(pN).amount > 5) {
      const player = [...world.getPlayers()].find(pL => pL.name === pN)
      player.runCommandAsync(`say NUKER`)
    }
    log.set(pN, Object.assign(log.get(pN), { amount: 0 }))
  })
})

world.events.playerLeave.subscribe((data) => (log.delete(data.playerName)) && (blockLog.delete(data.playerName)))

/**
 * Delay executing a function
 * @param {() => void} callback Code you want to execute when the delay is finished
 * @param {number} tick Time in ticks until the callback runs
 * @param {boolean} loop Whether or not the code should loop or not
 * @example setTickTimeout(() => {
 * console.warn(`This was called after 20 ticks!`)
 * }, 20)
 */
function setTickTimeout(callback, tick, loop = false) {
  const tickEvent = new TickEventSignal();
  let cT = 0
  const tE = tickEvent.subscribe((data) => {
    if (cT === 0) cT = data.currentTick + tick
    if (cT <= data.currentTick) {
      try { callback() } catch (e) { console.warn(`${e} : ${e.stack}`) }
      if (loop) cT += tick
      else tickEvent.unsubscribe(tE)
    }
  })
}
