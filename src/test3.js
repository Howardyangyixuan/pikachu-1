console.log("第三版封装：类");
import string from "./css.js";

console.log(string);

class Player {
    constructor() {
        this.id = undefined;
        this.n = 0;
        this.time = 100;
        this.ui = {
            text: document.querySelector("#text"),
            css: document.querySelector("#css")
        };
        this.events = {
            '#btnPause': 'pause',
            '#btnPlay': 'play',
            '#btnSlow': 'slow',
            '#btnNormal': 'normal',
            '#btnFast': 'fast'
        };
    }

    init() {
        this.play();
        this.bindEvents();
    }

    bindEvents() {
        for (let key in this.events) {
            if (this.events.hasOwnProperty(key)) {
                const value = this.events[key]
                document.querySelector(key).onclick = this[value].bind(this)
            }
        }
    }

    run() {
        if (this.n > string.length) {
            window.clearInterval(this.id);
            return;
        }
        // console.log('hi')
        // console.log(this.n)
        this.ui.text.innerText = string.substr(0, this.n);
        this.ui.text.scrollTop = this.ui.text.scrollHeight;
        this.ui.css.innerText = string.substr(0, this.n);
        this.n++;
    }

    play() {
        window.clearInterval(this.id);
        console.log(this)
        this.id = setInterval(this.run.bind(this), this.time);
    }

    pause() {
        window.clearInterval(this.id);
    }

    speedAdjust(newTime) {
        window.clearInterval(this.id);
        this.time = newTime
        this.id = setInterval(this.run.bind(this), this.time);
    }

    slow() {
        // console.log(this)
        this.speedAdjust(200);
    }

    normal() {
        // console.log(this)
        this.speedAdjust(100);
    }

    fast() {
        // console.log(this)
        this.speedAdjust(0);
    }
}
const player = new Player();
player.init()
// console.log(player.n)

