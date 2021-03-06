const clock = document.querySelector('.statusBarClock');

setInterval(statusBarClock,1000);

function statusBarClock(){
  let currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  clock.textContent = 
  `${hours<10? `0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`
}
statusBarClock();


