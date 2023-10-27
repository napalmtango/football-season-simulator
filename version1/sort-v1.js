const league = [{team: "Rams", record: [1, 2, 1, 0, 80, 90]},
                {team: "49ers", record: [3, 1, 0, 0, 100, 70]},
                {team: "Seahawks", record: [1, 3, 0, 0, 70, 100]},
                {team: "Cardinals", record: [2, 1, 1, 0, 90, 80]}];

// const league = [{team: "Rams", record: [0, 0, 0, 0, 0, 0]},
//                 {team: "49ers", record: [0, 0, 0, 0, 0, 0]},
//                 {team: "Seahawks", record: [0, 0, 0, 0, 0, 0]},
//                 {team: "Cardinals", record: [0, 0, 0, 0, 0, 0]}];

let pct = 0;
let tm = 0
let row = 0


//calculate winning percentage---------
function updatePct() {
  for (let t = 0; t < 4; t++) {
    calculatePct(league[t].record[0], league[t].record[1], league[t].record[2]);
    league[t].record[3] = pct;
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


//create working arrays to use in sort
let workingPct =  [];
let control = [0, 1, 2, 3];

function workingArrays() {
 for (let t = 0; t < 4; t++) {
   workingPct[t] = league[t].record[3]
 }
}
// end--------------------------------


//sort by winning percentage------------
function sortByPct() {

  let len = workingPct.length;
  // console.log(len);
  // console.log(workingPct);

  // bubble sort
  for (let c = 0; c < 4-c; c++) {
    for (let i = 0; i < len-c-1; i++) {
      // console.log(`\nsortByPct iteration${i}`)
      // console.log(`workingPct = ${workingPct}`);
      // console.log(`i = ${i}`)
      // console.log(`c = ${c}`)

      //swap value pairs
      if (workingPct[i] < workingPct[i+1]) {
        let temp = workingPct[i];
        workingPct[i] = workingPct[i+1];
        workingPct[i+1] = temp;

        // console.log(`workingPct = ${workingPct}`);

        let tempc = control[i];
        control[i] = control[i+1];
        control[i+1] = tempc;

        // console.log(`control = ${control}`);
      } 
    }
  }
}
// end----------------------------------

function populate(tm) {
  console.log(`tm == ${tm}`);

  $(`#name${row}`).html(league[tm].team);
  $(`#won${row}`).html(league[tm].record[0]);
  $(`#lost${row}`).html(league[tm].record[1]);
  $(`#tied${row}`).html(league[tm].record[2]);
  $(`#pct${row}`).html(league[tm].record[3]);
  $(`#ptsfor${row}`).html(league[tm].record[4]);
  $(`#ptsag${row}`).html(league[tm].record[5]);
  row ++;
}

//populate standings from array league[]
function updateStandings() {
  for (let i = 0; i < 4; i++) {
    // tm = control[i];
    populate(control[i]);
  }
}
// end----------------------------------



// function calls-----------------------
updatePct();
workingArrays();
sortByPct();
updateStandings();


// end----------------------------------


//debug--------------------
// console.log(league[0].team);
// console.log(league[0].record[0]);
// console.log(league[0].record[1]);
// console.log(league[0].record[2]);
// console.log(league[0].record[3]); 
// console.table(league);

// if (league[0].record[3] < league[1].record[3]) {
//   console.log("it works")
// }; 










