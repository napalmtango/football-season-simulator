// const league = [{team: "Rams", record: [1, 2, 1, 0, 80, 90]},
//                 {team: "49ers", record: [3, 1, 0, 0, 100, 70]},
//                 {team: "Seahawks", record: [1, 3, 0, 0, 70, 100]},
//                 {team: "Cardinals", record: [2, 1, 1, 0, 90, 80]}];


// object contining standings,   
// will by updated by weekly results of games
const league = [{team: "Rams", record: [0, 0, 0, 0, 0, 0]},
                {team: "49ers", record: [0, 0, 0, 0, 0, 0]},
                {team: "Seahawks", record: [0, 0, 0, 0, 0, 0]},
                {team: "Cardinals", record: [0, 0, 0, 0, 0, 0]}];


// This array contains indicies to use in order to pull teams from the 
// league object. Schedule[0] represents week one, schedule[1] week two etc.
// 
const schedule = [
  [1, 0, 3, 2],
  [0, 2, 3, 1],
  [2, 1, 0, 3],
  [0, 1, 2, 3],
  [2, 0, 1, 3],
  [1, 2, 3, 0]
];