var flagscroll=true;

$(window).scroll(function() {
  var elementOffset = $('.note').offset().top - $(window).height()/2;
  var path = document.querySelector('.note path');
  var length = path.getTotalLength();
  var st = $(this).scrollTop(); 
    if(st > elementOffset && flagscroll==true) {
    $('.note').css({"opacity": "1"});
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 2s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
    flagscroll=false;
    }
});



var flagscroll2=true;

$(window).scroll(function() {
  var elementOffset = $('.skate').offset().top - $(window).height()/2;
  var path = document.querySelector('.skate .p1');
  var length = path.getTotalLength();
  var st = $(this).scrollTop(); 
    if(st > elementOffset && flagscroll2==true) {
    $('.skate').css({"opacity": "1"});
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 2s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
    flagscroll2=false;
    }
});

var flagscroll3=true;

$(window).scroll(function() {
  var elementOffset = $('.skate').offset().top - $(window).height()/2;
  var path = document.querySelector('.skate .p2');
  var length = path.getTotalLength();
  var st = $(this).scrollTop(); 
    if(st > elementOffset && flagscroll3==true) {
    $('.skate').css({"opacity": "1"});
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 2s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
    flagscroll3=false;
    }
});

var flagscroll4=true;

$(window).scroll(function() {
  var elementOffset = $('.skate').offset().top - $(window).height()/2;
  var path = document.querySelector('.skate .p3');
  var length = path.getTotalLength();
  var st = $(this).scrollTop(); 
    if(st > elementOffset && flagscroll4==true) {
    $('.skate').css({"opacity": "1"});
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 2s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
    flagscroll4=false;
    }
});

var flagscroll5=true;

$(window).scroll(function() {
  var elementOffset = $('.skate').offset().top - $(window).height()/2;
  var path = document.querySelector('.skate .p4');
  var length = path.getTotalLength();
  var st = $(this).scrollTop(); 
    if(st > elementOffset && flagscroll5==true) {
    $('.skate').css({"opacity": "1"});
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 2s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
    flagscroll5=false;
    }
});

var flagscroll6=true;

$(window).scroll(function() {
  var elementOffset = $('.skate').offset().top - $(window).height()/2;
  var path = document.querySelector('.skate .p5');
  var length = path.getTotalLength();
  var st = $(this).scrollTop(); 
    if(st > elementOffset && flagscroll6==true) {
    $('.skate').css({"opacity": "1"});
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 2s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
    flagscroll6=false;
    }
});









//Unused
/*
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


/*

var bamscroll=true;

$(window).scroll(function() {
  var elementOffset = $('.skate').offset().top - $(window).height()/2;
  var st = $(this).scrollTop(); 
  var path = document.querySelector('.skate path p1');
  var length = path.getTotalLength();
  var count = 0;
    if(st > elementOffset && bamscroll==true) {
    $('.skate').css({"opacity": "1"});
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 2s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
    if (count == 5){
      bamscroll=false;
    }
    else { 
          count = count ++;
    }
  }
});

bamscroll==true;

(function( $ ){
   $.fn.myDraw = function() {
    var elementOffset = $('.skate').offset().top - $(window).height()/2;
    var st = $(this).scrollTop();
    var path = document.querySelector('.path');
    var length = path.getTotalLength();
    var st = $(this).scrollTop(); 
    var count = 0;
      if(st > elementOffset && bamscroll==true) {
      $('.skate').css({"opacity": "1"});
      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
        'none';
      // Set up the starting positions
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();
      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 2s ease-in-out';
      // Go!
      path.style.strokeDashoffset = '0';
     }; 
})( jQuery );


$(document).scroll(function() {
    $(".skate").delay(500).queue(function() {
          $('.skate .p1').myDraw();
          $('.skate .p1').dequeue();
      })
      .delay(500).queue(function() {
          $('.skate .p2').myDraw();
          $('.skate .p2').dequeue();
      })
      .delay(500).queue(function() {
          $('.skate .p3').myDraw();
          $('.skate .p3').dequeue();
      })
      .delay(500).queue(function() {
          $('.skate .p4').myDraw();
          $('.skate .p4').dequeue();
      })
      .delay(500).queue(function() {
          $('.skate .p5').myDraw();
          $('.skate .p5').dequeue();
      });
      $(this).dequeue();
      next();
      bamscroll = false;
});

/*
var myDraw = function() {
  var path = document.querySelector('.skate path');
  var length = path.getTotalLength();
  var st = $(this).scrollTop(); 
  var count = 0;
    if(st > elementOffset && bamscroll==true) {
    $('.skate').css({"opacity": "1"});
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 2s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
};


var rotate = function() {
    $("skate").delay(500).queue(function() {
          $(this).css({});
          $(this).dequeue();
   */