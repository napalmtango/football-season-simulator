
export const standings = [
  { team: "Gladiators", division: "West", wins: 0, losses: 0, ties: 0, pct: ".000", pf: 0, pa: 0 },
  { team: "Knights", division: "West", wins: 0, losses: 0, ties: 0, pct: ".000", pf: 0, pa: 0 },
  { team: "Redhawks", division: "West", wins: 0, losses: 0, ties: 0, pct: ".000", pf: 0, pa: 0 },
  { team: "Vortex", division: "West", wins: 0, losses: 0, ties: 0, pct: ".000", pf: 0, pa: 0 },
  { team: "Ironclads", division: "East", wins: 0, losses: 0, ties: 0, pct: ".000", pf: 0, pa: 0 },
  { team: "Outlaws", division: "East", wins: 0, losses: 0, ties: 0, pct: ".000", pf: 0, pa: 0 },
  { team: "Thunderbolts", division: "East", wins: 0, losses: 0, ties: 0, pct: ".000", pf: 0, pa: 0 },
  { team: "Tigers", division: "East", wins: 0, losses: 0, ties: 0, pct: ".000", pf: 0, pa: 0 },
];

export const teamRatings = {
  Gladiators: {
    passOff: 50, 
    passDef: 50, 
    runOff: 50, 
    runDef: 50,
    pwrRating() {
    return Math.round((this.passOff + this.passDef + this.runOff + this.runDef) / 4);
  }
  },
  Knights: {
    passOff: 50, 
    passDef: 50, 
    runOff: 50, 
    runDef: 50,
    pwrRating() {
    return Math.round((this.passOff + this.passDef + this.runOff + this.runDef) / 4);
  }
  },
  Redhawks: {
    passOff: 50, 
    passDef: 50, 
    runOff: 50, 
    runDef: 50,
    pwrRating() {
    return Math.round((this.passOff + this.passDef + this.runOff + this.runDef) / 4);
  }
  },
  Vortex: {
    passOff: 50, 
    passDef: 50, 
    runOff: 50, 
    runDef: 50,
    pwrRating() {
    return Math.round((this.passOff + this.passDef + this.runOff + this.runDef) / 4);
  }
  },
  Ironclads: {
    passOff: 50, 
    passDef: 50, 
    runOff: 50, 
    runDef: 50,
    pwrRating() {
    return Math.round((this.passOff + this.passDef + this.runOff + this.runDef) / 4);
  }
  },
  Outlaws: {
    passOff: 50, 
    passDef: 50, 
    runOff: 50, 
    runDef: 50,
    pwrRating() {
    return Math.round((this.passOff + this.passDef + this.runOff + this.runDef) / 4);
  }
  },
  Thunderbolts: {
    passOff: 50, 
    passDef: 50, 
    runOff: 50, 
    runDef: 50,
    pwrRating() {
    return Math.round((this.passOff + this.passDef + this.runOff + this.runDef) / 4);
  }
  },
  Tigers: {
    passOff: 50, 
    passDef: 50, 
    runOff: 50, 
    runDef: 50,
    pwrRating() {
    return Math.round((this.passOff + this.passDef + this.runOff + this.runDef) / 4);
  }
  },
}

//const divB = ["Thunderbolts", "Outlaws", "Titans", "Ironclads"];

// export const schedule = [
//   [1, 0, 3, 2], [0, 2, 3, 1], [2, 1, 0, 3],
//   [0, 1, 2, 3], [2, 0, 1, 3], [1, 2, 3, 0]
// ];

export const divisionA = standings
.filter(item => item.division === "West")
.map(item => item.team);

export const divisionB = standings
.filter(item => item.division === "East")
.map(item => item.team);

console.log(divisionA);
console.log(divisionB);

export const gameHistory = [];

export const qtrScores = [0, 0, 0, 0, 3, 3, 6, 7, 7, 7, 10, 10, 14, 14];

export function generateScore() {
  return Array.from({ length: 4 }).reduce(acc => 
    acc + qtrScores[Math.floor(Math.random() * qtrScores.length)], 0);
}

export function calcPct(team) {
  const games = team.wins + team.losses + team.ties;
  if (games === 0) return ".000";
  return ((team.wins + (team.ties / 2)) / games).toFixed(3).replace(/^0/, '');
}

export function getH2H(teamA, teamB) {
  let aWins = 0, bWins = 0;
  gameHistory.forEach(g => {
    if ((g.h === teamA && g.a === teamB) || (g.h === teamB && g.a === teamA)) {
      const winner = g.hS > g.aS ? g.h : (g.aS > g.hS ? g.a : null);
      if (winner === teamA) aWins++;
      if (winner === teamB) bWins++;
    }
  });
  return bWins - aWins; // Returns negative if A is better
}