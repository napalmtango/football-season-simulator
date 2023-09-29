//Global variable declarations
const league = [
  ["Rams", 0, 0, 0, 0, 0],
  ["49ers", 0, 0, 0, 0, 0],
  ["Seahawks", 0, 0, 0, 0, 0],
  ["Cardinals", 0, 0, 0, 0, 0],
];

const schedule = [
  [1, 0, 3, 2],
  [0, 2, 3, 1],
  [2, 1, 0, 3],
  [0, 1, 2, 3],
  [2, 0, 1, 3],
  [1, 2, 3, 0]
];

const sp = " ";

function pct(wins, losses, ties) {
  let gamesPlayed = wins+losses+ties;
  console.log("gamesPlayed: " + gamesPlayed);
  if (gamesPlayed === 0){gamesPlayed = 1};
  console.log("revised gamesPlayed: " + gamesPlayed)
  console.log("percent result: " + (wins+ties/2)/gamesPlayed);
  tempPctVar = (wins+ties/2)/gamesPlayed;
  console.log(tempPctVar)
  tempPctVar = tempPctVar.toFixed(3);
  if (tempPctVar < 1) {
    tempPctVar = tempPctVar.toString();
    tempPctVar = tempPctVar.replace("0", "");
    };
  }

//Standings
let c = 0;
while (c < 4) {
  pct(league[c][1], league[c][2], league[c][3])

  document.getElementById("name"+c).textContent = league[c][0];
  document.getElementById("won"+c).textContent = league[c][1];
  document.getElementById("lost"+c).textContent = league[c][2];
  document.getElementById("tied"+c).textContent = league[c][3];
  document.getElementById("pct"+c).textContent = tempPctVar;
  document.getElementById("ptsfor"+c).textContent = league[c][4];
  document.getElementById("ptsag"+c).textContent = league[c][5];
  c++;
}

//Schedule
let w = 0;
let w2 = 1
while (w < 6) {
document.getElementById("week"+w2+"-1").textContent = league[schedule[w][0]][0]+sp+"@"+sp+league[schedule[w][1]][0];
document.getElementById("week"+w2+"-2").textContent = league[schedule[w][2]][0]+sp+"@"+sp+league[schedule[w][3]][0];
w++;
w2++;
}

//output league array to console
console.log(sp);
console.log(sp);
console.log("League Array");
console.table(league);

//output schedule array to console
console.log(sp);
console.log(sp);
console.log("Schedule Array");
console.table(schedule);
