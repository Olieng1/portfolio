document.addEventListener('DOMContentLoaded', function() {
  const menus = document.querySelectorAll('.menu'); // ค้นหาเมนูทั้งหมด
  const dropdown = document.querySelector('.dropdown_menu'); // ค้นหาเมนูดรอปดาวน์เดียว

  // สร้าง Timeline
  let t1 = gsap.timeline({ paused: true });

  // การตั้งค่าการขยายความสูง
  t1.to(dropdown, {
      height: '100%', // ขยายความสูงอัตโนมัติ
      duration: 0.5,
      ease: "expo.inOut",
      onStart: () => {
          dropdown.style.display = 'block'; // แสดงเมนูเมื่อเริ่มเปิด
      },
      onComplete: () => {
          // ทำให้ลิงก์โปร่งใส
          gsap.to(dropdown.querySelectorAll('.nav-item a'), {
              opacity: 1,
              transform: 'translateY(0)', // ย้ายลิงก์ไปที่ตำแหน่งเริ่มต้น
              duration: 0.5,
              stagger: 0.1,
          });
      }
  });

  // การเปิด/ปิดเมนูเมื่อคลิก
  menus.forEach(menu => {
      menu.addEventListener('click', function() {
          if (dropdown.offsetHeight === 0) {
              t1.play(); // เปิดเมนู
          } else {
              t1.reverse(); // ปิดเมนู
              
              // หน่วงเวลาให้เมนูหายไป
              t1.eventCallback("onReverseComplete", () => {
                  setTimeout(() => {
                      dropdown.style.display = 'none'; // เปลี่ยน display เป็น none หลังจากปิดเสร็จ
                  }, 300); // 300ms เป็นเวลาที่คุณต้องการให้ดีเลย์
              });
              
              // รีเซ็ตลิงก์เมื่อปิด
              gsap.set(dropdown.querySelectorAll('.nav-item a'), {
                  opacity: 0, // รีเซ็ตความโปร่งใสเป็น 0
                  transform: 'translateY(-20px)', // รีเซ็ตตำแหน่ง
                  duration: 0.5,
                  stagger: -0.1,
              });
          }
      });
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
  }, 200);
});
///////////////////////////////////////////////////////////


