

export function createRandomTeams() {
  
  const teamNames = ['Gladiators', 'Knights', 'Redhawks', 'Vortex', 'Ironclads', 'Outlaws', 'Thunderbolts', 'Tigers'];

  const randomTeamsArr = [];

  for (let i = 0; i < 2; i ++){
    const num = Math.floor(Math.random() * teamNames.length );

    // console.log(num);
    // console.log(teamNames);

    randomTeamsArr.push(teamNames.splice(num, 1)[0]);

  }

  // console.log(teamNames);
  // console.log(randomTeamsArr);
  return randomTeamsArr;
}

export const randomTeamsArr = createRandomTeams();
// console.log('createRandomTeams()',createRandomTeams());
