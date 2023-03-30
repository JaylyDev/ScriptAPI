import { world } from "@minecraft/server";

const player = [...world.getPlayers()][0];

// set score
player.runCommandAsync("scoreboard players add @s myObjective 2");

// get score
const myObjective = world.scoreboard.getObjective("myObjective");

// Get everybody's score
myObjective.getScores()

// Get someone's score
const scoreboardIdentity = myObjective.getParticipants().find(
  participant => participant.getEntity() === player
);

const score = myObjective.getScore(scoreboardIdentity);