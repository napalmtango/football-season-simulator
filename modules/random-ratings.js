import { divisionA } from './league-data.js';

import { divisionB } from './league-data.js';

import { teamRatings } from './league-data.js';

export function randomBellCurve(mean = 50, stdDev = 15) {
    let u = 0, v = 0;
    // Box-Muller Transform
    while(u === 0) u = Math.random(); // Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

    // Transform standard normal (mean 0, stdDev 1) to our target range
    num = num * stdDev + mean;

    // Round to nearest integer and "clamp" between 1 and 100
    return Math.min(Math.max(Math.round(num), 1), 100);
}

const divs = [divisionA, divisionB];

export function createRandomRatings() {
  console.log('createRandomRatings() invoked');
  divs.forEach((division) =>{
    division.forEach((team) =>{ 
      if (teamRatings[team]) {
        // Randomly create ratings for passOff, runOff, passDef, and runDef
        teamRatings[team].passOff = randomBellCurve(50, 18);
        teamRatings[team].runOff = randomBellCurve(50, 18);
        teamRatings[team].passDef = randomBellCurve(50, 18);
        teamRatings[team].runDef = randomBellCurve(50, 18);
      } else {
        console.error(`Team ${team} not found in teamRatings!`);
      }
    });
  });
}