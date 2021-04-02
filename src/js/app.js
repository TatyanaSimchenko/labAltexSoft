document.addEventListener("DOMContentLoaded", () => {
  const burgerElement = document.getElementById("burger");
  const menuElement = document.getElementById("menu");

  burgerElement.addEventListener("click", function () {
    const isActive = menuElement.classList.contains("_visible");
    if (isActive) {
      this.classList.remove("_active");
      menuElement.classList.add("_hide");
      setTimeout(() => {
        menuElement.classList.remove("_hide");
        menuElement.classList.remove("_visible");
      }, 400);
    } else {
      this.classList.add("_active");
      menuElement.classList.add("_visible");
    }
  });
  new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: {
      sensitivity: 1,
    },
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
