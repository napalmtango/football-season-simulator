const standings = [{team: "Rams", record: [1, 2, 1, 0, 80, 90]},
                {team: "49ers", record: [3, 1, 0, 0, 100, 70]},
                {team: "Seahawks", record: [1, 3, 0, 0, 70, 100]},
                {team: "Cardinals", record: [2, 1, 1, 0, 90, 80]}];

// const standings = [{team: "Rams", record: [0, 0, 0, 0, 0, 0]},
//                 {team: "49ers", record: [0, 0, 0, 0, 0, 0]},
//                 {team: "Seahawks", record: [0, 0, 0, 0, 0, 0]},
//                 {team: "Cardinals", record: [0, 0, 0, 0, 0, 0]}];

let pct = 0;



//calculate winning percentage---------
function updatePct() {
  for (let t = 0; t < 4; t++) {
    calculatePct(standings[t].record[0], standings[t].record[1], standings[t].record[2]);
    standings[t].record[3] = pct;
  }
}


function calculatePct( w, l, t ) {
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
}
// end--------------------------------

//Sort standings array by winning percentage
//create working arrays to use in sort
const workingPct =  [];
const control = [0, 1, 2, 3];

function workingArrays() {
 for (let t = 0; t < 4; t++) {
   workingPct[t] = standings[t].record[3]
 }
}
// end--------------------------------


//sort by winning percentage------------
function sortByPct() {
  let len = workingPct.length;

  // bubble sort
  for (let c = 0; c < 4-c; c++) {
    for (let i = 0; i < len-c-1; i++) {

      //swap value pairs
      if (workingPct[i] < workingPct[i+1]) {
        let temp = workingPct[i];
        workingPct[i] = workingPct[i+1];
        workingPct[i+1] = temp;

        // swaps are mirrored in control[]
        let tempc = control[i];
        control[i] = control[i+1];
        control[i+1] = tempc;
      } 
    }
  }
}
// end----------------------------------



//populate standings from array standings[]
function updateStandings() {
  for (let i = 0; i < 4; i++) {
    $(`#name${i}`).html(standings[control[i]].team);
    $(`#won${i}`).html(standings[control[i]].record[0]);
    $(`#lost${i}`).html(standings[control[i]].record[1]);
    $(`#tied${i}`).html(standings[control[i]].record[2]);
    $(`#pct${i}`).html(standings[control[i]].record[3]);
    $(`#ptsfor${i}`).html(standings[control[i]].record[4]);
    $(`#ptsag${i}`).html(standings[control[i]].record[5]);
  }
}
// end----------------------------------

$("#calc").click(function() {
  updatePct();
  workingArrays();
  sortByPct();
  updateStandings();
});
// end----------------------------------









