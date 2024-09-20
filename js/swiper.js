export function testimonials() {
  var swiper = new Swiper('.mySwiper', {
    loop: true,
    grabCursor: true,
    clickable: true,
    speed: 700,
    autoplay: {
      delay: 3000, // 3 seconds delay between slides
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    breakpoints: {
      200: {
        slidesPerView: 1, // Very small screens
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2, // Small screens (mobile)
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 7, // Medium screens (tablets and smaller desktops)
        spaceBetween: 70,
      },
      1440: {
        slidesPerView: 8, // Large screens (desktops)
        spaceBetween: 80,
      },
    },
  });
}
