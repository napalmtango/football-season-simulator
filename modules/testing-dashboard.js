import { teamRatings } from './league-data.js';

import { createRandomRatings } from './random-ratings.js';

import { pulldown } from './pulldown.js';

let ratingsPopulated = false;

export let visitor = 'Visitor';
export let home = 'Home';

export function setVisitor(val) { visitor = val; }
export function setHome(val) { home = val; }

export function renderRatingsTable(){
  
  const tBodyEl = document.querySelector('#ratings-table tbody');
  const teamRowTemplateEl = document.querySelector('#team-row-template');

  tBodyEl.replaceChildren();

  for (const [name, stats] of Object.entries(teamRatings)) {
    // Clones team-row-template stored as teamRowTemplateEl
    const clone = teamRowTemplateEl.content.cloneNode(true);

    // Select and set textContent for each item in the the cloned template
    clone.querySelector('.team-name').textContent = name;
    clone.querySelector('.pass-off').textContent = stats.off;
    clone.querySelector('.pass-def').textContent = stats.def;
    clone.querySelector('.overall').textContent = stats.pwrRating();

    // Append to tBodyEl
    tBodyEl.appendChild(clone);
  }
}

export function uiElements()  {
  const mainMenuEl = document.querySelector('#main-menu');
  mainMenuEl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      console.log(`${event.target.innerText} clicked`);

      if (event.target.id === 'generate-btn') {
        createRandomRatings();
        renderRatingsTable();
        ratingsPopulated = true;
      }

      if (event.target.id === 'load-local-storage-btn') {
        const ratingsFrLocalStorage = JSON.parse(localStorage.getItem('teamRatings'));
        if (ratingsFrLocalStorage) {
          console.log(ratingsFrLocalStorage);
          Object.keys(teamRatings).forEach(team => {
            if (teamRatings[team]) {
              // Object.assign updates targetData[team] in-place, keeping the method intact
              Object.assign(teamRatings[team], ratingsFrLocalStorage[team]);
            }
          });
          console.log(teamRatings);
          renderRatingsTable();
          ratingsPopulated = true;
        }
      }

      if (event.target.id === 'save-local-storage-btn') {
        console.log('Save localStorage btn clicked');
        if (ratingsPopulated) {
          console.log('Ratings populated')
          console.log(teamRatings);
          localStorage.setItem('teamRatings', JSON.stringify(teamRatings));
        }
      }
    }
  });
}

export function renderTestMatchup() {
    console.log('Gladiators',teamRatings.Gladiators)

    const visitorPassEl = document.querySelector('#visitor-pass');
    visitorPassEl.textContent = `\u00A0${
      teamRatings[visitor].off-
      teamRatings[home].def
    }`;
    

    const homePassEl = document.querySelector('#home-pass');
    homePassEl.textContent = `\u00A0${
      teamRatings[home].off-
      teamRatings[visitor].def
    }`;
    
}

pulldown();