const menu = document.querySelectorAll('.menu');
menu.forEach(item => {
  item.addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown_menu');
    dropdown.classList.toggle('show');
  });
});
///////////////////////////////////////////////////////////
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) =>{
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
///////////////////////////////////////////////////////////
let topheader = document.querySelector('.header');
let lastScrollY = 0 ;

window.addEventListener('scroll', () =>{
  if (window.scrollY > lastScrollY ){
    topheader.classList.add('hight');
  }
  else{
    topheader.classList.remove('hight');
  }
})

///////////////////////////////////////////////////////////
let marquee = gsap.to('.marquee-part', {
  xPercent: -100,
  repeat: -1,
  ease: "linear",
  duration: 30 ,
})
.totalProgress(0.5);

let lastScrollTop = 0;
let isScrolling;

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset;

  window.clearTimeout(isScrolling);

  if (currentScroll > lastScrollTop) {
    gsap.to(marquee, {
      timeScale: 5 , 
    });
  } 
  else if (currentScroll < lastScrollTop) {
    gsap.to(marquee, {
      timeScale: -5, 
    });
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 

  isScrolling = setTimeout(function() {
    gsap.to(marquee, {
      timeScale: 1, 
    });
  }, 300);
});
///////////////////////////////////////////////////////////
