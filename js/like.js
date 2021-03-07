const heart = document.querySelector('.fa-heart');
const albumImg = document.querySelector('.albumImg');

let mousecheck = false;
albumImg.addEventListener('mouseover',heartPop);
albumImg.addEventListener('mouseout',heartPop);

function heartPop(){
  if (mousecheck===false)
  heart.classList.add('albumTitleLike');
  else {
    heart.classList.remove('albumTitleLike');
  }
  mousecheck = !mousecheck;
}

//localStorage에 like 저장해보자.
