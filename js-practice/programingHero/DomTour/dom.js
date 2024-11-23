const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid blue';
    section.style.marginBottom = '15px';
    section.style.paddingLeft = '10px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'lightgray';
}


const placeList = document.getElementById('places-list');

const li = document.createElement('li');
li.innerText = 'pahar toli bon';

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section')
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'birany';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'dom birani';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText = 'ruti';
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);