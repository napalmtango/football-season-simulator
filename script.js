const league = [
  ["Rams", 3, 1, 0, 100, 83,],
  ["49ers", 2, 1, 1, 89, 65,],
  ["Seahawks", 1, 2, 1, 76, 89,],
  ["Cardinals", 1, 3, 0, 87, 115,],
];

const schedule = [
  [1,"@", 0, 3,"@", 2],
  [0,"@", 2, 3,"@", 1],
  [2,"@", 1, 0,"@", 3],
  [0,"@", 1, 2,"@", 3],
  [2,"@", 0, 1,"@", 3],
  [1,"@", 2, 3,"@", 0]
];

let tempPctVar = 0;

function pct(wins, losses, ties) {
  console.log("function syntax worked " + wins  + " "  + losses  + " "  + ties);
  let gamesPlayed = wins+losses+ties;
  console.log("percent result: " + (wins+ties/2)/gamesPlayed);
  tempPctVar = (wins+ties/2)/gamesPlayed;
  tempPctVar = tempPctVar.toFixed(3);
  if (tempPctVar < 1) {
    tempPctVar = tempPctVar.toString();
    tempPctVar = tempPctVar.replace("0", "");
    };
  }

//Enclose in loop--BEGIN

let c = 0
pct(league[c][1], league[c][2], league[c][3])

document.getElementById("name1").textContent=league[c][0];
document.getElementById("won1").textContent=league[c][1];
document.getElementById("lost1").textContent=league[c][2];
document.getElementById("tied1").textContent=league[c][3];
document.getElementById("pct1").textContent=tempPctVar;
document.getElementById("ptsfor1").textContent=league[c][4];
document.getElementById("ptsag1").textContent=league[c][5];

c = 1
pct(league[c][1], league[c][2], league[c][3])

document.getElementById("name2").textContent=league[c][0];
document.getElementById("won2").textContent=league[c][1];
document.getElementById("lost2").textContent=league[c][2];
document.getElementById("tied2").textContent=league[c][3];
document.getElementById("pct2").textContent=tempPctVar;
document.getElementById("ptsfor2").textContent=league[c][4];
document.getElementById("ptsag2").textContent=league[c][5];

c = 2
pct(league[c][1], league[c][2], league[c][3])

document.getElementById("name3").textContent=league[c][0];
document.getElementById("won3").textContent=league[c][1];
document.getElementById("lost3").textContent=league[c][2];
document.getElementById("tied3").textContent=league[c][3];
document.getElementById("pct3").textContent=tempPctVar;
document.getElementById("ptsfor3").textContent=league[c][4];
document.getElementById("ptsag3").textContent=league[c][5];

c = 3
pct(league[c][1], league[c][2], league[c][3])

document.getElementById("name4").textContent=league[c][0];
document.getElementById("won4").textContent=league[c][1];
document.getElementById("lost4").textContent=league[c][2];
document.getElementById("tied4").textContent=league[c][3];
document.getElementById("pct4").textContent=tempPctVar;
document.getElementById("ptsfor4").textContent=league[c][4];
document.getElementById("ptsag4").textContent=league[c][5];

//Enclose in loop--END





console.table(league);
