document.addEventListener("scroll", () => {
  const rows = document.querySelectorAll(".project-row");
  const windowHeight = window.innerHeight;
const center = windowHeight / 2 - windowHeight * 0.1;


  rows.forEach(row => {
    const rect = row.getBoundingClientRect();
    const rowCenter = rect.top + rect.height / 2;
    const distance = Math.abs(center - rowCenter);

    const maxDistance = windowHeight / 2;
    const opacity = Math.max(0.3, 1 - distance / maxDistance);
    const scale = Math.max(0.9, 1 - (distance / maxDistance) * 0.1);

    row.style.opacity = opacity;
    row.style.transform = `scale(${scale})`;
  });
});



window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 200) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

if(document.querySelector('.home-slider')) {
    $(document).ready(function () {
  $(".home-slider").slick({
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
     prevArrow:$('.prev'),
      nextArrow:$('.next'),

  });
});
}
window.addEventListener("load", function () {
  AOS.init({
    once: false,         
    duration: 1200,      
    easing: 'ease-out',  
    mirror: true,
  });

  if(document.querySelector('.home-slider')) {
      $('.home-slider').on('setPosition', function(){
    AOS.refresh();
  });
  }
});