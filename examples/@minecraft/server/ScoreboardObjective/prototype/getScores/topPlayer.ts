import { world } from "@minecraft/server";

const money = world.scoreboard.getObjective("money");
var scoreArray = money.getScores();
scoreArray.sort(function(a, b) {
  return b.score - a.score;
});

console.log(scoreArray.map(score => score.participant.displayName));