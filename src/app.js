import 'bootstrap';
import './style.css';

import './assets/img/rigo-baby.jpg';
import './assets/img/4geeks.ico';

window.onload = function () {
  console.log(GenerateExcuse());
  console.log('Hello Rigo from the console!');

  
};

function GenerateExcuse() {
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = [
    'before the class',
    'when I was sleeping',
    'while I was exercising',
    'during my lunch',
    'while I was praying',
  ];

  let randomWho = getRandomItem(who);
  let randomAction = getRandomItem(action);
  let randomWhat = getRandomItem(what);
  let randomWhen = getRandomItem(when);

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

// New Function to remove repeated code Math.floor(Math.random() * array.length);
function getRandomItem(array){
  let item = array[Math.floor(Math.random()* array.length)];
  return item;
}
