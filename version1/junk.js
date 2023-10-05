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

let simWeek = 0;

const sp = " ";

let index = 0

//Functions

//Win Percent function
function pct(wins, losses, ties) {
  let gamesPlayed = wins+losses+ties;
  if (gamesPlayed === 0){gamesPlayed = 1};
  tempPctVar = (wins+ties/2)/gamesPlayed;
  tempPctVar = tempPctVar.toFixed(3);
  if (tempPctVar < 1) {
    tempPctVar = tempPctVar.toString();
    tempPctVar = tempPctVar.replace("0", "");
    };
  }

//Game results functions
const qtrScores = [ 0, 0, 0, 0, 3, 3, 6, 7, 7, 7, 10, 10, 14, 14];
const team1Score = [ 0, 0, 0, 0];
const team2Score = [ 0, 0, 0, 0];

//remove logs--START
let finalScore1 = 0;
let finalScore2 = 0;
let i = 0
function scoreByQtr(){
  while (i < 4) {
  rndQtrScore()
  team1Score[i] = qtrScores[index]
  rndQtrScore()
  team2Score[i] = qtrScores[index]
  console.log("team1Score["+i+"] " + team1Score[i]);
  console.log("team2Score["+i+"] " + team2Score[i]);
  finalScore1 += team1Score[i];
  finalScore2 += team2Score[i];
  i++;
  }
}
function rndQtrScore() {
  index = Math.floor(Math.random() * qtrScores.length);
}
scoreByQtr();

console.log("finalScore1 : " + finalScore1)
console.log("finalScore2 : " + finalScore2)

function  gameResults(){
  console.log("gameResults()");
  console.log("simWeek: " + simWeek);

}
  //Log gameResults
gameResults();


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
