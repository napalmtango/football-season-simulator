import { divisionA } from './league-logic.js';
import { divisionB } from './league-logic.js';

// import { renderSchedule } from './render.js';

export const schedule = generateWeeklySchedule(divisionA, divisionB);

function generateWeeklySchedule(division1, division2) {
  const intraMatchupPairs = []; 
  const interWeeks = [];

  // 1. Define the 3 unique matchup sets (Round Robin)
  const matchupIndices = [
    [[0, 1], [2, 3]],
    [[0, 2], [1, 3]],
    [[0, 3], [1, 2]]
  ];

  matchupIndices.forEach((matchups, i) => {
    const leg1 = [];
    const leg2 = [];
    
    matchups.forEach(([a, b], idx) => {
      const homeFirst = (i + idx) % 2 === 0;
      
      // Division 1 & 2 Games
      [division1, division2].forEach(div => {
        leg1.push({ home: homeFirst ? div[a] : div[b], away: homeFirst ? div[b] : div[a], type: "Intra" });
        leg2.push({ home: !homeFirst ? div[a] : div[b], away: !homeFirst ? div[b] : div[a], type: "Intra" });
      });
    });
    
    intraMatchupPairs.push([leg1, leg2]);
  });

  // 2. Inter-Division Weeks
  for (let shift = 0; shift < 4; shift++) {
    const week = [];
    for (let i = 0; i < 4; i++) {
      const t1 = division1[i];
      const t2 = division2[(i + shift) % 4];
      const isD1Home = (i < 2) ? (shift + i) % 2 === 0 : (shift + i) % 2 !== 0;
      week.push({ home: isD1Home ? t1 : t2, away: isD1Home ? t2 : t1, type: "Inter" });
    }
    interWeeks.push(week);
  }

  // 3. Separate the sets: one leg for the finale, one for early season
  const finaleWeeks = [];
  const earlyIntraWeeks = [];
  
  intraMatchupPairs.forEach(pair => {
    const toFinaleIdx = Math.random() > 0.5 ? 0 : 1;
    finaleWeeks.push(pair[toFinaleIdx]);
    earlyIntraWeeks.push(pair[1 - toFinaleIdx]);
  });

  // 4. Assemble: Shuffle early weeks, but keep the finale locked at the end
  const earlySeason = [...earlyIntraWeeks, ...interWeeks].sort(() => Math.random() - 0.5);
  const shuffledFinale = finaleWeeks.sort(() => Math.random() - 0.5);

  return [...earlySeason, ...shuffledFinale];
}


if (schedule) {
  console.log('schedule',schedule)
  const tableData = schedule.flatMap((week, i) => 
    week.map(game => ({
      Week: i + 1,
      Matchup: `${game.away} @ ${game.home}`,
      Type: game.type
    }))
  );

  // renderSchedule(schedule);

  console.table(tableData);

} else {
  console.error("Failed to generate a valid schedule.");
}
