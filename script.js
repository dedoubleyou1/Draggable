// This function allows you to create draggable objects by passing in jQuery objects
var makeDraggable = function( $dragObjects ) {

	// Adds a mousedown event listener to all passed objects
	$dragObjects.mousedown( function(){
		if (event.which === 1) {
			event.preventDefault();    // Stops the Chrome text-select cursor from activating
			var $thisDragging = $( this );
			var xOffset = event.pageX - $thisDragging.offset().left;
			var yOffset = event.pageY - $thisDragging.offset().top;
			$thisDragging.addClass( 'dragging' );
			
			// Adds a mousemove listener to the document that keeps the dragging object aligned
			$( window ).on( 'mousemove.myDrag', function(){
				if ( event.pageX - xOffset > 0 ) {
					if ( event.pageX - xOffset + $thisDragging.width() < $(window).width() ){
						$thisDragging.css( 'left', ( event.pageX - xOffset ));
					} else {
						$thisDragging.css( 'left', $(window).width() - $thisDragging.width() );
					}
				} else {
					$thisDragging.css( 'left', 0 );
				}
				if ( event.pageY - yOffset > 0 ) {
					if ( event.pageY - yOffset + $thisDragging.height() < $(window).height() ){
						$thisDragging.css( 'top', ( event.pageY - yOffset ));
					} else {
						$thisDragging.css( 'top', $(window).height() - $thisDragging.height() );
					}
				} else {
					$thisDragging.css( 'top', 0);
				}
			});
			
			// Adds a mouseup event listener to dragging object
			$( window ).on( 'mouseup.myDrag', function(){
				$thisDragging.removeClass( 'dragging' );
				$( window ).off( 'mousemove.myDrag' );
				$( window ).off( 'mouseup.myDrag' );
			});
		}
	});
};

// Makes all .draggable objects draggable®
makeDraggable( $( '.draggable' ));