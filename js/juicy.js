(function() {
							
				
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					console.log(ev.target.parentNode);
					classie.add( ev.target.parentNode, 'input--filled' );
					if(String(document.getElementById('modalinput3').className) == 'input input--jaime input--filled'){
						$('#modallabel3').css({
					        'color': '#76FF03'
					    });
					    $('#modalline3').css({
					        'stroke': '#76FF03'
					    });	
					}
					
					if(String(document.getElementById('modalinput2').className) == 'input input--jaime input--filled'){
						$('#modallabel2').css({
					        'color': '#76FF03'
					    });
					    $('#modalline2').css({
					        'stroke': '#76FF03'
					    });
					}

					if(String(document.getElementById('modalinput1').className) == 'input input--jaime input--filled'){
						$('#modallabel1').css({
					        'color': '#76FF03'
					    });
					    $('#modalline1').css({
					        'stroke': '#76FF03'
					    });	
					}
					
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
					if(String(document.getElementById('modalinput3').className) == 'input input--jaime'){
						$('#modallabel3').css({
					        'color': '#000'
					    });

					    $('#modalline3').css({
					        'stroke': '#000'
					    });

					    $('#modaltext3').css({
		        			'border-color' : '#000'
						});		
					}
					
					if(String(document.getElementById('modalinput2').className) == 'input input--jaime'){
						$('#modallabel2').css({
					        'color': '#000'
					    });

					    $('#modalline2').css({
					        'stroke': '#000'
					    });

					    $('#modaltext2').css({
		        			'border-color' : '#000'
						});
					}

					if(String(document.getElementById('modalinput1').className) == 'input input--jaime'){
						$('#modallabel1').css({
					        'color': '#000'
					    });

					    $('#modaltext1').css({
		        			'border-color' : '#000'
						});

					    $('#modalline1').css({
					        'stroke': '#000'
					    });	
					}
				}
			})();