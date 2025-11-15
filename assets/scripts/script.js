// Sticky header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (!header) return;

  if (window.scrollY > 150) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Home slider
if (document.querySelector(".home-slider")) {
  $(document).ready(function () {
    $(".home-slider").slick({
      dots: true,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 5000,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      breakpoints: {
        576: {
          prevArrow: false,
        }
      }
    });
  });
}

//Scroll animation
if (document.querySelector(".card-animate")) {
  ScrollOut({
    threshold: 0.8,
    cssProps: { visibleY: true },
  });
}

// Modal slider 
if(document.querySelector(".modal-slider")){


var swiper = new Swiper(".modal-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
        0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

}

// AOS
window.addEventListener("load", function () {
  AOS.init({
    once: false,
    duration: 1200,
    easing: "ease-out",
    mirror: true,
  });

  if (document.querySelector(".home-slider")) {
    $(".home-slider").on("setPosition", function () {
      AOS.refresh();
    });
  }
});

// Single project page slider
if (document.querySelector(".project-slider")) {
  $(document).ready(function () {
    const $slider = $(".project-slider");

    $slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      arrows: true,
      autoplay: false,
      centerMode: true,
      centerPadding: "25%",
      prevArrow: $(".prevBtn"),
      nextArrow: $(".nextBtn"),
        responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '10%',
        prevArrow:'',
        nextArrow:'',
      }
    }
  ]

    });

    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        if (currentSlide !== nextSlide) {
          document
            .querySelectorAll(".slick-center + .slick-cloned")
            .forEach((next) => {
              setTimeout(() =>
                next.classList.add("slick-current", "slick-center")
              );
            });
        }
      }
    );
  });
}

// Modal
if(document.querySelector('.modal-wrapper')){
  function openModal () {
  const modalOpen = document.querySelector(".modal-wrapper");
  modalOpen.classList.add('show');
}

function closeModal () {
  let modalClose = document.querySelector(".modal-wrapper");
  modalClose.classList.remove('show')
}
}
