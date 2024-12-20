let scrollTimeout;

function handleScroll(direction) {
  const sectionHeight = window.innerHeight;
  const currentSection = Math.round(window.pageYOffset / sectionHeight);
  const newPosition = (currentSection + direction) * sectionHeight;

  window.scrollTo({
    top: newPosition,
    behavior: 'smooth'
  });
}

// 데스크톱: 휠 스크롤
window.addEventListener('wheel', (event) => {
  event.preventDefault();
  if (scrollTimeout) return;

  const direction = event.deltaY > 0 ? 1 : -1;
  handleScroll(direction);

  scrollTimeout = setTimeout(() => {
    scrollTimeout = null;
  }, 1000);
}, { passive: false });

// 모바일: 터치 스크롤
let startY = 0;
let endY = 0;

window.addEventListener('touchstart', (event) => {
  startY = event.touches[0].clientY;
});

window.addEventListener('touchend', (event) => {
  endY = event.changedTouches[0].clientY;

  const direction = startY > endY ? 1 : -1; // 위로 스와이프(스크롤 다운): 1, 아래로 스와이프(스크롤 업): -1
  handleScroll(direction);
});

// DOMContentLoaded 이후 나머지 기존 로직 유지
document.addEventListener("DOMContentLoaded", () => {
  const imageButton = document.getElementById("imageButton");
  const floatingImage = document.getElementById("floatingImage");

  let isImageVisible = false;

  imageButton.addEventListener("click", () => {
    isImageVisible = true;
    floatingImage.classList.remove("hidden");
  });

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
        entry.target.classList.remove("animate");
      }
    });
  }, observerOptions);
});

window.addEventListener('scroll', () => {
  let page = this;
  let pageTop = this.scrollY;
  let pageHeight = this.outerHeight / 2;

  let frames = document.querySelectorAll('.scrollAnim');
  frames.forEach(frame => {
    let frameTop = frame.offsetTop;
    let frameHeight = frame.offsetHeight;

    if (pageTop >= frameTop - pageHeight &&
      pageTop < frameTop + frameHeight / 2) {
      frame.classList.add('anim');
    } else {
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

      const distance = Math.abs(
        pageTop + pageHeight / 2 - (sectionTop + sectionHeight / 2)
      );
      const opacity = Math.max(1 - distance / pageHeight, 0.2);

      if (
        pageTop >= sectionTop - pageHeight / 2 &&
        pageTop < sectionTop + sectionHeight / 2
      ) {
        images.forEach((image, idx) => {
          if (idx === index) {
            image.style.opacity = opacity;
            image.classList.add("visible");
          } else {
            image.style.opacity = "0";
            image.classList.remove("visible");
          }
        });
      }
    });
  });
});

const imageButtons = document.querySelectorAll('.image-button, .image-button1, .image-button2, .image-button3, .image-button4 ');

const images = {
  1: { original: "img/222.png", new: "img/22.png" },
  2: { original: "img/Main3.png", new: "img/Main33.png" },
  3: { original: "img/Main4.png", new: "img/Main44.png" },
  4: { original: "img/Main5.png", new: "img/Main55.png" },
  5: { original: "img/Main6.png", new: "img/Main66.png" },
  6: { original: "img/Main7.png", new: "img/Main77.png" }
};

const sectionStates = {
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true
};

imageButtons.forEach(button => {
  button.addEventListener('click', function () {
    const section = button.getAttribute('data-section');
    const responsiveImage = document.getElementById(`responsiveImage${section}`);

    if (!responsiveImage) {
      console.error(`Image not found for section ${section}`);
      return;
    }

    if (sectionStates[section]) {
      responsiveImage.src = images[section].new;
      button.querySelector('img').src = "img/button.png";
    } else {
      responsiveImage.src = images[section].original;
      button.querySelector('img').src = "img/buttonImage.png";
    }

    sectionStates[section] = !sectionStates[section];
  });
});

function updateImageSource() {
  const screenWidth = window.innerWidth;

  const imageItems = document.querySelectorAll('.image-item');

  if (screenWidth <= 550) {
    document.getElementById('responsiveImage').src = 'img/Main11.png';
    document.getElementById('responsiveImage1').src = 'img/Main22.png';
    document.getElementById('responsiveImage2').src = 'img/Main333.png';
    document.getElementById('responsiveImage3').src = 'img/Main444.png';
    document.getElementById('responsiveImage4').src = 'img/Main555.png';
    document.getElementById('responsiveImage5').src = 'img/Main666.png';
    document.getElementById('responsiveImage6').src = 'img/Main777.png';
    document.querySelector('.image-item').classList.add('visible');
  } else {
    document.getElementById('responsiveImage').src = 'img/Main1.png';
    document.getElementById('responsiveImage1').src = 'img/222.png';
    document.getElementById('responsiveImage2').src = 'img/Main3.png';
    document.getElementById('responsiveImage3').src = 'img/Main4.png';
    document.getElementById('responsiveImage4').src = 'img/Main5.png';
    document.getElementById('responsiveImage5').src = 'img/Main6.png';
    document.getElementById('responsiveImage6').src = 'img/Main7.png';
  }
}

updateImageSource();

window.addEventListener('resize', updateImageSource);

