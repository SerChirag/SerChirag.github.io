
// Smooth Scroll on clicking nav items
$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});




// back to top
$('#toTop a').click(function () {
  $('body').animate({
    scrollTop: 0
  }, 1000);
  return false;
});

window.onload = function(){
  $('#preloader').addClass('animated fadeOut');
  $('body').css({'overflow': 'scroll'});
  $('body').css({'background-color': '#fff'});
  $('#main_page').css({'visibility': 'visible'});
  $('#new_header').css({'visibility': 'visible'});
  $('#footie').css({'visibility': 'visible'});  
  $('#main_page').addClass('animated fadeIn');
  setTimeout(function(){
    $('#preloader').css({'display': 'hidden'});
    $('#main_page').removeClass('animated fadeIn');
    $('#preloader').remove();
  },1000);
};

$(document).ready(function(){
  setTimeout(function(){

  },2000);
  setTimeout(function(){
    $("#babe").focus(function(){
      setTimeout(function(){
      $('#linknav4').addClass('animated zoomOut');
        setTimeout(function(){
          $('#linknav4').removeClass('animated zoomOut');
          $('#linknav4').css({'display': 'none'});
        },700);
      },0);
      setTimeout(function(){
        $('#linknav3').addClass('animated zoomOut');
        setTimeout(function(){
          $('#linknav3').removeClass('animated zoomOut');
          $('#linknav3').css({'display': 'none'});
        },550);
      },150);
      setTimeout(function(){
        $('#linknav2').addClass('animated zoomOut');
        setTimeout(function(){
          $('#linknav2').removeClass('animated zoomOut');
          $('#linknav2').css({'display': 'none'});
        },400);
      },300);
      setTimeout(function(){
        $('#linknav1').addClass('animated zoomOut');
        setTimeout(function(){
          $('#linknav1').removeClass('animated zoomOut');
          $('#linknav1').css({'display': 'none'});
        },100);
      },600);
      var inputlength = $(window).width()/3;
      var inputmargin = $(window).width()/4;



  });

    $("#babe").blur(function(){
     /*$('#babe').css({'width': '10px'});
      $('#inputsearch').css({'margin-right': '20px'});*/
      setTimeout(function(){
      $('.linknav').css({'visibility': 'hidden'});
      $('.linknav').css({'display': 'inline'});
      setTimeout(function(){
      $('#linknav1').css({'visibility': 'visible'});
      $('#linknav1').addClass('animated zoomIn');
        setTimeout(function(){
          $('#linknav1').removeClass('animated zoomIn');
        },700);
      },0);
      setTimeout(function(){
        $('#linknav2').css({'visibility': 'visible'});
        $('#linknav2').addClass('animated zoomIn');
        setTimeout(function(){
          $('#linknav2').removeClass('animated zoomIn');
        },550);
      },150);
      setTimeout(function(){
        $('#linknav3').css({'visibility': 'visible'});
        $('#linknav3').addClass('animated zoomIn');
        setTimeout(function(){
          $('#linknav3').removeClass('animated zoomIn');
          
        },400);
      },300);
      setTimeout(function(){
        $('#linknav4').css({'visibility': 'visible'});
        $('#linknav4').addClass('animated zoomIn');
        setTimeout(function(){
          $('#linknav4').removeClass('animated zoomIn');
          
        },100);
      },600); 

    },1000);

    });
  });
});


