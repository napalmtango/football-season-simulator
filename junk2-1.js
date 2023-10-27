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

//Win Percent function
function calcPct() {
  for (let i = 0; i < 4; i++) {
    let pct = 0;
    let w = standings[i].record[0];
    let l = standings[i].record[1];
    let t = standings[i].record[2];
    let gamesPlayed = w + l + t;
    if (gamesPlayed === 0){gamesPlayed = 1}
    let t2 = t/2;
    w = w + t2;
    let tempPct = w/gamesPlayed;
    pct = tempPct.toFixed(3);
    if (pct < 1) {
      pct = pct.toString();
      pct = pct.replace("0", "");
      };
  standings[i].record[3] = pct;
  }
}

//listeners, animations and function calls for simulation buttons
$(`#btn-container${0}`).click(function() {
  $(`#btn-container${0}`).slideUp( 600 );
  $(`#btn-container${1}`).slideDown( 800);
  weekResults();
}).one();  

$(`#btn-container${1}`).click(function() {
  $(`#btn-container${1}`).slideUp( 600 );
  $(`#btn-container${2}`).slideDown( 800);
  weekResults();
}).one();  

$(`#btn-container${2}`).click(function() {
  $(`#btn-container${2}`).slideUp( 600 );
  $(`#btn-container${3}`).slideDown( 800);
  weekResults();
});  

$(`#btn-container${3}`).click(function() {
  $(`#btn-container${3}`).slideUp( 600 );
  $(`#btn-container${4}`).slideDown( 800);
  weekResults();
});  

$(`#btn-container${4}`).click(function() {
  $(`#btn-container${4}`).slideUp( 600 );
  $(`#btn-container${5}`).slideDown( 800);
  weekResults();
});  

$(`#btn-container${5}`).click(function() {
  $(`#btn-container${5}`).slideUp( 600 );
  weekResults();
});  


let q = 0;
let t = 0;

const qtrScores = [ 0, 0, 0, 0, 3, 3, 6, 7, 7, 7, 10, 10, 14, 14];
let teamScores = [ 0, 0, 0, 0];

function rndScores() {
  for (let t = 0; t < 4; t++) {
    for (let q = 0; q < 4; q++) {
      teamScores[t] += qtrScores[Math.floor(Math.random() * qtrScores.length)]
    } console.log(teamScores[t]);
  }
}


//updates current week's schedule with the results of games
function updateSchedule() {

  $(`#week${simWeek}-1`).html(`${standings[schedule[simWeek][0]].team} ${teamScores[0]} - ${standings[schedule[simWeek][1]].team} ${teamScores[1]}`);
  
  $(`#week${simWeek}-2`).html(`${standings[schedule[simWeek][2]].team} ${teamScores[2]} - ${standings[schedule[simWeek][3]].team} ${teamScores[3]}`); 
  
}

function sortStandings() {
  console.log("sortStandings()");
}


// Function called from simulation button onclick event
function  weekResults(){
  rndScores();
  updateSchedule();
  updateStandings();
  reset();
  simWeek++;
  if (simWeek === 6){simWeek = 0}

}

function updateStandings() {
  let a = 0; let b = 1;
for (let i = 0; i < 2; i++) {
    if (teamScores[a] > teamScores[b]) {
      console.log(`${standings[schedule[simWeek][a]].team} win`);
      standings[schedule[simWeek][a]].record[0] += 1; standings[schedule[simWeek][b]].record[1] += 1;
    }
  
    else if (teamScores[a] < teamScores[b]) {
      console.log(`${standings[schedule[simWeek][b]].team} win`);
      standings[schedule[simWeek][b]].record[0] += 1; standings[schedule[simWeek][a]].record[1] += 1;
    }
  
    if (teamScores[a] === teamScores[b]) {
      console.log(`Game is a tie`);
      standings[schedule[simWeek][b]].record[2] += 1; standings[schedule[simWeek][a]].record[2] += 1;
    }
  
    standings[schedule[simWeek][a]].record[4] += teamScores[a]; 
    standings[schedule[simWeek][a]].record[5] += teamScores[b];
    standings[schedule[simWeek][b]].record[4] += teamScores[b]; 
    standings[schedule[simWeek][b]].record[5] += teamScores[a];
    a = 2; b = 3;
}
  calcPct();

  // log records
  for (let i = 0; i < 4; i++) {
  console.log(`${standings[schedule[simWeek][i]].team} ${standings[schedule[simWeek][i]].record[0]} - ${standings[schedule[simWeek][i]].record[1]} - ${standings[schedule[simWeek][i]].record[2]}   ${standings[schedule[simWeek][i]].record[3]}   ${standings[schedule[simWeek][i]].record[4]}   ${standings[schedule[simWeek][i]].record[5]}`);
  }
}


  
function reset() {
  console.log("reset()")
  teamScores = [0, 0, 0, 0];
  //   q = 0;

}

//Schedule populated from array
// let w = 0;
// while (w < 6) {
// document.getElementById("week"+w+"-1").textContent = leagueTeams[schedule[w][0]][0]+sp+"@"+sp+leagueTeams[schedule[w][1]][0];
// document.getElementById("week"+w+"-2").textContent = leagueTeams[schedule[w][2]][0]+sp+"@"+sp+leagueTeams[schedule[w][3]][0];
// w++;
// }