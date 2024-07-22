import { WeatherType, system, world } from "@minecraft/server";

const chatObjective = world.scoreboard.getObjective("chat") ?? world.scoreboard.addObjective("chat", "chat");

world.afterEvents.chatSend.subscribe((event) => {
  const { sender } = event;

  const score = chatObjective.hasParticipant(sender) ? chatObjective.getScore(sender.scoreboardIdentity) : 0;
  chatObjective.setScore(sender, score + 1);
});