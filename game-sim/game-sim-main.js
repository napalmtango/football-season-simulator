import { createRandomRatings } from '../modules/random-ratings.js';

import { createRandomTeams } from "./modules/create-random-teams.js";

import { gameSim } from "../modules/game-sim.js";

import { logData } from "./modules/log-data.js";

// import { teamRatings } from "./league-logic.js";

createRandomRatings();

const selectedTeams = createRandomTeams();

const visitor = selectedTeams[0];

const home = selectedTeams[1];

console.log(`%cStarting simulation for: ${visitor} @ ${home}`,'background-color:green; font-weight:bold; color:white;padding:.3em; border-radius:.2em');

gameSim(visitor, home);

logData(visitor, home);

console.log("Main script loaded!");