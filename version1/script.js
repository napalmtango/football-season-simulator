$(function() {
  // Selecting Elements
  $('h1').html('<em>Hello there</em> <a href = "#>/a>">jQuery!');
const testOutput = document.querySelector("#testOutput");

function percent( w, l, t ) {
    let gamesPlayed = w + l + t;
    if (gamesPlayed === 0){gamesPlayed = 1}
    let t2 = t/2;
    w = w+t;
    let tempPct = w/gamesPlayed;
    let tp = tempPct.toFixed(3);
    if (tp < 1) {
      tp = tp.toString();
      tp = tp.replace("0", "");
      };    
    return tp
   }
 
const league = [
  {team: "Rams",
  record: [2, 1, 1, 50, 44],
  pct: percent( 3,1,0),
}]
league[0].pct()




// const league = {
//   team: "Rams",
//   won: 3,
//   lost: 1,
//   tied: 1,
//   pct: function () {
//     let gamesPlayed = this.won + this.lost + this.tied;
//     if (gamesPlayed === 0){gamesPlayed = 1}
//     let t = this.tied/2;
//     let w = this.won+t;
//     let tempPct = w/gamesPlayed;
//     let tp = tempPct.toFixed(3);
//     if (tp < 1) {
//       tp = tp.toString();
//       tp = tp.replace("0", "");
//       };    
//     return tp
//    },
//   ptsFor: 50,
//   ptsAg: 44
// }

testOutput.textContent = league[0].record[0];
console.log(league[0].team+league[0].record[0]);