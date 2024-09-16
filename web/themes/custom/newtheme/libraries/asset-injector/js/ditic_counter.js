  /* Counter 2 */

  function drawCounter(counter) {
    var $counter = counter;
    var $counter_value = $(".js-counter-value", $counter);
    var end = $counter.data("counter-end");
    var interval = $counter.data("counter-interval");
    var count = 1;

    var update = setInterval(function () {
      $counter_value.text(count);
      $counter.addClass("is-counting");

      if (count === end) {
        clearInterval(update);
        $counter.addClass("is-counting");
      }

      count++;
    }, interval);
  };

  $(window).scroll(function () {
    var a = 0;
    var oTop = $(".counter").offset().top - window.innerHeight;
    //console.log($(".counter").offset().top);
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text()
        }).animate(
          {
            countNum: countTo
          },

          {
            duration: 1200,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }
          }
        );
      });
      a = 1;
    }
  });




  /* Counter 2 */

  $window = $(window);
  var $counters = $(".js-counter");

  /* Load */

  $window.on("load", function () {
    $counters.each(function () {
      var $counter = $(this);
      if (isInViewport($counter[0])) {
        if (!$counter.hasClass("is-counting")) {
          drawCounter($counter);
        }
      }
    });
  });

  /* Scroll */

  $window.on("scroll", function () {
    $counters.each(function () {
      var $counter = $(this);
      if (isInViewport($counter[0])) {
        if (!$counter.hasClass("is-counting")) {
          drawCounter($counter);
        }
      }
    });
  });

  
   /* Check if an element is the current viewport */

  function isInViewport(elem) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }


   /* Draw the counter */

  function drawCounter(counter) {
    var $counter = counter;
    var $counter_value = $(".js-counter-value", $counter);
    var end = $counter.data("counter-end");
    var interval = $counter.data("counter-interval");
    var count = 1;

    var update = setInterval(function () {
      $counter_value.text(count);
      $counter.addClass("is-counting");

      if (count === end) {
        clearInterval(update);
        $counter.addClass("is-counting");
      }

      count++;
    }, interval);
  };


