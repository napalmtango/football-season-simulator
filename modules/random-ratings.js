import { divisionA } from './league-data.js';

import { divisionB } from './league-data.js';

import { teamRatings } from './league-data.js';

import { teamFactory } from './league-data.js';

const RATINGS_LIMITS = {
  min: 15,
  max: 85
};

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

  const getRandomRating = () => {
    let rawValue = randomBellCurve(50, 18);
    return Math.min(Math.max(rawValue, RATINGS_LIMITS.min), RATINGS_LIMITS.max);
  };

  divs.forEach((division) => {
    division.forEach((team) => { 
      if (teamRatings[team]) {
        const passOff = getRandomRating();
        const runOff = getRandomRating();
        const passDef = getRandomRating();
        const runDef = getRandomRating();

        teamRatings[team] = teamFactory(passOff, runOff, passDef, runDef);
      } else {
        console.error(`Team ${team} not found in teamRatings!`);
      }
    });
  });

  console.log(`League Ratings Randomized (Clamped: ${RATINGS_LIMITS.min}-${RATINGS_LIMITS.max})`);
}