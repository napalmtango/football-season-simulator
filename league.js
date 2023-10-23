const league = [{team: "Rams", record: [3, 1, 0, 100, 70]},
                {team: "49ers", record: [2, 1, 1, 90, 80]},
                {team: "Seahawks", record: [1, 2, 1, 80, 90]},
                {team: "Cardinals", record: [1, 3, 0, 70, 100]}];

let pct;

function percent( w, l, t ) {
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

for (let t = 0; t < 4; t++) {
  percent(league[t].record[0], league[t].record[1], league[t].record[2]);
  $(`#name${t}`).html(league[t].team);
  $(`#won${t}`).html(league[t].record[0]);
  $(`#lost${t}`).html(league[t].record[1]);
  $(`#tied${t}`).html(league[t].record[2]);
  $(`#pct${t}`).html(pct);

}
console.log(league[0].team);
console.log(league[0].record[0]);
console.log(league[0].record[1]);
console.log(league[0].record[2]);
console.log(pct); 
// console.table(league);







