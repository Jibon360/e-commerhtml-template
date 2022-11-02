$(function (param) {
  // color switcher show 
  $('.switcher-icon').on('click', function (param) {
    $('.switcher').toggleClass('switchshow');

  })
  // color switcher color box 
  $('.btnbox').each(function (param) {
    $(this).on('click', function (param) {
      let colors = $(this).attr('data-color');
      document.documentElement.style.setProperty('--green', colors);
    })
  })
  // custom cursor 
  new kursor({
    type: 1
  })
  // scroll to top
  $(window).on('scroll', function (param) {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $('.scrolltotop').show();
    }
    else {
      $('.scrolltotop').hide();

    }
  })




  $('.imgZoom').mooZoom({

    // <a href="https://www.jqueryscript.net/tags.php?/Magnifying Glass/">Magnifying Glass</a> options
    zoom: {
      width: 100,
      height: 100,
      zIndex: 600,
    },
  
    // Overlay options
    overlay: {
      opacity: 0.65,
      zIndex: 500,
      backgroundColor: '#ffffff',
      fade: false,
    },
  
    // Options for the magnified image
    detail: {
      opacity: 1,
      zIndex: 600,
      margin: {
        top: 0,
        left: 0,
      },                    
      fade: false,
    },
  
    // duration of animation in ms
    animationDuration: 1000,
  
  });

})