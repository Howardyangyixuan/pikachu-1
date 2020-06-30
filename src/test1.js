console.log("第一版封装：函数");
import string from "./css.js";
console.log(string);
let n = 0;
let time = 2000;

const run = () => {
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  text.innerText = string.substr(0, n);
  text.scrollTop = text.scrollHeight;
  css.innerText = string.substr(0, n);
  n++;
};
// let id = setInterval(run, time);

let speedAdjust = (newTime) => {
  window.clearInterval(id);
  time = newTime
  id = setInterval(run, time);
};

let slow = () => {
  speedAdjust(2000);
};
let normal = () => {
  speedAdjust(300);
};
let fast = () => {
  speedAdjust(0);
};
let pause = () => {
  window.clearInterval(id);
};
let play = () => {
  window.clearInterval(id);
  id = setInterval(run, time);
  // return id
};
let id = setInterval(run, time);
// let id = play();

btnPause.onclick = pause;
btnPlay.onclick = play;
btnSlow.onclick = slow;
//   speedAdjust(100);

btnNormal.onclick = normal;
// speedAdjust(50);

btnFast.onclick = fast;
//   speedAdjust(0);
