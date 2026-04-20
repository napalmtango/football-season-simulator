import { teamRatings } from "./league-data.js";

import { createRandomRatings } from './random-ratings.js';

import { renderRatingsTable } from './testing-dashboard.js';

import { uiElements } from './testing-dashboard.js';

// This will be refactored out and replaced by a menu choice from testing-dashboard.html
// import { createRandomTeams } from "../game-sim/modules/create-random-teams.js";

import { gameSim } from "./game-sim.js";

import { logData } from "../game-sim/modules/log-data.js";

// Rudimentary "Season" storage object which will be populated with randomly generated ratings, persistent for throughout a  testing session
const LeagueState = {
  teams: teamRatings, 
  isInitialized: false
};

// Initialize the LeagueState object with random ratings
function initLeague() {
  createRandomRatings(); // This populates LeagueState.teams
  LeagueState.isInitialized = true;
  renderRatingsTable(); // Create table to display the state of team ratings
}
renderRatingsTable()
// initLeague();
uiElements();



// These three consts will be refactored out
// const selectedTeams = createRandomTeams();
// const visitor = selectedTeams[0];
// const home = selectedTeams[1];

// The rest of the code which follows will be triggered by a Start Game Sim button in the

function launchSim() {
 console.log(`%cStarting simulation for: ${visitor} @ ${home}`,'background-color:green; font-weight:bold; color:white;padding:.3em; border-radius:.2em');

gameSim(visitor, home);

logData(visitor, home); 
}

