const playSongBtn = document.querySelector('.fa-play');
const pauseSongBtn = document.querySelector('.fa-pause');
const nextSongBtn = document.querySelector('.fa-step-forward');
const beforSongBtn = document.querySelector('.fa-step-backward');
const shuffleSongBtn = document.querySelector('.fa-random');
const repeatSongBtn = document.querySelector('.fa-redo');

class Playlist{
  constructor(songName,musician,coverImg){
    this.songName = songName;
    this.musician = musician;
    this.coverImg = coverImg;
  }
}
const music1 = new Playlist('Circles',`ManfredMann's EarthBand`,'img/circles.webp');
const musicFile = new Audio();

let isPaused;
let isPlaying = false;
let playListArray = ['audio/circles.mp3', 'audio/blackbird.mp3'];
let currentSong = 0;

playSongBtn.addEventListener('click', playMusic);
pauseSongBtn.addEventListener('click', playToggle);
nextSongBtn.addEventListener('click', nextSong);
beforSongBtn.addEventListener('click', beforeSong);

function playMusic(){
    if(isPlaying===false){
    console.log('newplay');
    albumCover()
    musicFile.src=playListArray[currentSong];
    musicFile.play();
    playSongBtn.classList.add('hide');
    pauseSongBtn.classList.remove('hide');
    isPaused = true;
    isPlaying = true;
  }else{
    playToggle();
  }
}

function playToggle(event){
    if (isPaused===true){
      console.log('paused');
    musicFile.pause();
    playSongBtn.classList.remove('hide');
    pauseSongBtn.classList.add('hide');
    isPaused=!isPaused;
    }else{
    console.log('repause');
    musicFile.play();
    isPaused=!isPaused;
    pauseSongBtn.classList.remove('hide');
    playSongBtn.classList.add('hide');
   }
}

function nextSong(event){
  musicFile.pause();
  let nextSongNumber = ++currentSong;
  musicFile.src=playListArray[nextSongNumber];
  musicFile.play();
  currentSong++;
}

function beforeSong(event){
  console.log(event);
}


function albumCover(){
  const albumImg = document.querySelector('.albumImg')
  albumImg.setAttribute('src',`${music1.coverImg}`);
}

albumCover();

//class에서 다음곡 재생할수 있게 해보자.
