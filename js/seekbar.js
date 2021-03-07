const fillBar = document.querySelector('.fillBar');

setInterval(seekBar, 1000);
playSongBtn.addEventListener('click', seekBar);

function seekBar(){
let barPostion = musicFile.currentTime/musicFile.duration;
fillBar.style.width = `${barPostion*100}%`
}

