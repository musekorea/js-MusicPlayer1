const playSongBtn = document.querySelector('.fa-play');
const pauseSongBtn = document.querySelector('.fa-pause');
const nextSongBtn = document.querySelector('.fa-step-forward');
const beforSongBtn = document.querySelector('.fa-step-backward');
const shuffleSongBtn = document.querySelector('.fa-random');
const repeatSongBtn = document.querySelector('.fa-redo');
console.log(pauseSongBtn);

class Playlist{
  constructor(songName,musician,coverImg){
    this.songName = songName;
    this.musician = musician;
    this.coverImg = coverImg;
  }
}
const music1 = new Playlist('Circles',`ManfredMann's EarthBand`,'img/circles.webp');
const music1_File = new Audio('audio/circles.mp3');

let playing = false;

playSongBtn.addEventListener('click', playMusic);
pauseSongBtn.addEventListener('click', playMusic);

function playMusic(event){
  event.preventDefault();
  if (playing===false){
    albumCover()
    music1_File.play();
    playSongBtn.classList.add('hide');
    pauseSongBtn.classList.remove('hide');
  }else{
    music1_File.pause();
    pauseSongBtn.classList.add('hide');
    playSongBtn.classList.remove('hide');
  }
    playing = !playing
}

function nextSong(){

}
function beforeSong(){

}

function albumCover(){
  const albumImg = document.querySelector('.albumImg')
  albumImg.setAttribute('src',`${music1.coverImg}`);
}

albumCover();

//class에서 다음곡 재생할수 있게 해보자.
