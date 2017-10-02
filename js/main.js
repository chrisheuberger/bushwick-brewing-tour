$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // self.scrollview.pagingEnabled = NO;

    $(window).scroll(function(){
      $("#rotating-item-wrapper").css("opacity", 1 - $(window).scrollTop() / 100);
      $(".welcome").css("opacity", 0 + $(window).scrollTop() / 100);
    });

    // http://trendmedia.com/news/infinite-rotating-images-using-jquery-javascript/

    var InfiniteRotator = {
      init: function() {
        var initialFadeIn = 100;
        var itemInterval = 400;
        var fadeTime = 0;
        var numberOfItems = $('.rotating-item').length;
        var currentItem = 0;
        $('.rotating-item').eq(currentItem).show(initialFadeIn);
        var infiniteLoop = setInterval(function() {
          $('.rotating-item').eq(currentItem).hide(fadeTime);
          if (currentItem == numberOfItems - 1) {
            currentItem = 0;
          } else {
            currentItem++;
          }
          $('.rotating-item').eq(currentItem).show(fadeTime);
        }, itemInterval);
        return false;
      }
    };

    InfiniteRotator.init();

});
