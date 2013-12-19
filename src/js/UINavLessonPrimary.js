;( function( $, R ) {
	R.ready( function() {
		var $navLesPri = $('.nav-les-pri'),
			$subnavLesPris = $('.subnav-les-pri')
			;

		$navLesPri.each( function() {
			
			var $el = $(this);

			$el.on('click', function(e) {
				e.preventDefault();
				var _el = $el.closest('li').find('.subnav-les-pris');
				_el.toggleClass('close');
			});

		} );
	});
})(jQuery, Response);
