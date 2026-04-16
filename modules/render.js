

export function renderSchedule(schedule) {
  for (let i = 0; i < schedule.length; i ++){
    const weekContainerEl = document.querySelector(`#week${i}`)
    for (let j = 0; j < schedule[i].length; j ++) {
      const divEl = document.createElement('div');
      const atsymbol = document.createElement('span');
      atsymbol.textContent = '@';
      divEl.textContent = `${schedule[i][j].away} @  ${schedule[i][j].home}`
      weekContainerEl.appendChild(divEl);
    }
  }
}