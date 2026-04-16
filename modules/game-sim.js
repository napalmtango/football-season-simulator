// To Do:
// Clean up, add scoreboard update

import { teamRatings } from "./league-data.js";

let scoreboard;

export function gameSim(visitor, home) {
  
  
//   function getVisitor(visitor, home) {
//   if (visitorPoss) {
//     defense = 'home';
//     offense = 'visitor';
//   } 
//   else {
//     defense = 'visitor';
//     offense = 'home';
//   }
// }

//   const teams = {
//   visitor: visitor,
//   home: home,
// }
  // getVisitor(visitor, home);
scoreboard = {
  [visitor]: {name: visitor, score: 0},
  [home]: {name: home, score: 0}
}
simulateQuarter(visitor, home);

}

  
let visitorPoss = true;
let timeOfPossession = 0;
let minutesRemaining;
let quarter = 1;


const quarterName = ['1st', '2nd', '3rd', '4th'];
let qtrSummary = undefined;



let offense;
let defense;



function simulateQuarter(visitor, home) {
  let offense = visitor;
  let posessionCount = 0;
  minutesRemaining = 15;
  let safetyValve = 0;
  const MAX = 100;

  while(minutesRemaining > 0 && safetyValve < MAX) {
    const rnd = Math.random();

    if (rnd <= .15) {
      getTimeOfPossession( 3, 1 + Math.floor(Math.random() * 1.75 ) );

      console.log(`${offense} kicked a field goal`);
      
      updateScoreboard(offense, 3);
    }
    else if (rnd <= .34) {
      getTimeOfPossession( 6, 1 + Math.floor(Math.random() * 1.75 ));

      console.log(`${offense} scored a touchdown`);
      
      updateScoreboard(offense, 7);
    }
    else {
      getTimeOfPossession( 2.5, 1 );
      console.log(`${offense} did not score`);
    }
    if (offense === visitor) {offense = home} else {offense = visitor};
    posessionCount++
    console.log("Count:", posessionCount);
    if(minutesRemaining <= 0){
     updateScoreboard(offense, 0); 
    }
    
    safetyValve ++;
  } 
}

function getTimeOfPossession(range, offset) {
  const timeOfPossession = Math.floor(Math.random() * range + offset);
    console.log(`Time of possesion: ${timeOfPossession}`);

    minutesRemaining -= timeOfPossession;

    console.log(`Minutes left: ${minutesRemaining}:00`);

}

function updateScoreboard(offense, points) {
  scoreboard[offense].score += points;
  const teams = Object.keys(scoreboard);
  const team1 = teams[0];
  const team2 = teams[1];

  console.log(`%c${scoreboard[team1].name}: ${scoreboard[team1].score}`,'background-color:gray; font-weight:bold; color:white;padding:.3em; border-radius:.2em');
  console.log(`%c${scoreboard[team2].name}: ${scoreboard[team2].score}`,'background-color:gray; font-weight:bold; color:white;padding:.3em; border-radius:.2em');

//   scoreboard = {
//   [visitor]: {name: visitor, score: 0},
//   [home]: {name: home, score: 0}
// }

  // scoreboard[offense].score += points;
  // console.log(scoreboard.visitor.name, scoreboard.visitor.points);
  // console.log(scoreboard.home.name, scoreboard.home.points);
}


// Example structure in an ES6 module
// export class GameSim {
//   constructor() {
//     this.currentQuarter = 1;
//   }

//   simulateQuarter() {
//     let minutesRemaining = 15;
//     for (let i = 15; i > 0; i--) {
//       // Resolve plays for minute 'i'
//     }
    
//     // Update state after the loop
//     this.handleQuarterEnd();
//   }

//   handleQuarterEnd() {
//     if (this.currentQuarter < 4) {
//       this.currentQuarter++;
//       // Handle halftime or side switching here
//     } else {
//       // Check for Overtime or End Game
//     }
//   }
// }
