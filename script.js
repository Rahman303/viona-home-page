var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    1000: {
        slidesPerView: 4,
    },

    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    484: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    280: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    100: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
},
   slidesPerView: 3,
   spaceBetween: 30,
   slidesPerGroup: 3,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });




const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}


setInterval(updateCountdown, 1000);



let valueDisplays = document.querySelectorAll(".team-numbers");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function() {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


// const myInput = document.querySelector('.d-flex')
// const myColor = ['white']
// const form = document.querySelector('form-control-input')
// myInput.addEventListener(click, "changeBgColor")

// function changeBgColor () {
//   const color = myColor[Math.floor(Math.floor()*myColor.length)]
//   const form = document.querySelector('form-control-input')
//   form.style.backgroundColor = color
// }

// function myFunction() {
//   document.getElementById("myDIV").style.backgroundColor = "white";
// }