const league = [{
  name: "Rams",
  won: 3,
  lost: 1,
  tied: 0,
  ptsfor: 100,
  ptsag: 83,
}]
;
let tempPctVar = 0;

function pct(wins, losses, ties) {
  console.log("function syntax worked" + wins  + losses  + ties);
  let gamesPlayed = wins+losses+ties;
  console.log((wins+ties/2)/gamesPlayed);
  tempPctVar = (wins+ties/2)/gamesPlayed
}
pct(league[0].won, league[0].lost, league[0].tied)

document.getElementById("name1").textContent=league[0].name;
document.getElementById("won1").textContent=league[0].won;
document.getElementById("lost1").textContent=league[0].lost;
document.getElementById("pct1").textContent=tempPctVar;
document.getElementById("ptsfor1").textContent=league[0].ptsfor;
document.getElementById("ptsag1").textContent=league[0].ptsag;


console.log(league[0].name);
console.log(league[0].won);
