
let scrollTimeout;
window.addEventListener('wheel', (event) => {
  event.preventDefault();
  if (scrollTimeout) return;

  const direction = event.deltaY > 0 ? 1 : -1;
  const sectionHeight = window.innerHeight;
  const currentSection = Math.round(window.pageYOffset / sectionHeight);
  const newPosition = (currentSection + direction) * sectionHeight;

  window.scrollTo({
    top: newPosition,
    behavior: 'smooth'
  });

  scrollTimeout = setTimeout(() => {
    scrollTimeout = null;
  }, 1000);
}, { passive: false });



document.addEventListener("DOMContentLoaded", () => {
  const imageButton = document.getElementById("imageButton");
  const floatingImage = document.getElementById("floatingImage");

  let isImageVisible = false;

  // 이미지 버튼 클릭 이벤트
  imageButton.addEventListener("click", () => {
    isImageVisible = true;
    floatingImage.classList.remove("hidden"); // 이미지 표시
  });

  // 스크롤 이벤트: 이미지 숨기기
  window.addEventListener("scroll", () => {
    if (isImageVisible) {
      floatingImage.classList.add("hidden");
      isImageVisible = false;
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate");
          } else {
              entry.target.classList.remove("animate"); // 요소가 화면에서 벗어나면 클래스 제거
          }
      });
  }, observerOptions);

});

// 스크롤 애니메이션//
window.addEventListener('scroll', () => {
      let page = this;
      let pageTop = this.scrollY;
      let pageHeight = this.outerHeight / 2 ;
      
      let frames = document.querySelectorAll('.scrollAnim');
      frames.forEach( frame => {
        let frameTop = frame.offsetTop;
        let frameHeight = frame.offsetHeight;
        
        if ( pageTop  >= frameTop - pageHeight &&
            pageTop  < frameTop + frameHeight/2 ){
          frame.classList.add('anim');
        }else{
          frame.classList.remove('anim');
        }
      });
    });






    document.addEventListener("DOMContentLoaded", function () {
      const sections = document.querySelectorAll(".pannel"); // 각 섹션 선택
      const images = document.querySelectorAll("#imageScroller .image-item"); // 이미지 선택
    
      window.addEventListener("scroll", () => {
        const pageTop = window.scrollY;
        const pageHeight = window.innerHeight;
    
        sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
    
          // 현재 스크롤 위치가 섹션 안에 들어가 있는 경우
          const distance = Math.abs(
            pageTop + pageHeight / 2 - (sectionTop + sectionHeight / 2)
          );
          const opacity = Math.max(1 - distance / pageHeight, 0.2); // 최소 0.2로 설정하여 완전히 사라지지 않음
    
          if (
            pageTop >= sectionTop - pageHeight / 2 &&
            pageTop < sectionTop + sectionHeight / 2
          ) {
            images.forEach((image, idx) => {
              if (idx === index) {
                image.style.opacity = opacity; // 부드러운 투명도 전환
                image.classList.add("visible");
              } else {
                image.style.opacity = "0"; // 다른 이미지는 숨김
                image.classList.remove("visible");
              }
            });
          }
        });
      });
    });


// 모든 버튼을 선택합니다.
const imageButtons = document.querySelectorAll('.image-button, .image-button1, .image-button2, .image-button3, .image-button4 ');

// 각 섹션에 대해 원래 이미지와 변경된 이미지 데이터를 정의합니다.
const images = {
    1: { original: "img/222.png", new: "img/22.png" },
    2: { original: "img/Main3.png", new: "img/Main33.png" },
    3: { original: "img/Main4.png", new: "img/Main44.png" },
    4: { original: "img/Main5.png", new: "img/Main55.png" },
    5: { original: "img/Main6.png", new: "img/Main66.png" },
    6: { original: "img/Main7.png", new: "img/Main77.png" }
};

// 각 섹션 상태를 추적하는 객체 생성
const sectionStates = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true
};

// 버튼 클릭 이벤트 처리
imageButtons.forEach(button => {
    button.addEventListener('click', function () {
        const section = button.getAttribute('data-section');
        const responsiveImage = document.getElementById(`responsiveImage${section}`);
        
        if (!responsiveImage) {
            console.error(`Image not found for section ${section}`);
            return;
        }

        // 이미지 변경
        if (sectionStates[section]) {
            responsiveImage.src = images[section].new;
            button.querySelector('img').src = "img/button.png"; // 버튼 이미지 변경
        } else {
            responsiveImage.src = images[section].original;
            button.querySelector('img').src = "img/buttonImage.png"; // 원래 버튼 이미지로 변경
        }

        // 상태 토글
        sectionStates[section] = !sectionStates[section];
    });
});






// 이미지 소스를 변경하는 함수
function updateImageSource() {
  const screenWidth = window.innerWidth; // 현재 화면 너비를 가져옴

  // 모든 이미지 항목을 숨김
  const imageItems = document.querySelectorAll('.image-item');


  // 화면 크기에 맞게 이미지 변경
  if (screenWidth <= 550) {
    document.getElementById('responsiveImage').src = 'img/Main11.png'; // 작은 화면용 이미지
    document.getElementById('responsiveImage1').src = 'img/Main22.png'; // 추가적인 이미지 예시
    document.getElementById('responsiveImage2').src = 'img/Main333.png'; // 추가적인 이미지 예시
    document.getElementById('responsiveImage3').src = 'img/Main444.png'; // 추가적인 이미지 예시
    document.getElementById('responsiveImage4').src = 'img/Main555.png'; // 추가적인 이미지 예시
    document.getElementById('responsiveImage5').src = 'img/Main666.png'; // 추가적인 이미지 예시
    document.getElementById('responsiveImage6').src = 'img/Main777.png'; // 추가적인 이미지 예시
    document.querySelector('.image-item').classList.add('visible'); // 첫 번째 이미지 표시
  } else {
    document.getElementById('responsiveImage').src = 'img/Main1.png'; // 기본 이미지
    document.getElementById('responsiveImage1').src = 'img/222.png'; // 추가적인 이미지 예시
    document.getElementById('responsiveImage2').src = 'img/Main3.png'; // 추가적인 이미지 예시
    document.getElementById('responsiveImage3').src = 'img/Main4.png'; // 추가적인 이미지 예시
    document.getElementById('responsiveImage4').src = 'img/Main5.png'; // 추가적인 이미지 예시
    document.getElementById('responsiveImage5').src = 'img/Main6.png'; // 추가적인 이미지 예시
    document.getElementById('responsiveImage6').src = 'img/Main7.png'; // 추가적인 이미지 예시
  }
}

// 페이지가 로드될 때 초기 이미지 설정
updateImageSource();

// 화면 크기가 변경될 때마다 이미지 업데이트
window.addEventListener('resize', updateImageSource);


const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    list.style.transition = `all 0.3s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    list.style.transition = `all 0.3s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener('mousedown', onScrollStart);
  window.removeEventListener('touchstart', onScrollStart);
  window.removeEventListener('mousemove', onScrollMove);
  window.removeEventListener('touchmove', onScrollMove);
  window.removeEventListener('mouseup', onScrollEnd);
  window.removeEventListener('touchend', onScrollEnd);
  window.removeEventListener('click', onClick);

  setTimeout(() => {
    bindEvents();
    list.style.transition = '';
  }, 300);
};
