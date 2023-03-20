
const userWeight = document.querySelector('#user-weight');
const planet = document.querySelector('#planet');
const button = document.querySelector('#btn');
const pResult = document.querySelector('#result');

const mercury = document.querySelector('#mercury');
const venus = document.querySelector('#venus');
const mars = document.querySelector('#mars');
const jupiter = document.querySelector('#jupiter');
const saturn = document.querySelector('#saturn');
const uranus = document.querySelector('#uranus');
const neptune = document.querySelector('#neptune');
const moon = document.querySelector('#moon');

const earthGravity = 9.8;
const mercuryGravity = 3.7;
const venusGravity = 8.87;
const marsGravity = 3.7;
const jupiterGravity = 24.8;
const saturnGravity = 10.44;
const uranusGravity = 8.7;
const neptuneGravity = 11.15;
const moonGravity = 1.62;

let planetName = '';
let finalWeight = 0;

button.addEventListener('click', calcNewWeight);

function calcNewWeight() {
  const weight = userWeight.value;

  if (planet.value === "mercury") {
    finalWeight = weight * mercuryGravity / earthGravity;
    planetName = 'Mercurio';   
  } else if (planet.value === "venus") {
    finalWeight = weight * venusGravity / earthGravity;
    planetName = 'Venus';
  } else if (planet.value === "mars") {
    finalWeight = weight * marsGravity / earthGravity;
    planetName = 'Marte';
  } else if (planet.value === "jupiter") {
    finalWeight = weight * jupiterGravity / earthGravity;
    planetName = 'Júpiter';
  } else if (planet.value === "saturn") {
    finalWeight = weight * saturnGravity / earthGravity;
    planetName = 'Saturno';
  } else if (planet.value === "uranus") {
    finalWeight = weight * uranusGravity / earthGravity;
    planetName = 'Urano';
  } else if (planet.value === "neptune") {
    finalWeight = weight * neptuneGravity / earthGravity;
    planetName = 'Neptuno';
  } else if (planet.value === "moon") {
    finalWeight = weight * moonGravity / earthGravity;
    planetName = 'Luna';
  } else {
    planetName = '';
    pResult.innerHTML = 'Debes elegir un planeta';
  } 

  if (planetName !== '') {
    pResult.innerHTML = 'Tu peso en ' + planetName + ' es <strong>' + finalWeight.toFixed(0) +  ' kilos</strong>';
    finalWeight = parseFloat(finalWeight.toFixed(0));
  }  
}




