import { teamRatings } from "../../modules/league-data.js";

import {createRandomTeams} from './create-random-teams.js';

import { randomTeamsArr } from './create-random-teams.js'

export function logData(visitor, home){
  console.log(`%c${visitor} @ ${home}`,'background-color:green; font-weight:bold; color:white;padding:.3em; border-radius:.2em');

  // Log ratings
  // Visitor
  console.log(visitor, teamRatings[visitor].pwrRating());
  console.log(`passOff:${teamRatings[visitor].passOff}`,
  `runOff:${teamRatings[visitor].runOff}`,
  `passDef:${teamRatings[visitor].passDef}`,
  `runDef:${teamRatings[visitor].runDef}`
  );
  console.log(`%cPass:${teamRatings[visitor].passOff-teamRatings[home].passDef} Run:${teamRatings[visitor].runOff-teamRatings[home].runDef}`,'font-weight:bold');
    

  // Home
  console.log(home, teamRatings[home].pwrRating());
  console.log(`passOff:${teamRatings[home].passOff}`,
  `runOff:${teamRatings[home].runOff}`,
  `passDef:${teamRatings[home].passDef}`,
  `runDef:${teamRatings[home].runDef}`
  );

  console.log(`%cPass:${teamRatings[home].passOff-teamRatings[visitor].passDef} Run:${teamRatings[home].runOff-teamRatings[visitor].runDef}`,'font-weight:bold');
}

export function logDriveModifiers(offense, defense, mods) {
  console.group(`Drive Analysis: ${offense} vs ${defense}`);
  console.log(`%cFG Multiplier: ${mods.fgMultiplier.toFixed(3)}`, "color: #3498db");
  console.log(`%cTD Multiplier: ${mods.tdMultiplier.toFixed(3)}`, "color: #e67e22");
  console.log(`Offense Run Power: ${mods.runPower}`);
  console.groupEnd();
}