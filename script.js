
/*change notes/letters */


let notes = document.querySelector('.btn-notes');
let letters = document.querySelector('.btn-letters');
let pianoKey = document.querySelector('.piano-key');
let pianoKeys = document.querySelectorAll('.piano-key');

notes.addEventListener('click', (event) =>{
    event.target.classList.add('btn-active');
    letters.classList.remove('btn-active');
    pianoKeys.forEach((el) => {
        el.classList.remove('letter');
        el.classList.add('note');
    });
    }
);

letters.addEventListener('click', (event) =>{
    event.target.classList.add('btn-active');
    notes.classList.remove('btn-active');
    pianoKeys.forEach((el) => {
        el.classList.remove('note');
        el.classList.add('letter');
    });
}
);

/*activate of keys*/

const keys = document.querySelectorAll('.piano-key');
const allKeys = document.getElementsByClassName('piano');

const activeKey = (event) =>{
    event.target.classList.add('piano-key-active');
}
const notActiveKey = (event) => {
    event.target.classList.remove('piano-key-active');
}

keys.forEach((el) => {
    el.addEventListener('mousedown', activeKey);
});

keys.forEach((el) => {
    el.addEventListener('mouseup', notActiveKey);
});



/*sound*/

const piano = document.querySelector('.piano');
const audio = document.querySelector('audio');

function playAudio(src){
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')){
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }
});

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key = ${e.code}]`);
    const key = document.querySelector(`div[data-key = ${e.code}]`);
    if (!audio) return;
    key.classList.add('piano-key-active');
    audio.currentTime = 0;
    audio.play();
    }
);

/*fullscreen*/

let screen = document.getElementsByTagName('body');
let screenBtn = document.getElementsByClassName('fullscreen');

function openFullScreen() {
    if(screen.requestFullscreen) {
        screen.requestFullscreen();
    } else if(screen.webkitRequestFullscreen) {
        screen.webkitRequestFullscreen();
      }
}
function closeFullScreen() {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
}

screenBtn.addEventListener('click', openFullScreen);