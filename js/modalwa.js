/*!
 * modalwa 0.1
 * http://lab.hakim.se/modalwa
 * MIT licensed
 *
 * Copyright (C) 2012 Hakim El Hattab, http://hakim.se
 */

function openDialog() {  
	
	$('#default-popup').css({
		'height': 500
	});
	window.scrollBy(0, 1);
	
    modalwa.show( "#default-popup" );
    
}

function closeDialog() {
	modalwa.hide();
	
}

var modalwa = (function(){

	var container = document.documentElement,
		popup = document.querySelector( '.modalwa-popup-animate' ),
		cover = document.querySelector( '.modalwa-cover' ),
		currentState = null;

	container.className = container.className.replace( /\s+$/gi, '' ) + ' modalwa-ready';

	// Deactivate on ESC
	function onDocumentKeyUp( event ) {
		if( event.keyCode === 27 ) {
			deactivate();
		}
	}

	// Deactivate on click outside
	function onDocumentClick( event ) {
		if( event.target === cover ) {
			deactivate();
		}
	}

	function activate( state ) {
		document.addEventListener( 'keyup', onDocumentKeyUp, false );
		document.addEventListener( 'click', onDocumentClick, false );
		document.addEventListener( 'touchstart', onDocumentClick, false );

		removeClass( popup, currentState );
		addClass( popup, 'no-transition' );
		addClass( popup, state );

		setTimeout( function() {
			removeClass( popup, 'no-transition' );
			addClass( container, 'modalwa-active' );
		}, 0 );

		currentState = state;
	}

	function deactivate() {
		$('.modalwa-popup').css({
			        'border-color': '#00838F'
				});
		var flagwa = [0,0,0,0];
		if($('#modaltext1').val() == ''){
			flagwa[0]=1;
			flagwa[1]=1;      		
   		}
   		if($('#modaltext2').val() == ''){
   			flagwa[0]=1;
			flagwa[2]=1;      		
   		}
   		if($('#modaltext3').val() == ''){
   			flagwa[0]=1;
			flagwa[3]=1;      		
   		}
		document.removeEventListener( 'keyup', onDocumentKeyUp, false );
		document.removeEventListener( 'click', onDocumentClick, false );
		document.removeEventListener( 'touchstart', onDocumentClick, false );
		if(flagwa[1]==1){
			$('#modalline1').css({
		        'stroke': '#000'
			});
			$('#modaltext1').css({
		        'border-color' : '#000'
			});	
		}
		if(flagwa[2]==1){
			$('#modalline2').css({
		        'stroke': '#000'
			});
			$('#modaltext2').css({
		        'border-color' : '#000'
			});
		}
		if(flagwa[3]==1){	
			$('#modalline3').css({
		        'stroke': '#000'
			});
			$('#modaltext3').css({
		        'border-color' : '#000'
			});				
		}
		$('#default-popup').addClass('magictime vanishOut');
		$('#default-popup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		  $('#default-popup').removeClass('magictime vanishOut');
			});
		setTimeout(function(){
			removeClass( container, 'modalwa-active' );
			removeClass( popup, 'modalwa-popup-animate');
			$('#default-popup').css({
				'height': 0
			});



		}, 1000);

		
		
	}

	function disableBlur() {
		addClass( document.documentElement, 'no-blur' );
	}

	function addClass( element, name ) {
		element.className = element.className.replace( /\s+$/gi, '' ) + ' ' + name;
	}

	function removeClass( element, name ) {
		element.className = element.className.replace( name, '' );
	}

	function show(selector){
		popup = document.querySelector( selector );
		addClass(popup, 'magictime boingInUp');
		$('#default-popup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		  $('#default-popup').removeClass('magictime boingInUp');
			});
		addClass(popup, 'modalwa-popup-animate');
		
		activate();

		return this;
	}
	function hide() {
		var flagwa = [0,0,0,0];
		if($('#modaltext1').val() == ''){
			flagwa[0]=1;
			flagwa[1]=1;      		
   		}
   		if($('#modaltext2').val() == ''){
   			flagwa[0]=1;
			flagwa[2]=1;      		
   		}
   		if($('#modaltext3').val() == ''){
   			flagwa[0]=1;
			flagwa[3]=1;      		
   		}

   		if(flagwa[0]==0){
   			$('.modalwa-popup').css({
			        'border-color': '#76FF03'
				});
   			addClass(popup, 'magictime spaceOutRight');
			$('#default-popup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			  $('#default-popup').removeClass('magictime spaceOutRight');
				});
			setTimeout(function(){
				removeClass( container, 'modalwa-active' );
				removeClass( popup, 'modalwa-popup-animate');
				$('#default-popup').css({
					'height': 0
				});
			}, 1490);
   		}
   		else{
   			$('.modalwa-popup').css({
			        'border-color': '#ff6666'
				});
   			$('#default-popup').addClass('animated jello');
			$('#default-popup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			  $('#default-popup').removeClass('animated jello');
				});
			if(flagwa[1]==1){
				$('#modalinput1').addClass('animated shake');
				$('#modalinput1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			  		$('#modalinput1').removeClass('animated shake');
				});
				$('#modalline1').css({
			        'stroke': '#ff6666'
				});
				$('#modaltext1').css({
		        'border-color' : '#ff6666'
				});	
			}
			if(flagwa[2]==1){
				$('#modalinput2').addClass('animated shake');
				$('#modalinput2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			  		$('#modalinput2').removeClass('animated shake');
				});
				$('#modalline2').css({
			        'stroke': '#ff6666'
				});
				$('#modaltext2').css({
		        'border-color' : '#ff6666'
				});
			}
			if(flagwa[3]==1){
				$('#modalinput3').addClass('animated shake');
				$('#modalinput3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			  		$('#modalinput3').removeClass('animated shake');
				});
				$('#modalline3').css({
			        'stroke': '#ff6666'
				});
				$('#modaltext3').css({
		        'border-color' : '#ff6666'
				});				
			}
   		}
		
	}

	return {
		activate: activate,
		deactivate: deactivate,
		disableBlur: disableBlur,
		show: show,
		hide: hide
	}

})();