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


//Function declarations

//Win Percent function
function pct(wins, losses, ties) {
  let gamesPlayed = wins+losses+ties;
  if (gamesPlayed === 0){gamesPlayed = 1};// In order to not receive NaN from dividing wins + ties/2 by zero (variable named gamesPlayed in line 30.)
  tempPctVar = (wins+ties/2)/gamesPlayed;
  tempPctVar = tempPctVar.toFixed(3);
  if (tempPctVar < 1) {
    tempPctVar = tempPctVar.toString();
    tempPctVar = tempPctVar.replace("0", "");
    };
  }

//Game results functions

//Variables
//score by quarters for each team will be drawn from this array with a randomly generated index
const qtrScores = [ 0, 0, 0, 0, 3, 3, 6, 7, 7, 7, 10, 10, 14, 14];

//final score for each team derived by totaling these  arrays:
let teamScore = [
[ 0, 0, 0, 0],
[ 0, 0, 0, 0],
[ 0, 0, 0, 0],
[ 0, 0, 0, 0],
]
const team1Score = [ 0, 0, 0, 0];
const team2Score = [ 0, 0, 0, 0];
const team3Score = [ 0, 0, 0, 0];
const team4Score = [ 0, 0, 0, 0];

const finalScore = [ 0, 0, 0, 0];
let finalScore1 = 0;
let finalScore2 = 0;
let finalScore3 = 0;
let finalScore4 = 0;
let q = 0;
let t = 0;


//output league array to console
console.log("League Array");
console.table(league);

//output schedule array to console
console.log(sp);
console.log(sp);
console.log("Schedule Array");
console.table(schedule);

//Declare functions

// Function called from onclick event
function  weekResults(){

  console.log("simWeek: " + simWeek);//remove
  updateResults();
  reset();
}


// Generates random index and assigns it to variable named index for grabbing score from qtrScores array
function indicesQtrs() {
  index = Math.floor(Math.random() * qtrScores.length);// used to access qtrScores array (line 40) for populating team1Score & team2Score arrays
} 

// Assigns random score to each quarter and updates finalScore vars with each iteration
function scoreByQtr(){
  while (q < 4) {
  indicesQtrs();
  teamScore[0][q] = qtrScores[index] //populate each quarter score for team1

  indicesQtrs();
  teamScore[1][q] = qtrScores[index] //populate each quarter score for team2

  indicesQtrs();
  teamScore[2][q] = qtrScores[index] //populate each quarter score for team3

  indicesQtrs();
  teamScore[3][q] = qtrScores[index] //populate each quarter score for team4

  finalScore[0] += teamScore[0][q];//adds quarter score to current final score
  finalScore[1] += teamScore[1][q];//adds quarter score to current final score
  finalScore[2] += teamScore[2][q];//adds quarter score to current final score
  finalScore[3] += teamScore[3][q];//adds quarter score to current final score
  q++;
  }
}

function updateResults() {

//update schedule with results HARDCODED TEMPORARILY

  scoreByQtr();

  document.querySelector("#week"+simWeek+"-1").textContent = league[schedule[simWeek][0]][0]+sp+finalScore[schedule[simWeek][0]]+" - "+league[schedule[simWeek][1]][0]+sp+finalScore[schedule[simWeek][1]];
  document.querySelector("#week"+simWeek+"-2").textContent = league[schedule[simWeek][2]][0]+sp+finalScore[schedule[simWeek][2]]+" - "+league[schedule[simWeek][3]][0]+sp+finalScore[schedule[simWeek][3]];
  
  console.log("finalScore[0] : " + finalScore[0]);
  console.log("finalScore[1] : " + finalScore[1]);
  console.log("finalScore[2] : " + finalScore[2]);
  console.log("finalScore[3] : " + finalScore[3]);
  console.log("finalScore : " + finalScore);
  console.log("teamScore : " + teamScore);

}
  
function reset() {
  teamScore = [
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    ];
  
    simWeek++;

}
//Standings initialized from array
let c = 0;
//create variabless for document.getElementById("name"+c) etc.
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

//Schedule populated from array
let w = 0;
// let w2 = 0
while (w < 6) {
document.getElementById("week"+w+"-1").textContent = league[schedule[w][0]][0]+sp+"@"+sp+league[schedule[w][1]][0];
document.getElementById("week"+w+"-2").textContent = league[schedule[w][2]][0]+sp+"@"+sp+league[schedule[w][3]][0];
w++;
// w2++;
}