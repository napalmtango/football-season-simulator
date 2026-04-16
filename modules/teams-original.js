import { schedule } from "./schedule.js";

import { teamRatings } from './league-logic.js';

export function teamPanel() {
  const standingsEl = document.querySelector('#standings');

  standingsEl.addEventListener('click', (event) => {
    if (event.target.classList.contains('team-name')) {
      console.log(`%c${event.target.textContent}`,'background-color:darkcyan; font-weight:bold; color:white;padding:.3em; border-radius:.2em');

    const containerEl = document.querySelector('.container');

    let teamNameEl = document.querySelector('.container #team-name');

    let pwrRatingEl = document.querySelector('.container #pwr-rating');

    if (!teamNameEl) {
      const clone = document.getElementById('panel-template').content.cloneNode(true);

      const teamPanelEl = clone.querySelector('#team-panel');
      const panelCloseBtnEl = clone.querySelector('#panel-close-btn');
      teamNameEl = clone.querySelector('#team-name');
      pwrRatingEl = clone.querySelector('#pwr-rating');

      containerEl.appendChild(clone);

      panelCloseBtnEl.addEventListener('click', () => {

        console.log('team panel close btn clicked');

        const panel = panelCloseBtnEl.parentElement;

        panel.remove();
         
      });

    }

    renderPanel(teamNameEl, pwrRatingEl,  event);
    }
    
  })
}

function renderPanel(teamNameEl, pwrRatingEl,  event) {
      const scheduleListEl = document.querySelector('#schedule-list');
      scheduleListEl.replaceChildren();

      teamNameEl.textContent = event.target.textContent;

      let currentTeam = teamNameEl.textContent;
      
      const powerRating = teamRatings[currentTeam].pwrRating();

      pwrRatingEl.textContent = `power rating ${powerRating}`;


      function teamSchedule(currentTeam) {
        schedule.forEach((week, i) => {

        const liEl = document.createElement('li');

        const wkEl = document.createElement('span');
        wkEl.textContent = `week ${i + 1}`;
        wkEl.classList.add('team-sch-wk');
        liEl.appendChild(wkEl);

        const matchupEl = document.createElement('span');
        matchupEl.classList.add('team-sch-matchup');
        liEl.appendChild(matchupEl);

        week.forEach(matchup => {
          
          if (matchup.home === currentTeam) {
            matchupEl.textContent = `vs ${matchup.away}`
            console.log(`vs ${matchup.away}`);
          } else if (matchup.away === currentTeam) {
            matchupEl.textContent = `@ ${matchup.home}`
            console.log(`@ ${matchup.home}`);
          } 
        scheduleListEl.appendChild(liEl);
        })
      });
      }
      teamSchedule(currentTeam);

}