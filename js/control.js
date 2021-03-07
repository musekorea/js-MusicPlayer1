const playSongBtn = document.querySelector('.fa-play');
const pauseSongBtn = document.querySelector('.fa-pause');
const nextSongBtn = document.querySelector('.fa-step-forward');
const beforSongBtn = document.querySelector('.fa-step-backward');
const shuffleSongBtn = document.querySelector('.fa-random');
const repeatSongBtn = document.querySelector('.fa-redo');
const albumTitleSong = document.querySelector('.albumTitleSong');
const albumTitleArtist = document.querySelector('.albumTitleArtist');

const musicFile = new Audio();

let isPaused;
let isPlaying = false;
let isRandom = false;
let currentSong;

let playListArray = ['audio/circles.mp3', 'audio/blackbird.mp3',`audio/mustard.mp3`,`audio/hella.mp3`];
let coverListArray = [`img/circles.webp`, `img/blackbird.jpg`,`img/mustard.jpg`, `img/hella.jpg`];
let albumTitleArray = [`Cricles (Alan Mark)`, `Bye Bye Blackbird`,`Mean Mr.Mustard`, `Hella Good`];
let albumArtistArray = [`Manfred Mann's Earth Band`, `Miles Davis`, `Beatles`, `No Doubt`];

playSongBtn.addEventListener('click', playMusic);
pauseSongBtn.addEventListener('click', playToggle);
nextSongBtn.addEventListener('click', nextSong);
beforSongBtn.addEventListener('click', beforeSong);
shuffleSongBtn.addEventListener('click', randomPlay);
musicFile.addEventListener('ended', nextSong);   
//이거 ended 조금delay시간을 주고 시작될 수 있도록 해보자

if (randomPlay===true){
  currentSong = randomNumber;
}else{
  currentSong = 0;
}

function playMusic(){
    if(isPlaying===false){
    console.log('newPlay', currentSong);
    albumCover()
    albumTitleSong.textContent = `${albumTitleArray[currentSong]}`;
    albumTitleArtist.textContent = `${albumArtistArray[currentSong]}`;
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

function playToggle(){
    if (isPaused===true){
      console.log('paused', currentSong);
    musicFile.pause();
    albumTitleSong.textContent = `${albumTitleArray[currentSong]}`;
    albumTitleArtist.textContent = `${albumArtistArray[currentSong]}`;
    playSongBtn.classList.remove('hide');
    pauseSongBtn.classList.add('hide');
    isPaused=!isPaused;
    }else{
    console.log('repaused');
    musicFile.play();
    isPaused=!isPaused;
    pauseSongBtn.classList.remove('hide');
    playSongBtn.classList.add('hide');
   }
}

function nextSong(){
   if(currentSong>=playListArray.length-1){
      console.log('over', currentSong);
   }else{
   ++currentSong;
   albumCover();
   console.log('nextsong', currentSong);
   albumTitleSong.textContent = `${albumTitleArray[currentSong]}`;
   albumTitleArtist.textContent = `${albumArtistArray[currentSong]}`;
   musicFile.pause();
   musicFile.src=playListArray[currentSong];
   musicFile.play();
   pauseSongBtn.classList.remove('hide');
   playSongBtn.classList.add('hide');
   }
}

function beforeSong(){
  currentSong--;
  albumCover();
  albumTitleSong.textContent = `${albumTitleArray[currentSong]}`;
  albumTitleArtist.textContent = `${albumArtistArray[currentSong]}`;
  musicFile.pause();
    if(currentSong<=0){
      currentSong=0;
      console.log('justReplay', currentSong);
      isPlaying=false;
      playMusic();
    }else{
      console.log('beforeSong', currentSong);
      musicFile.src=playListArray[currentSong];
      musicFile.play();
      pauseSongBtn.classList.remove('hide');
      playSongBtn.classList.add('hide');
    }
}

function randomPlay(){
  min = 0;
  max = playListArray.length-1;
  let randomNumber = Math.floor(Math.random()*(max-min))+min;
  console.log(randomNumber);
  currentSong = randomNumber;
  isRandom=true;
  }


function albumCover(){
  const albumImg = document.querySelector('.albumImg')
  albumImg.setAttribute('src', `${coverListArray[currentSong]}`);
  //albumImg.setAttribute('src',`${music1.coverImg}`);
}

function init(){
  albumCover();
  albumTitleSong.textContent = `${albumTitleArray[currentSong]}`;
  albumTitleArtist.textContent = `${albumArtistArray[currentSong]}`;
  
}
init();

