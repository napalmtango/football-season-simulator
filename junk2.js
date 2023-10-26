//Global variable declarations
const leagueTeams = [
  ["Rams", 0, 0, 0, 0, 0],
  ["49ers", 0, 0, 0, 0, 0],
  ["Seahawks", 0, 0, 0, 0, 0],
  ["Cardinals", 0, 0, 0, 0, 0],
];

const standings = [{team: "Rams", record: [0, 0, 0, 0, 0, 0]},
                {team: "49ers", record: [0, 0, 0, 0, 0, 0]},
                {team: "Seahawks", record: [0, 0, 0, 0, 0, 0]},
                {team: "Cardinals", record: [0, 0, 0, 0, 0, 0]}];


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
let index = 0;

let tempWon = [0, 0, 0, 0];
let tempLost = [0, 0, 0, 0];
let tempTied = [0, 0, 0, 0];

// $("#btn-container")let  btnContainerEl = ;


//Function declarations

//Win Percent function
function pct(wins, losses, ties) {
  let gamesPlayed = wins+losses+ties;
  if (gamesPlayed === 0){gamesPlayed = 1};// In order to not receive NaN from dividing wins + ties/2 by zero (variable named gamesPlayed in line 31.)
  tempPctVar = (wins+ties/2)/gamesPlayed;
  tempPctVar = tempPctVar.toFixed(3);
  if (tempPctVar < 1) {
    tempPctVar = tempPctVar.toString();
    tempPctVar = tempPctVar.replace("0", "");
    };
  }

//removeButton function, dynamiclly removes button after week results are updated
function removeBtn() {
  $(`#btn-container${simWeek}`).slideUp( 250 );  
}
// function removeBtn() {
//   document.querySelector("#btn-container"+simWeek).innerHTML = ""  
// }

//insertButton function, dynamiclly inserts button for each week
function insertBtn() {
  $("#btn-container"+simWeek).html("<button class = 'ltr-spc-small' onclick='weekResults()'>SIMULATE</button>");    
}
// function insertBtn() {
//   document.querySelector("#btn-container"+simWeek).innerHTML = "<button class = 'ltr-spc-small' onclick='weekResults()'>SIMULATE</button>"    
// }



insertBtn()

//Game results functions

//score by quarters for each team will be drawn from this array with a randomly generated index
const qtrScores = [ 0, 0, 0, 0, 3, 3, 6, 7, 7, 7, 10, 10, 14, 14];

//final score for each team derived by totaling these  arrays:
let teamScore = [
[ 0, 0, 0, 0],
[ 0, 0, 0, 0],
[ 0, 0, 0, 0],
[ 0, 0, 0, 0],
];

let team1Score = [ 0, 0, 0, 0];
let team2Score = [ 0, 0, 0, 0];
let team3Score = [ 0, 0, 0, 0];
let team4Score = [ 0, 0, 0, 0];

let finalScore = [ 0, 0, 0, 0];
let finalScore1 = 0;
let finalScore2 = 0;
let finalScore3 = 0;
let finalScore4 = 0;
let q = 0;
let t = 0;


//output leagueTeams array to console
// console.log("leagueTeams Array");
// console.table(leagueTeams);

//output schedule array to console
// console.log(sp);
// console.log(sp);
// console.log("Schedule Array");
// console.table(schedule);

//Declare functions

// Function called from onclick event
function  weekResults(){

  updateGames();
  // updateStandings();
  removeBtn();
  reset();
  simWeek++;
  if (simWeek === 6){simWeek = 0}
  insertBtn();

}


// Generates random index and assigns it to variable named index for grabbing score from qtrScores array
function rndScore() {
  index = Math.floor(Math.random() * qtrScores.length);// used to access qtrScores array (line 40) for populating team1Score & team2Score arrays
} 

// Assigns random score to each quarter and updates finalScore vars with each iteration
function scoreByQtr(){
  while (q < 4) {
    rndScore();
    teamScore[0][q] = qtrScores[index] //populate each quarter score for team1

    rndScore();
    teamScore[1][q] = qtrScores[index] //populate each quarter score for team2

    rndScore();
    teamScore[2][q] = qtrScores[index] //populate each quarter score for team3

    rndScore();
    teamScore[3][q] = qtrScores[index] //populate each quarter score for team4

    finalScore[schedule[simWeek][0]] += teamScore[0][q];//adds quarter score to current final score
    finalScore[schedule[simWeek][1]] += teamScore[1][q];//adds quarter score to current final score
    finalScore[schedule[simWeek][2]] += teamScore[2][q];//adds quarter score to current final score
    finalScore[schedule[simWeek][3]] += teamScore[3][q];//adds quarter score to current final score
    q++;
  }
}

function updateGames() {

//update week's games with results
  scoreByQtr();

  document.querySelector(`#week${simWeek}-1`).textContent = leagueTeams[schedule[simWeek][0]][0]+sp+finalScore[schedule[simWeek][0]]+" - "+leagueTeams[schedule[simWeek][1]][0]+sp+finalScore[schedule[simWeek][1]];
  document.querySelector("#week"+simWeek+"-2").textContent = leagueTeams[schedule[simWeek][2]][0]+sp+finalScore[schedule[simWeek][2]]+" - "+leagueTeams[schedule[simWeek][3]][0]+sp+finalScore[schedule[simWeek][3]];
  
  // console.log("finalScore["+[schedule[simWeek][0]]+"] : " + finalScore[schedule[simWeek][0]]);
  // console.log("finalScore["+[schedule[simWeek][1]]+"] : " + finalScore[schedule[simWeek][1]]);
  // console.log("finalScore["+[schedule[simWeek][2]]+"] : " + finalScore[schedule[simWeek][2]]);
  // console.log("finalScore["+[schedule[simWeek][3]]+"] : " + finalScore[schedule[simWeek][3]]);
  // console.log("finalScore : " + finalScore);
  // console.log("teamScore : " + teamScore);

}

function updateStandings() {
  console.log("updateStandings()")
}
  
function reset() {
  finalScore = [ 0, 0, 0, 0];

  teamScore = [
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    ];
    q = 0;

}
//Standings initialized from array
let c = 0;
//create variabless for document.getElementById("name"+c) etc.
// while (c < 4) {
//   pct(leagueTeams[c][1], leagueTeams[c][2], leagueTeams[c][3])

//   document.getElementById("name"+c).textContent = leagueTeams[c][0];
//   document.getElementById("won"+c).textContent = leagueTeams[c][1];
//   document.getElementById("lost"+c).textContent = leagueTeams[c][2];
//   document.getElementById("tied"+c).textContent = leagueTeams[c][3];
//   document.getElementById("pct"+c).textContent = tempPctVar;
//   document.getElementById("ptsfor"+c).textContent = leagueTeams[c][4];
//   document.getElementById("ptsag"+c).textContent = leagueTeams[c][5];
//   c++;
// }

//Schedule populated from array
let w = 0;
while (w < 6) {
document.getElementById("week"+w+"-1").textContent = leagueTeams[schedule[w][0]][0]+sp+"@"+sp+leagueTeams[schedule[w][1]][0];
document.getElementById("week"+w+"-2").textContent = leagueTeams[schedule[w][2]][0]+sp+"@"+sp+leagueTeams[schedule[w][3]][0];
w++;
}