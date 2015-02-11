//Fade Out Function

$(function(){
    var fadeBegin = 200, 
    fadeFinish = 250, 
    fadingElement = $('.invisible_out');

$(window).on('scroll', function(){
    var offset = $(document).scrollTop(), opacity = 0; 
    console.log(offset);
    if( offset <= fadeBegin ){
        opacity = 1; 
    } else if( offset <= fadeFinish ){
        opacity = 1 - offset / fadeFinish;

    }
    fadingElement.stop().animate({opacity: opacity}, 100);
  });
});


// Image Show
  $(document).ready(function() {
    $(".fancybox").fancybox();
  });



$(document).ready(function() {
  var windowHeight = $(window).height();
        $('.container').css({
              "height": windowHeight
          });
});

$(document).ready(function() {
  var rotate = function() {
    $("section.start")
      .delay(5000).queue(function() {
          $(this).css({
              "background": "url('./images/slider/bg_skater_opt.jpg') no-repeat center center fixed",
              "-webkit-background-size" : "cover",
              "-moz-background-size" : "cover",
              "-o-background-size" : "cover",
              "background-size" : "cover",
              "transition" : "background 0.5s linear",
              "color" : "rgba(255,255,255,0.8)"
          });
          $(this).dequeue();
      })
      .delay(5000).queue(function() {
          $(this).css({
              "background": "url('./images/slider/bg_bear_opt.jpg') no-repeat center center fixed",
              "-webkit-background-size" : "cover",
              "-moz-background-size" : "cover",
              "-o-background-size" : "cover",
              "background-size" : "cover",
              "transition" : "background 0.5s linear",
              "color" : "rgba(0,0,0,0.8)"
          });
          $(this).dequeue();
      })
      .delay(5000).queue(function() {
          $(this).css({
              "background": "url('./images/slider/bg_city_opt.jpg') no-repeat center center fixed",
              "-webkit-background-size" : "cover",
              "-moz-background-size" : "cover",
              "-o-background-size" : "cover",
              "background-size" : "cover",
              "transition" : "background 0.5s linear",
              "color" : "rgba(255,255,255,0.8)"
          });
          $(this).dequeue();
      })
      .delay(5000).queue(function(next) {
          $(this).css({
              "background": "url('./images/slider/bg_forest_opt.jpg') no-repeat center center fixed",
              "-webkit-background-size" : "cover",
              "-moz-background-size" : "cover",
              "-o-background-size" : "cover",
              "background-size" : "cover",
              "transition" : "background 0.5s linear",
              "color" : "rgba(255,255,255,0.8)"
          });
          $(this).dequeue();
          next();
      })
      .queue(rotate);
  };
  rotate();
});

//Sub Menu Function

    //Deactivate for the start
$(document).ready(function() {
        $('.mini-menu').hide();
});

    //Begin on scroll
$(window).scroll(function() {
  var st = $(this).scrollTop();
    if(st > 850) {
        $('.mini-menu').fadeIn();
    }
    else if(st < 850) {
        $('.mini-menu').fadeOut();
    }
    else {
        $('.mini-menu').fadeOut();
    }
});


//Smooth Scroll Function

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

