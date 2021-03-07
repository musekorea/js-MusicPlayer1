const volumeBtn = document.querySelector('.songVolume');
const muteBtn =  document.querySelector('.muteVolume');
const rangeBar = document.querySelector('.volumeRange');
const body = document.querySelector('body');

//let songVolume = musicFile.volume; 이상하게 변수에 넣으면 작동이 안됨

volumeBtn.addEventListener('click', mute);
muteBtn.addEventListener('click', mute);

volumeBtn.addEventListener('mouseover', volumeRangeShow);
rangeBar.addEventListener('mousedown', volumeRangeShow);
rangeBar.addEventListener('mouseout', volumeRangeHide);
body.addEventListener('click', volumeRangeHide);

let isMute = false;

function mute(){
  console.log(event);
  if (isMute===false){
  musicFile.volume = 0;
  volumeBtn.classList.add('hide');
  muteBtn.classList.remove('hide');
  rangeBar.classList.add('hide');
  
  }else{
  musicFile.volume = 1;
  volumeBtn.classList.remove('hide');
  muteBtn.classList.add('hide');
  
  }
  isMute=!isMute;
}

function volumeRangeShow() {
  musicFile.volume = rangeBar.value;
  rangeBar.classList.remove('hide');
}

function volumeRangeHide(){
  musicFile.volume = rangeBar.value;
  rangeBar.classList.add(`hide`);
  
}
  

