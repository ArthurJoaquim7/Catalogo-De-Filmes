/*===================== BUTTON ANIMATION =====================*/
const menu = document.getElementById("botao");

menu.onclick = function () {
  menu.classList.toggle("openmenu");
}

// ============================= HAMBURGUER ACTION ============================== //
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('left_nav')[0];
const navbarLinks2 = document.getElementsByClassName('right_nav')[0];
const genres = document.getElementsByClassName('genres')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

genres.addEventListener('click', () => {
  navbarLinks2.classList.toggle('active')
})


/*== REMOVING RIGHT_NAV ==*/
toggleButton.addEventListener('click', () => {
  navbarLinks2.classList.remove('active')
});

//==========================================================================

/*============== CLICKING ================= */
function changeMe() {
  const bgBlack = document.getElementsByClassName('nav')[0];
  if (bgBlack.style.backgroundColor == "black" && window.scrollY < 56) {
    bgBlack.style.backgroundColor = "transparent"
  } else {
    bgBlack.style.backgroundColor = "black"
  }
}

/*============== BG HEADER BY MENU CLICK ============*/
const bgBlack = document.getElementsByClassName('nav')[0];

toggleButton.addEventListener('click', () => {
  bgBlack.classList.add('black')
});

//============== HEADER SCROLL BG COLOR ====================//
const navEL = document.querySelector('.nav')[0];

window.addEventListener('scroll', () => {

  const sideBar = $('.left_nav').css('opacity')
  console.log(sideBar)
  if (window.scrollY >= 56) {
    bgBlack.style.backgroundColor = "black"
  } else {
    if (sideBar === '0') {
      bgBlack.style.backgroundColor = "rgba(241, 241, 241, 0)"
    } else {
      bgBlack.style.backgroundColor = "black"
    }
  }
});

// ============= CLICKING OUTSITE TO REMOVE  ============= //
const transp = document.getElementsByClassName('transp')[0];
document.onclick = function (e) {
  if (!toggleButton.contains(e.target) && !genres.contains(e.target)) {
    navbarLinks.classList.remove('active')
    navbarLinks2.classList.remove('active')
    if (window.scrollY < 56) {
      bgBlack.style.backgroundColor = "transparent"
    } else {
      bgBlack.style.backgroundColor = "black"
    }
  }
}

//==============================================================================

// ========== ACTIVE TYPE  ========== // 
const typeAct = document.querySelectorAll('.typex');

typeAct.forEach(typeAct => {
  typeAct.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    typeAct.classList.add('active');
  });
});


//======= MOVIE SHOW UP ======//
const navUL = document.querySelector('.tyipex');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 56) {
    navUL.classList.add('tyipe-scrolled');
  } else {
    navUL.classList.remove('tyipe-scrolled');
  }
});


