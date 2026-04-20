import { teamRatings } from './league-data.js';

import { createRandomRatings } from './random-ratings.js';

export function renderRatingsTable(){
  
  const tBodyEl = document.querySelector('#ratings-table tbody');
  const teamRowTemplateEl = document.querySelector('#team-row-template');

  tBodyEl.replaceChildren();

  for (const [name, stats] of Object.entries(teamRatings)) {
    // Clones team-row-template stored as teamRowTemplateEl
    const clone = teamRowTemplateEl.content.cloneNode(true);

    // Select and set textContent for each item in the the cloned template
    clone.querySelector('.team-name').textContent = name;
    clone.querySelector('.pass-off').textContent = stats.passOff;

    clone.querySelector('.run-off').textContent = stats.runOff;
    clone.querySelector('.pass-def').textContent = stats.passDef;
    clone.querySelector('.run-def').textContent = stats.runDef;
    clone.querySelector('.overall').textContent = stats.pwrRating();

    // Append to tBodyEl
    tBodyEl.appendChild(clone);
  }
}

export function uiElements()  {
  const mainMenuEl = document.querySelector('#main-menu');
  mainMenuEl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      console.log(`${event.target.textContent} btn clicked`);

      if (event.target.textContent === 'Generate') {
        createRandomRatings();
        renderRatingsTable();
        renderTestMatchup();
      }
    }
  });
}

function renderTestMatchup() {
    console.log('Gladiators',teamRatings.Gladiators)

    const visitorPassEl = document.querySelector('#visitor-pass');
    visitorPassEl.textContent = `\u00A0${
      teamRatings.Gladiators.passOff-
      teamRatings.Knights.passDef
    }`;
    
    const visitorRunEl = document.querySelector('#visitor-run');
    visitorRunEl.textContent = `\u00A0${
      teamRatings.Gladiators.runOff-
      teamRatings.Knights.runDef
    }`;

    const homePassEl = document.querySelector('#home-pass');
    homePassEl.textContent = `\u00A0${
      teamRatings.Knights.passOff-
      teamRatings.Gladiators.passDef
    }`;
    
    const homeRunEl = document.querySelector('#home-run');
    homeRunEl.textContent = `\u00A0${
      teamRatings.Knights.runOff-
      teamRatings.Gladiators.runDef
    }`;
}

