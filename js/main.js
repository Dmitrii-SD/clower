function sliderImg () {
  const imgArr = document.getElementsByClassName('slider__img');
  let imgWidth = document.querySelector('.slider__img').offsetWidth + 20;
  if(document.documentElement.clientWidth <= 744) {
    imgWidth = document.querySelector('.slider__img').offsetWidth + 10;
  }
  const sliderInner = document.querySelector('.slider__inner');
  const sliderSize = imgArr.length * imgWidth;
  const offsetWidth = sliderSize - window.innerWidth;
  let offset = 0;
  const nextBtn = document.querySelector('.slider-next');
  const behindBtn = document.querySelector('.slider-behind');


  nextBtn.addEventListener("click", function() {
    offset += imgWidth; 
    if(offset > offsetWidth){
      nextBtn.disabled = true;
      offset = offsetWidth;
    }  
    sliderInner.style.left = -offset + 'px';
    behindBtn.disabled = false;
    
  })

  behindBtn.addEventListener("click", function() {
    offset -= imgWidth;
    if(offset < 0){
      offset = 0;
      
    }
    sliderInner.style.left = -offset + 'px';
    nextBtn.disabled = false;
  })
}
sliderImg();

function openOrder () {
  const overlay = document.querySelector('.body-overlay')
  const openBtn = document.querySelectorAll('.open-orderWindow')
  const orderWindow = document.querySelector('.order-window')
  const closeBtn = document.querySelector('#close-orderWindow')
  openBtn.forEach(button => {
    button.addEventListener('click', function() {
      orderWindow.style.display = "flex"
      if(orderWindow.style.display === "flex") {
        document.body.style.overflow = "hidden"
        overlay.style.display = "block"
        
      }
    })
  })
  
  closeBtn.addEventListener('click', function() {
    orderWindow.style.display = "none"
    if(orderWindow.style.display === "none") {
      document.body.style.overflow = ""
      overlay.style.display = "none"
    }
  })
}
openOrder()

function sliderReviews () {
  const reviewsArr = document.getElementsByClassName('reviews__item');
  let gap = 20;
  if(document.documentElement.clientWidth <= 744) {
    gap = 10;
  }
  let itemWidth = document.querySelector('.reviews__item').offsetWidth + gap;
  const reviewsBox = document.querySelector('#reviews-box');
  const boxSize = reviewsArr.length * itemWidth;
  const scrollWidth = boxSize - reviewsBox.offsetWidth;
  let scrollOffset = 0;
  const rightBtn = document.querySelector('#reviews-next');
  const leftBtn = document.querySelector('#reviews-behind');


  rightBtn.addEventListener("click", function() {
    scrollOffset += itemWidth;
    if(scrollOffset > scrollWidth) {
      rightBtn.disabled = true;
      scrollOffset = scrollWidth - gap;
    }
    reviewsBox.style.left = -scrollOffset + 'px';
    leftBtn.disabled = false;
  })

  leftBtn.addEventListener("click", function() {
    scrollOffset -= itemWidth;
    if(scrollOffset < 0) {
      scrollOffset = 0;
    }
    reviewsBox.style.left = -scrollOffset + 'px';
    rightBtn.disabled = false;
  })
}
sliderReviews();


function helpQuestion () {
  const downBtn1 = document.querySelector('#open-block1');
  const downBtn2 = document.querySelector('#open-block2');
  const downBtn3 = document.querySelector('#open-block3');
  const downBtn4 = document.querySelector('#open-block4');
  const answerBlock = document.getElementsByClassName('help__answer');
  downBtn1.addEventListener("click", function() {
    if(answerBlock[0].style.display === "none") {
      answerBlock[0].style.display = "block";
    } else{
      answerBlock[0].style.display = "none";
    }  
    
  })  
  downBtn2.addEventListener("click", function() {
    if(answerBlock[1].style.display === "none") {
      answerBlock[1].style.display = "block";
    } else{
      answerBlock[1].style.display = "none";
    } 
  })
  downBtn3.addEventListener("click", function() {
    if(answerBlock[2].style.display === "none") {
      answerBlock[2].style.display = "block";
    } else{
      answerBlock[2].style.display = "none";
    } 
  })
  downBtn4.addEventListener("click", function() {
    if(answerBlock[3].style.display === "none") {
      answerBlock[3].style.display = "block";
    } else{
      answerBlock[3].style.display = "none";
    } 
  })
}
helpQuestion();

function menuBurger () {
  const menu = document.querySelector('#menu-nav');
  const navBtn = document.querySelector('#nav-btn');
  const btnImg = document.querySelector('#nav-btnimg');
  const body = document.querySelector('body');
  const contacts = document.querySelector('.header__contacts');
  
  navBtn.addEventListener("click", function() {
    
    if (menu.classList.toggle('opennav')) {
      btnImg.src = "/img/icons/x.svg";
      btnImg.style
      body.style.overflow = "hidden";
      /* contacts.style.display = 'block';
      contacts.style.position = 'absolute';
      contacts.style.zIndex = '1000';
      contacts.style.top = '400px'; */
      
    } else {
      btnImg.src = "./img/icons/menu-burger.svg";
      body.style.overflow = "visible";
      /*contacts.style.display = 'none'; */
    }
  })
}
menuBurger();
