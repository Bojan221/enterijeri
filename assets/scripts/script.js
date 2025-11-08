// Stiky header animation
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 200) {
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
