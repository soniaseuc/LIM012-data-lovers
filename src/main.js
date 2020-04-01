/* eslint-disable spaced-comment */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// import data from './data/atletas/atletas.js';
// import data from './data/pokemon/pokemon.js';

//  AQUI MANEJAMOS EL DOOM

import data from './data/lol/lol.js';
import { sortData, filterData } from './data.js';

const allChampion = data.data;
const arrObjetos = Object.values(allChampion);
console.log(allChampion);
console.log(arrObjetos);


const crearTemplate = (arr) => {
  arr.forEach((champion) => {
    const newElement = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    // const h3 = document.createElement('h3');
    newElement.classList.add('class-div');
    img.classList.add('class-img');
    p.classList.add('class-name');
    // h3.classList.add('class-tags');
    img.src = `${champion.splash}`;
    p.innerHTML = `${champion.name}`;
    // h3.innerHTML = `${champion.tags}`;
    newElement.appendChild(img);
    newElement.appendChild(p);
    // newElement.appendChild(h3);
    const container = document.getElementById('container');
    container.appendChild(newElement);
  });
};
crearTemplate(arrObjetos);

// ORDENAR DATA
const orderAz = document.getElementById('orderAz');
orderAz.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(sortData(arrObjetos, 'name', 'ascendente'));
});

const orderZa = document.getElementById('orderZa');
orderZa.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(sortData(arrObjetos, 'name', 'descendente'));
});


// FILTRAR DATA
const assassin = document.getElementById('assassin');
assassin.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Assassin'));
});

const fighter = document.getElementById('fighter');
fighter.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Fighter'));
});

const mage = document.getElementById('mage');
mage.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Mage'));
});

const marksman = document.getElementById('marksman');
marksman.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Marksman'));
});

const support = document.getElementById('support');
support.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Support'));
});

const tank = document.getElementById('tank');
tank.addEventListener('click', () => {
  container.innerHTML = '';
  crearTemplate(filterData(arrObjetos, 'Tank'));
});

/*const currentLocation = location.href;
const menuItems = document.querySelectorAll('a');
const menuLengths = menuItems.length;
for (let i = 0; i % menuLengths; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].className = 'active';
  }
}*/

//AGREGAR O ELIMINAR CLASE,ACTIVAR AL HACER CLICK
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

li.forEach((el) => {
  el.addEventListener('click', () => {
    ul.querySelector('.active').classList.remove('active');
    el.classList.add('active');
  });
});
