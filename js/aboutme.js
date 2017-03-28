(function() {
	var support = { animations : Modernizr.cssanimations },
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		component = document.getElementById( 'component' ),
		items = component.querySelector( 'ul.itemwrap' ).children,
		current = 0,
		itemsCount = items.length,
		nav = component.querySelector( 'nav' ),
		nav1 = document.getElementById( 'rest1' ),
		nav2 = document.getElementById( 'rest2' ),
		nav3 = document.getElementById( 'rest3' ),
		nav4 = document.getElementById( 'rest4' ),
		nav5 = document.getElementById( 'rest5' ),
		nav6 = document.getElementById( 'rest6' ),
		nav7 = document.getElementById( 'rest7' ),
		nav8 = document.getElementById( 'rest8' ),
		nav9 = document.getElementById( 'rest9' ),
		nav10 = document.getElementById( 'rest10' ),
		nav11 = document.getElementById( 'rest11' ),
		nav12 = document.getElementById( 'rest12' ),
		nav13 = document.getElementById( 'rest13' ),
		nav14 = document.getElementById( 'rest14' ),
		nav15 = document.getElementById( 'rest15' ),
		nav16 = document.getElementById( 'rest16' ),
		nav17 = document.getElementById( 'rest17' ),
		nav18 = document.getElementById( 'rest18' ),
		nav19 = document.getElementById( 'rest19' ),
		nav20 = document.getElementById( 'rest20' ),


		isAnimating = false;

	function init() {
		
		nav1.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 0,this ); } );
		nav2.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 1,this ); } );
		nav3.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 2 ); } );
		nav4.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 3 ); } );
		nav5.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 4 ); } );
		nav6.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 5 ); } );
		nav7.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 6 ); } );
		nav8.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 7 ); } );
		nav9.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 8 ); } );
		nav10.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 9 ); } );
		nav11.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 10 ); } );
		nav12.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 11 ); } );
		nav13.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 12 ); } );
		nav14.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 13 ); } );
		nav15.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 14 ); } );
		nav16.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 15 ); } );
		nav17.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 16 ); } );
		nav18.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 17 ); } );
		nav19.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 18 ); } );
		nav20.addEventListener( 'mouseover', function( ev ) { ev.preventDefault(); navigate( 19 ); } );
		component.className = component.className.replace(/\bfx.*?\b/g, '');	
		classie.addClass( component, 'fxSlideForward');
			
		
	}



	function navigate( input ) {
		
		isAnimating = true;
		var cntAnims = 0;
		var previous = current
		var currentItem = items[ current ];


		if( input > current ) {
			var dir = 'next';
			current = input;
		}
		else if( input < current ) {
			var dir = 'prev';
			current = input;
		}
		
		var nextItem = items[ current ];

		var onEndAnimationCurrentItem = function(i) {
			
			query = document.getElementById(previous+1);
			i.removeEventListener( animEndEventName, onEndAnimationCurrentItem );
			
			classie.removeClass( i, 'current' );
			classie.removeClass( i, dir === 'next' ? 'navOutNext' : 'navOutPrev' );
			++cntAnims;
			if( cntAnims === 2 ) {
				isAnimating = false;
			}
		}

		var onEndAnimationNextItem = function(i) {
			query = document.getElementById(current+1);
			i.removeEventListener( animEndEventName, onEndAnimationNextItem );
			classie.addClass( i,'current' );
			classie.removeClass( i, dir === 'next' ? 'navInNext' : 'navInPrev' );
			++cntAnims;
			if( cntAnims === 2 ) {
				isAnimating = false;
			}
		}

		
			

			currentItem.addEventListener( animEndEventName, function() {
				
				onEndAnimationCurrentItem(currentItem) });
			nextItem.addEventListener( animEndEventName, function() {

			 onEndAnimationNextItem(nextItem) });
		

		classie.addClass( currentItem, dir === 'next' ? 'navOutNext' : 'navOutPrev' );
		classie.addClass( nextItem, dir === 'next' ? 'navInNext' : 'navInPrev' );
		
	}

	init();
})();