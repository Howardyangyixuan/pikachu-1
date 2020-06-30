console.log("第二版封装：对象");
import string from "./css.js";
console.log(string);

const player = {
  id:undefined,
  n:1,
  time:2000,
  ui:{
    text : document.querySelector("#text"),
    css : document.querySelector("#css")
  },  events : {
    '#btnPause':'pause',
    '#btnPlay':'play',
    '#btnSlow':'slow',
    '#btnNormal':'normal',
    '#btnFast': 'fast'
  },
  init(){

    player.play();
    player.bindEvents();
  },

  bindEvents:()=>{
    for (let key in player.events){
      if(player.events.hasOwnProperty(key)){
        const value =  player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run() {
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.text.innerText = string.substr(0, player.n);
    player.ui.text.scrollTop = player.ui.text.scrollHeight;
    player.ui.css.innerText = string.substr(0, player.n);
    player.n++;
  },
  play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause() {
    window.clearInterval(player.id);
  },
  speedAdjust(newTime) {
    window.clearInterval(player.id);
    player.time = newTime
    player.id = setInterval(player.run, player.time);
  },
  slow() {
    player.speedAdjust(2000);
  },
  normal() {
    player.speedAdjust(300);
  },
  fast() {
    player.speedAdjust(0);
  },
};

player.init()



