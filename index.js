'use strict';
import ref from './ref.js';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const min = 0;
const max = colors.length - 1;
let intervalChangeColors;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const changeColor = () => {
  ref.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
};

const letStart = () => {
  ref.btnStart.setAttribute('disabled', 'disabled');
  intervalChangeColors = setInterval(() => {
    changeColor();
  }, 1000);
};

const letStop = () => {
  clearInterval(intervalChangeColors);
  ref.btnStart.removeAttribute('disabled');
};

ref.btnStart.addEventListener('click', letStart);
ref.btnStop.addEventListener('click', letStop);