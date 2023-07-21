"use strict";

const keyLabels = 'asdfghjkl';
const soundLabels = ['a.wav','s.wav','d.wav','f.wav','g.wav','h.wav','j.wav','k.wav','l.wav'];

const keysObjectsMap = new Map();

const soundsObjectsMap = new Map();

for (const keyHolder of keyLabels){
    keysObjectsMap.set(keyHolder,document.querySelector(`#${keyHolder}`));
}

for (const soundHolder of soundLabels){
    soundsObjectsMap.set(soundHolder,new Audio(`sounds/${soundHolder}`));
}

//what happens when keys are pressed
window.addEventListener('keydown', function (e){
    if (keysObjectsMap.has(e.key)){
        keysObjectsMap.get(e.key).style.color = "red"; //change button style if key is pressed
        let audio = soundsObjectsMap.get(`${e.key}.wav`);
        audio.currentTime = 0; //reset the current time
        audio.play(); //play sound if key is played
    }
});

//what happens when keys are not pressed
window.addEventListener('keyup', function (e){
    if (keysObjectsMap.has(e.key)){
        keysObjectsMap.get(e.key).style.color = ""; //reset button style
        //soundsObjectsMap.get(`${e.key}.wav`).pause(); //stop playing the sound
    }
});