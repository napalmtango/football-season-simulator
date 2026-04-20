import { teamRatings } from "./league-data.js";

import { logDriveModifiers } from "../game-sim/modules/log-data.js";

let scoreboard;
let minutesRemaining;

/**
 * Main entry point for the simulation
 */
export function gameSim(visitor, home) {
  // 1. ACTIVE SANDBOX: Create a deep copy so erosion is only "per-game"
  const activeRatings = {
    [visitor]: { ...teamRatings[visitor] },
    [home]: { ...teamRatings[home] }
  };

  scoreboard = {
    [visitor]: { name: visitor, score: 0 },
    [home]: { name: home, score: 0 }
  };

  // Run the 4 quarters
  for (let qtr = 1; qtr <= 4; qtr++) {
    console.log(`%c --- Starting Quarter ${qtr} --- `, 'background: #222; color: #bada55');
    
    // 2. HALFTIME RECOVERY: Defense regains 50% of lost stamina at start of Q3
    if (qtr === 3) handleHalftime(activeRatings, visitor, home);
    
    simulateQuarter(visitor, home, activeRatings);
  }
  
  // LOG FINAL SCORE
  console.log(`%c FINAL: ${visitor} ${scoreboard[visitor].score} - ${home} ${scoreboard[home].score} `, 'background: #000; color: #fff; font-weight: bold;');
}

function simulateQuarter(visitor, home, activeRatings) {
  let offense = visitor;
  let defense = home;
  minutesRemaining = 15;
  let safetyValve = 0;

  while (minutesRemaining > 0 && safetyValve < 100) {
    safetyValve++;

    // 3. MATCHUP CALCULATOR: Get multipliers for this specific drive
    const mods = getMatchupModifiers(offense, defense, activeRatings);
   
    logDriveModifiers(offense, defense, mods);

    // 4. WINDOW LOGIC: Stacked probabilities
    // FG base .15 modified by runDiff percentage
    const fgThreshold = 0.15 * mods.fgMultiplier;
    
    // TD window base .19 modified by passDiff percentage
    const tdWindow = 0.19 * mods.tdMultiplier;
    
    // Threshold is the SUM (e.g., .18 + .22 = .40)
    const tdThreshold = fgThreshold + tdWindow;

    const rnd = Math.random();
    console.log(offense,rnd.toFixed(3),fgThreshold.toFixed(3), tdThreshold.toFixed(3));

    if (rnd <= fgThreshold) {
      updateScoreboard(offense, 3);
      getTimeOfPossession( 3, 1 + Math.floor(Math.random() * 1.75 ) ); // FGs: ~3-5 mins
      [offense, defense] = [defense, offense]; 
    } 
    else if (rnd <= tdThreshold) {
      updateScoreboard(offense, 7);
      getTimeOfPossession( 6, 1 + Math.floor(Math.random() * 1.75 )); // TDs: ~5-7 mins
      [offense, defense] = [defense, offense]; 
    } 
    else {
      // NO SCORE / PUNT: Defense successfully stops the offense
      // 5. EROSION: Tire out the defense based on offense's run power
      applyErosion(activeRatings, defense, mods.runPower);
      getTimeOfPossession( 2.5, 1 ); // Punts: ~1-2 mins
      [offense, defense] = [defense, offense];
    }
  }
}

/** 
 * HELPER: Calculates modifiers for the current drive 
 */
function getMatchupModifiers(offense, defense, activeRatings) {
  const off = activeRatings[offense];
  const def = activeRatings[defense];
  
  return {
    // Converts a +20 diff into a 1.2x multiplier
    fgMultiplier: 1 + ((off.runOff - def.runDef) / 100),
    tdMultiplier: 1 + ((off.passOff - def.passDef) / 100),
    runPower: off.runOff
  };
}

/**
 * ERODE DEFENSE: Subtracts stamina from defensive ratings
 */
function applyErosion(activeRatings, defenseTeam, offenseRunRating) {
  const erosion = offenseRunRating / 500; 
  activeRatings[defenseTeam].runDef -= erosion;
  activeRatings[defenseTeam].passDef -= erosion;
  
  // Floor to prevent ratings from dropping below 15
  activeRatings[defenseTeam].runDef = Math.max(15, activeRatings[defenseTeam].runDef);
  activeRatings[defenseTeam].passDef = Math.max(15, activeRatings[defenseTeam].passDef);
}

function handleHalftime(activeRatings, visitor, home) {
  [visitor, home].forEach(team => {
    const base = teamRatings[team];
    // Give back half of the stamina lost during the first half
    activeRatings[team].runDef += (base.runDef - activeRatings[team].runDef) / 2;
    activeRatings[team].passDef += (base.passDef - activeRatings[team].passDef) / 2;
  });
  console.log("%c Halftime adjustments: Players rested and hydrated. ", 'color: orange; font-style: italic;');
}

function updateScoreboard(offense, points) {
  scoreboard[offense].score += points;
  console.log(`SCORE: ${offense} +${points} | Total: ${scoreboard[offense].score}`);
}

function getTimeOfPossession(range, offset) {
  const consumed = Math.floor(Math.random() * range + offset);
  minutesRemaining -= consumed;
  console.log(`Clock: ${Math.max(0, minutesRemaining)}:00 remaining`);
}
