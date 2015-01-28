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

//Fade In Function
/*
$(function(){
    var fadeBegin = $(window).scrollTop(), 
    fadeFinish = $(window).scrollTop() + 60, 
    fadingElement = $('.invisible_in');

  $(window).on('scroll', function(){
    var offset = $(document).scrollTop(), opacity = 1;
    if( offset <= fadeBegin ){
        opacity = 0; 
    } else if( offset <= fadeFinish ){
        opacity = 0 - offset / fadeFinish;
    }
    fadingElement.stop().animate({opacity: opacity}, 100);
  });
});
*/


$(function(){
    var scrollTop     = $(window).scrollTop(),
        elementOffset = $('.invisible_in').offset().top,
        fadingElement = $('.invisible_in'),
        distance      = (elementOffset - scrollTop);

  $(window).on('scroll', function(){
      var opacity = 1;

    if( fadingElement.distance > scrollTop ){
        opacity = 0; 
    }
    else {
        opacity = 1;
    }
    fadingElement.stop().animate({opacity: opacity}, 100);
  });
});

// Image Show

$(document).ready(function() {
  var rotate = function() {
    $("section.start")
      .delay(4000).queue(function() {
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
      .delay(4000).queue(function() {
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
      .delay(4000).queue(function() {
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
      .delay(4000).queue(function(next) {
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

//Extra Menu Fade In/Out
/*
$(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
        $('.mini-menu').fadeIn();
    }
    else {
        $('.mini-menu').fadeOut();
    }
});
*/

$(window).scroll(function() {
  var st = $(this).scrollTop();
    if(st + $(window).height() > $(document).height() - st) {
        $('.mini-menu').fadeIn();
    }
    else {
        $('.mini-menu').fadeOut();
    }
});

//Box Slider Activation



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