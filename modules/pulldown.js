import { setVisitor, setHome, renderTestMatchup } from "./testing-dashboard.js";



// import { renderTestMatchup } from "./testing-dashboard.js";

export function pulldown() {
  console.log(
    `%cJS%c pulldown.js running`,
    `background-color:gold; font-size: 7px; padding: 5px 0 0 5px`,
    `background-color:none`
  );

  const pulldownList = ['Gladiators', 'Knights', 'Redhawks', 'Vortex', 'Ironclads','Outlaws','Thunderbolts','Tigers',];

  let teamState = 'Visitor';
  const pulldownStateEl = document.querySelector('#pulldown-state');
  pulldownStateEl.textContent = teamState;

  const chooseItemEl = document.querySelector('#choose-item');

  const expander = document.querySelector('#expander');

  chooseItemEl.addEventListener('click', () => {
    expander.classList.toggle('expanded');
    renderPulldown();
  });

  function renderPulldown() {
    console.log('Team State: ',teamState);
    const expanderContentEl = document.querySelector('.expander-content');

    expanderContentEl.replaceChildren();
    for (let i = 0; i < pulldownList.length; i++) {
      expanderContentEl.innerHTML += `<div data-menuindx="${i}">${pulldownList[i]}</div>`;
    }

    const itemChosenEl = document.querySelector('#item-chosen');

    expanderContentEl.addEventListener('click', (event) => {
      if (event.target.dataset.menuindx) {
        console.log(event.target.textContent);

        if (teamState === 'Visitor') {
          const selectedName = event.target.textContent; // Store the clicked name in a local constant
    
          setVisitor(selectedName); // Update the dashboard state
    
          const elements = document.querySelectorAll('[data-visitor]');
          elements.forEach(element => {
            element.textContent = selectedName; // Use the local constant here
          });
    
          teamState = 'Home';
          pulldownStateEl.textContent = teamState;
        } else {
          const selectedName = event.target.textContent;
          
          setHome(selectedName); // Update the dashboard state
          
          const elements = document.querySelectorAll('[data-home]');
          elements.forEach(element => {
              element.textContent = selectedName;
          });
          teamState = 'Visitor';
          renderTestMatchup();
          pulldownStateEl.textContent = teamState;
        }

      }
    });
  }
}


