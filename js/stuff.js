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

$(function(){
    var fadeBegin = 100, 
    fadeFinish = 300, 
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

//Extra Menu Fade In/Out

$(window).scroll(function() {
    if ($(window).scrollTop() > 48) {
        $('.mini-menu').fadeIn();
    }
    else {
        $('.mini-menu').hide();
    }
});

$(function(){
      $("#svgClick").click(function() {
          $(".mini-menu ul").toggle();
      });
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