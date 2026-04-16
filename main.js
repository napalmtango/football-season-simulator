import * as League from './modules/league-logic.js';

// import { standings } from './modules/league-logic.js';

import { randomBellCurve } from './modules/random-ratings.js';

import { teamRatings } from './modules/league-logic.js';

import { teamPanel } from './modules/teams.js';

import { divisionA } from './modules/league-logic.js';

import { divisionB } from './modules/league-logic.js';

teamPanel();

import { schedule } from './modules/schedule.js';

import { renderSchedule } from './modules/render.js';

// import { renderSchedule } from './modules/render.js';



//-----------------------------------
// test ratings generation
// move to ratings.js at later date
//-----------------------------------

const divs = [divisionA, divisionB];
const teamPwrRtngs = [];
// Loop through each team
divs.forEach((division) =>{
  division.forEach((team) =>{
    // Randomly create ratings for passOff, runOff, passDef, and runDef
    teamRatings[team].passOff = randomBellCurve(50, 18);
    teamRatings[team].runOff = randomBellCurve(50, 18);
    teamRatings[team].passDef = randomBellCurve(50, 18);
    teamRatings[team].runDef = randomBellCurve(50, 18);

    // Set power rating variable 
    const powerRating = teamRatings[team].pwrRating();
    
    teamPwrRtngs.push({team: team, pwr: powerRating});
    
    // Log ratings
    console.log(team, powerRating);
    console.log(`passOff:${teamRatings[team].passOff}`,
    `runOff:${teamRatings[team].runOff}`,
    `passDef:${teamRatings[team].passDef}`,
    `runDef:${teamRatings[team].runDef}`
    )
    });
  });
console.log(`%cPower Ratings`,'background-color:green; font-weight:bold; color:white;padding:.3em; border-radius:.2em');
const sortedteamPwrRtngs = teamPwrRtngs.sort((a,b) => b.pwr - a.pwr);
sortedteamPwrRtngs.forEach((team) => {
  console.log(team.team, team.pwr);
})

function matchUp(visitor,home){
  console.log(`%c${visitor} @ ${home}`,'background-color:green; font-weight:bold; color:white;padding:.3em; border-radius:.2em')

  console.log(`${visitor} Pass:${teamRatings[visitor].passOff-teamRatings[home].passDef}`,`Run:${teamRatings[visitor].runOff-teamRatings[home].runDef}`)

  console.log(`${home} Pass:${teamRatings[home].passOff-teamRatings[visitor].passDef}`,`Run:${teamRatings[home].runOff-teamRatings[visitor].runDef}`)
}
matchUp('Thunderbolts','Tigers');

//-----------------------------------
// end test ratings generation
//-----------------------------------

let simWeek = 0;

function runWeek() {
  const matchups = League.schedule[simWeek];
  
  for (let i = 0; i < 4; i += 2) {
    const hIdx = matchups[i];
    const aIdx = matchups[i + 1];
    const hScore = League.generateScore();
    const aScore = League.generateScore();

    // Update Data
    const home = League.standings[hIdx];
    const away = League.standings[aIdx];
    
    home.pf += hScore; home.pa += aScore;
    away.pf += aScore; away.pa += hScore;

    if (hScore > aScore) { home.wins++; away.losses++; }
    else if (aScore > hScore) { away.wins++; home.losses++; }
    else { home.ties++; away.ties++; }

    League.gameHistory.push({ h: home.team, a: away.team, hS: hScore, aS: aScore });

    // Update Schedule UI
    document.getElementById(`week${simWeek}-${(i/2)+1}`).textContent = 
      `${home.team} ${hScore} - ${away.team} ${aScore}`;
  }

  updateTable();
  navigateUI();
  simWeek++;
}

function updateTable() {
  const divisions = ['West', 'East'];

  divisions.forEach((divName) => {
    const sorted = League.standings.filter(team => team.division === divName).sort((a, b) => {
    const pA = parseFloat(League.calcPct(a)), pB = parseFloat(League.calcPct(b));
    if (pB !== pA) return pB - pA;
    
    const h2h = League.getH2H(a.team, b.team);
    if (h2h !== 0) return h2h;

    return (b.pf - b.pa) - (a.pf - a.pa); // Point Diff
  });

  sorted.forEach((team, i) => {
    const prefix = `${divName}-`;
    document.getElementById(`${prefix}name${i}`).textContent = team.team;
    document.getElementById(`${prefix}name${i}`).classList.add('team-name');
    document.getElementById(`${prefix}won${i}`).textContent = team.wins;
    document.getElementById(`${prefix}lost${i}`).textContent = team.losses;
    document.getElementById(`${prefix}tied${i}`).textContent = team.ties;
    document.getElementById(`${prefix}pct${i}`).textContent = League.calcPct(team);
    document.getElementById(`${prefix}ptsfor${i}`).textContent = team.pf;
    document.getElementById(`${prefix}ptsag${i}`).textContent = team.pa;
  });
  });
}

function navigateUI() {
  const currentBtn = document.getElementById(`btn-container${simWeek}`);
  const nextBtn = document.getElementById(`btn-container${simWeek + 1}`);
  
  if (currentBtn) currentBtn.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'block';
}

// Event Delegation for buttons
document.addEventListener('click', (e) => {
  if (e.target.closest('[id^="btn-container"]')) {
    runWeek();
  }
});

updateTable();
renderSchedule(schedule);

//From schedule1.js
// console.log(JSON.stringify(Schedule.leagueSchedule, null, 2));

// From schedule2.js
// console.log(season);
