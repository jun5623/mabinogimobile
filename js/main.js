var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
document.addEventListener('click', (e) => {
  const gameStart = document.getElementsByClassName("game_start");
  const loginBox = document.getElementsByClassName("login_box");
  const closeBox = document.getElementById("clos");

  if (e.target.classList.contains("game_start")) {
      if (loginBox.length > 0) {
          loginBox[0].style.display = "flex";
      }
  }

  if (closeBox && e.target === closeBox) {
      if (loginBox.length > 0) {
          loginBox[0].style.display = "none";
      }
  }
});
$(function(){
  $(".menu_icon").click(function(){
      $(this).next(".nav_content").slideToggle();
  });
});
$(function(){
  $(".class-div").click(function(){
      $(this).next(".info").slideToggle();
  });
});