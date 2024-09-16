$("#myCarousel_top").carousel({
  interval: 10000,
  pause: "false",
});

//scroll slides on swipe for touch enabled devices

$("#myCarousel_top").on("touchstart", function (event) {
  var yClick = event.originalEvent.touches[0].pageY;
  $(this).one("touchmove", function (event) {
      var yMove = event.originalEvent.touches[0].pageY;
      if (Math.floor(yClick - yMove) > 1) {
          $(".carousel").carousel("next");
      } else if (Math.floor(yClick - yMove) < -1) {
          $(".carousel").carousel("prev");
      }
  });
  $(".carousel").on("touchend", function () {
      $(this).off("touchmove");
  });
});


$("#myCarousel_bottom").carousel({
  interval: 10000,
  pause: "false",
});
//scroll slides on swipe for touch enabled devices

$("#myCarousel_bottom").on("touchstart", function (event) {
  var yClick = event.originalEvent.touches[0].pageY;
  $(this).one("touchmove", function (event) {
      var yMove = event.originalEvent.touches[0].pageY;
      if (Math.floor(yClick - yMove) > 1) {
          $(".carousel").carousel("next");
      } else if (Math.floor(yClick - yMove) < -1) {
          $(".carousel").carousel("prev");
      }
  });
  $(".carousel").on("touchend", function () {
      $(this).off("touchmove");
  });
});


$(function() {
  var num = 50; //number of pixels before modifying styles
  var MenuSelector = '#header-pagina';
  var ClaseEsconder = 'fixed-top';
  
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
      $(MenuSelector).addClass(ClaseEsconder);
      } else {
        $(MenuSelector).removeClass(ClaseEsconder);
      }
  });
});