
const badgeEl = document.querySelector('header .badges');

const toTopEl = document.querySelector('#to-top');
// console.log(badgeEl);
// _.throttle(함수, 시간) lodash 라이브러리 함수
window.addEventListener('scroll', _.throttle(function () {
  // console.log('window.scrollY !! ',window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    }); 
  } else {
    // 배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 100
    }); 
  }
}, 300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, 0.7, {
    scrollTo: 0 // 스크롤 즉 화면의 위치를 0px로 옮기겠다 0.7초 동안
  });
});












const fadeEls = document.querySelectorAll('.visual .fade-in');
// console.log('fadeEls !! ',fadeEls);
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.7 순차적으로
    opacity: 1
  });
});

// SWIPER
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});


new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


// 기본으로 수평이 되어있기 때문에 direction을 따로 적용하지 않아도 돼
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});





const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.notice .toggle-promotion');

let isHidePromotion = false;
// console.log('isHidePromotion !! ',isHidePromotion);
promotionToggleBtn.addEventListener('click', function (){
  isHidePromotion = !isHidePromotion;
  // console.log('isHidePromotion !! ',isHidePromotion);
  if(isHidePromotion){
    // 숨김처리
    promotionEl.classList.add('hide');
    // promotionEl.style.display = 'none';

  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
    // promotionEl.style.display = 'block';
  }
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// youtube__cover 반복 애니메이션
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(0.5, 1), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});



