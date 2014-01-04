;( function( $, R ) {

	R.ready( function() {
		$( '.alert' ).on( 'click', function(e) {
			e.preventDefault();
			$(this).closest('.alerts').remove();
		});
	});

})(jQuery, Response);
