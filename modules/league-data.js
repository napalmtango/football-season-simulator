
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

export const teamFactory = (passOff = 50, runOff = 50, passDef = 50, runDef = 50) => ({
  passOff: passOff,
  runOff: runOff,
  passDef: passDef,
  runDef: runDef,

  off: Math.round((passOff + runOff) / 2),
  def: Math.round((passDef + runDef) / 2),

  get pwrRating() {
    return Math.round((this.off + this.def) / 2);
  }
});

export const teamRatings = {
  Gladiators: teamFactory(),
  Knights: teamFactory(),
  Redhawks: teamFactory(),
  Vortex: teamFactory(),
  Ironclads: teamFactory(),
  Outlaws: teamFactory(),
  Thunderbolts: teamFactory(),
  Tigers: teamFactory()
};

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