let timerPlayed = document.querySelector('.timerPlayed');
let timerFull = document.querySelector('.timerFull'); 
musicFile.src=playListArray[currentSong];

playSongBtn.addEventListener('click', seekMusic);

setInterval(seekMusic, 1000);
function seekMusic(){
  let seekMinutes = Math.floor(musicFile.currentTime /60 );
  let seekSeconds = Math.floor(musicFile.currentTime % 60);
  timerPlayed.textContent = `${seekMinutes<10? `0${seekMinutes}`: seekMinutes}:${seekSeconds<10? `0${seekSeconds}`:seekSeconds}`;
  
  let seekFullMinutes = Math.floor(musicFile.duration/60);
  let seekFullSeconds = Math.floor(musicFile.duration%60);
  timerFull.textContent = `${seekFullMinutes<10? `0${seekFullMinutes}`: seekFullMinutes}:${seekFullSeconds<10? `0${seekFullSeconds}`:seekFullSeconds}`;
}


