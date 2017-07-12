
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
  alert("Chirag")
};

$(document).ready(function(){

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

      
      //window.getComputedStyle(document.querySelector('#inputsearch input[type=search]:focus')).setAttribute('margin-right',inputlength);
      /*
      setTimeout(function(){
        $('#inputsearch').css({'width': inputlength+30});
        $('#babe').css({'width': inputlength});
        $('#inputsearch').css({'margin-right': inputmargin});
        $('#inputsearch').css({'padding-left': '30px'});
        $('#inputsearch').css({'background': 'transparent url("images/search2.png") no-repeat 0px center'});
        $('#inputsearch').css({'background-size': '20px 20px'});
      },710);*/
      

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

$(document).scroll(function () {

  var offsetHeight = document.getElementById('slidercont').offsetHeight + 100;
  
  // parallaxing
  var $movebg = $(window).scrollTop() * -0.3;
  $('.portion').css('background-positionY', ($movebg) + 'px');

  // add class active to nav a on scroll
  var scrollPos = $(document).scrollTop() + 100;
  var heightwa = $(document).height();
  $('.modalwa-popup').css({'bottom': (heightwa-scrollPos-690)});

  var scrollPosA = $('.component').scrollTop() ;
  var heightwaA = $('.component').height();
  console.log(scrollPosA);
 
  $('.itemwrap').css({'top': (scrollPosA)});
  console.log(scrollPos);

  
  // changing padding of nav a on scroll
    if (scrollPos > offsetHeight-75) {
      /*if (scrollPos < offsetHeight){
      	$('#head2').css({
	        'height': 25
	      });

      }*/

      
      /*$('#head').css({
        'height': 43
      });*/
      $('.linknav').addClass('small');
      //move
      $('#navimg').css({'top': '-60px'});
      //movetext
      $('#navtext').css({'top': '10px'});
      $('#bossnav').removeClass('small');

    } 

    else {

      /*$('#head2').css({
        'height': offsetHeight-scrollPos
      });*/
      $('.linknav').removeClass('small');
      //move
      $('#navimg').css({'top': '13px'});
      //movetext
      $('#navtext').css({'top': '-30px'});
    }
  
});
/*
$(window).on("scroll", function() {
    if($(window).scrollTop() > 250) {
        $("#head").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#head").removeClass("active");
    }
})*/
function EasyPeasyParallax() {
	var offsetHeight = document.getElementById('slidercont').offsetHeight ;
    var scrollPos = $(document).scrollTop();
    var targetOpacity;
    if(scrollPos>offsetHeight)
    {
      targetOpacity = 1;
      $('#head').addClass('black');
    }
    else
    {
      $('#head').removeClass('black');
      targetOpacity = scrollPos/(offsetHeight);
    }
    if(scrollPos>offsetHeight-43)
    {
      $('#head').addClass('black');
    }
    else
    {
      $('#head').removeClass('black');
    }

    $('#slidercont').css({
        'opacity': 1-targetOpacity 
    });
    /*$('#p1').css({
        'background-color': 'rgba(0, 0, 0, '+ targetOpacity +')'
    });*/
};

$(function(){
    $(window).scroll(function() {
        EasyPeasyParallax();
    });
});