//============================ SLIDER's ===============================//
//========== FIRST =============//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 55000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//======= C1 =========//
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 6.5,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 1.6,
    },
    350: {
      slidesPerView: 1.9,
    },
    420: {
      slidesPerView: 2.2,
    },
    470: {
      slidesPerView: 2.5,
    },
    550: {
      slidesPerView: 2.8,
    },
    610: {
      slidesPerView: 3.1,
    },
    650: {
      slidesPerView: 3.3,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 3,
    },
    845: {
      slidesPerView: 4.4,

    },
    960: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 5.4,
      slidesPerGroup: 5,

    },
    1170: {
      slidesPerView: 6.1,
    },
    1270: {
      slidesPerView: 6.5,
      slidesPerGroup: 6,

    },
    1440: {
      slidesPerView: 7.3,
      slidesPerGroup: 7,
    },
    2560: {
      slidesPerView: 12,
      slidesPerGroup: 7,
    },

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//======== TYPE =========//
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 0,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
    },
    375: {
      slidesPerView: 3.5,
      slidesPerGroup: 2,
    },
    425: {
      slidesPerView: 4.5,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 6,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 7.5,
      slidesPerGroup: 3,

    },
    1300: {
      slidesPerView: 10,
      slidesPerGroup: 5,
    },
    1440: {
      slidesPerView: 9.5,
      slidesPerGroup: 5,
    },
  },
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//======= C2 =========//
var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 4,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 1.3,
    },
    375: {
      slidesPerView: 1.5,
    },
    420: {
      slidesPerView: 1.4,
    },
    460: {
      slidesPerView: 1.5,
    },
    520: {
      slidesPerView: 1.7,
    },
    600: {
      slidesPerView: 2,
    },
    680: {
      slidesPerView: 2.3,
    },
    750: {
      slidesPerView: 2.5,
      slidesPerGroup: 2,
    },
    820: {
      slidesPerView: 2.7,
    },
    920: {
      slidesPerView: 3,
    },
    990: {
      slidesPerView: 3.2,
    },
    1024: {
      slidesPerView: 3.4,
      slidesPerGroup: 3,
    },
    1105: {
      slidesPerView: 3.6,
    },
    1150: {
      slidesPerView: 3.8,
    },
    1250: {
      slidesPerView: 4.2,
      slidesPerGroup: 4,
    },
    1310: {
      slidesPerView: 4.4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 4.6,
      slidesPerGroup: 4,
    },
    2560: {
      slidesPerView: 8,
      slidesPerGroup: 7,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//======= C3 =========//
var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 6.5,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 1.6,
    },
    350: {
      slidesPerView: 1.9,
    },
    420: {
      slidesPerView: 2.2,
    },
    470: {
      slidesPerView: 2.5,
    },
    550: {
      slidesPerView: 2.8,
    },
    610: {
      slidesPerView: 3.1,
    },
    650: {
      slidesPerView: 3.3,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 3,
    },
    845: {
      slidesPerView: 4.4,

    },
    960: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 5.4,
      slidesPerGroup: 5,

    },
    1170: {
      slidesPerView: 6.1,
    },
    1270: {
      slidesPerView: 6.5,
      slidesPerGroup: 6,
    },
    1440: {
      slidesPerView: 7.3,
      slidesPerGroup: 7,
    },
    2560: {
      slidesPerView: 12,
      slidesPerGroup: 7,
    },

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//======= C4 =========
var swiper = new Swiper(".mySwiper6", {
  slidesPerView: 4,
  spaceBetween: -30,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    350: {
      slidesPerView: 1.2,
    },
    380: {
      slidesPerView: 1.4,
    },
    430: {
      slidesPerView: 1.6,
    },
    480: {
      slidesPerView: 1.8,
    },
    540: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2.2,
    },
    660: {
      slidesPerView: 2.5,
    },
    760: {
      slidesPerView: 2.9,
      slidesPerGroup: 2,
    },
    850: {
      slidesPerView: 3.2,
    },
    930: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 3.9,
      slidesPerGroup: 3,
    },
    1130: {
      slidesPerView: 4.2,
    },
    1220: {
      slidesPerView: 4.6,
      slidesPerGroup: 4,
    },
    1300: {
      slidesPerView: 4.9,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 5.4,
      slidesPerGroup: 5,
    },
    2560: {
      slidesPerView: 9,
      slidesPerGroup: 7,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//======= C5 =========//
var swiper = new Swiper(".mySwiper7", {
  slidesPerView: 6.5,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 1.6,
    },
    350: {
      slidesPerView: 1.9,
    },
    420: {
      slidesPerView: 2.2,
    },
    470: {
      slidesPerView: 2.5,
    },
    550: {
      slidesPerView: 2.8,
    },
    610: {
      slidesPerView: 3.1,
    },
    650: {
      slidesPerView: 3.3,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 3,
    },
    845: {
      slidesPerView: 4.4,

    },
    960: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 5.4,
      slidesPerGroup: 5,

    },
    1170: {
      slidesPerView: 6.1,
    },
    1270: {
      slidesPerView: 6.5,
      slidesPerGroup: 6,
    },
    1440: {
      slidesPerView: 7.3,
      slidesPerGroup: 7,
    },
    2560: {
      slidesPerView: 12,
      slidesPerGroup: 7,
    },

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//======= C7 =========//
var swiper = new Swiper(".mySwiper9", {
  slidesPerView: 6.5,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 1.6,
    },
    350: {
      slidesPerView: 1.9,
    },
    420: {
      slidesPerView: 2.2,
    },
    470: {
      slidesPerView: 2.5,
    },
    550: {
      slidesPerView: 2.8,
    },
    610: {
      slidesPerView: 3.1,
    },
    650: {
      slidesPerView: 3.3,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 3,
    },
    845: {
      slidesPerView: 4.4,

    },
    960: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 5.4,
      slidesPerGroup: 5,

    },
    1170: {
      slidesPerView: 6.1,
    },
    1270: {
      slidesPerView: 6.5,
      slidesPerGroup: 6,
    },
    1440: {
      slidesPerView: 7.3,
      slidesPerGroup: 7,
    },
    2560: {
      slidesPerView: 12,
      slidesPerGroup: 7,
    },

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/* ============= CHANGING ICON COLOR ============= */
function changeOVER() {
  const aboutImgI = document.getElementById('iconI')

  if (aboutImgI.src.match('img/Icon/instagram.png')) {
    aboutImgI.src = 'img/Icon/instaW.png'
  }
}

function changeOUT() {
  const aboutImgI = document.getElementById('iconI')

  if (aboutImgI.src.match('img/Icon/instaW.png')) {
    aboutImgI.src = 'img/Icon/instagram.png'
  }
}

/* ======== */
function changeOVER2() {
  const aboutImgT = document.getElementById('iconT')

  if (aboutImgT.src.match('img/Icon/twitter.png')) {
    aboutImgT.src = 'img/Icon/ttW.png'
  }
}

function changeOUT2() {
  const aboutImgT = document.getElementById('iconT')

  if (aboutImgT.src.match('img/Icon/ttW.png')) {
    aboutImgT.src = 'img/Icon/twitter.png'
  }
}

/* ======== */
function changeOVER3() {
  const aboutImgF = document.getElementById('iconF')

  if (aboutImgF.src.match('img/Icon/facebook.png')) {
    aboutImgF.src = 'img/Icon/faceW.png'
  }
}

function changeOUT3() {
  const aboutImgF = document.getElementById('iconF')

  if (aboutImgF.src.match('img/Icon/faceW.png')) {
    aboutImgF.src = 'img/Icon/facebook.png'
  }
}

/* ======== */
function changeOVER4() {
  const aboutImgY = document.getElementById('iconY')

  if (aboutImgY.src.match('img/Icon/youtube.png')) {
    aboutImgY.src = 'img/Icon/ytW.png'
  }
}

function changeOUT4() {
  const aboutImgY = document.getElementById('iconY')

  if (aboutImgY.src.match('img/Icon/ytW.png')) {
    aboutImgY.src = 'img/Icon/youtube.png'
  }
}

/*========= LUPA =========*/
function changeOVER5() {
  const aboutImgL = document.getElementById('lupa')

  if (aboutImgL.src.match('img/Icon/lupa.png')) {
    aboutImgL.src = 'img/Icon/lupaW.png'
  }
}

function changeOUT5() {
  const aboutImgL = document.getElementById('lupa')

  if (aboutImgL.src.match('img/Icon/lupaW.png')) {
    aboutImgL.src = 'img/Icon/lupa.png'
  }
}