console.log("初始版本");
import string from "./css.js";
console.log(string);
let n = 0;
let speed = 50;

const getInterval = () => {
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  text.innerText = string.substr(0, n);
  text.scrollTop = text.scrollHeight;
  css.innerText = string.substr(0, n);
  n++;
};
let id = setInterval(getInterval, speed);
let speedAdjust = (speed) => {
  window.clearInterval(id);
  id = setInterval(getInterval, speed);
};
btnPause.onclick = () => {
  window.clearInterval(id);
};
btnPlay.onclick = () => {
  window.clearInterval(id);
  id = setInterval(getInterval, speed);
};
btnSlow.onclick = speedAdjust(100);
btnNormal.onclick = () => {
  speedAdjust(50);
};
btnFast.onclick = () => {
  speedAdjust(0);
};
