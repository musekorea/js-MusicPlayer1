window.addEventListener('load', onOffLine);

function onOffLine(event){
  console.log(navigator.connection);
   const internetStatus = document.querySelector('.internet');
   let internet = navigator.onLine;
    if (internet===true){
      internetStatus.textContent = "4g"
     }
     else {
      internetStatus.textContent = "offline"
     }
}