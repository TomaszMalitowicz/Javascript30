

const playSound = function (e) {
    // console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; //stop the function form running
    // console.log(audio);
    audio.currentTime = 0; // przewinie audio do początku.
    audio.play();
    // console.log(key);
    key.classList.add('playing');
}

const removeTransition = function (e) {
    console.log(e);
    if (e.propertyName !== 'transform') return; // pomin jezeli nie jestes transform
    console.log(this);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);