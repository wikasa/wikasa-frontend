;( function( $, R ) {
	R.ready( function() {

		if($('.ncs').length < 1) {return false;}

		var $ncs = $('.ncs'),
			$ncsDds = $('.ncs-dds'),
			$nup = $('.nav-unm-pri'),
			$nupDds = $('.nup-dds')
		;

		$ncs.on('click', function(e) {
			e.preventDefault();
			$ncsDds.toggleClass('open');
		});
		$nup.on('click', function(e) {
			e.preventDefault();
			$nupDds.toggleClass('open');
			$nup.toggleClass('active');
		});
	});
})(jQuery, Response);
