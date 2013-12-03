;( function( $, R ) {
	R.ready( function() {
		var $ncpSortFeatured = $('.ncp-sort.sort-featured'),
			$ncpSortTrend = $('.ncp-sort.sort-trend'),
			$ncp = $('.ncp')
			;

		$ncpSortFeatured.on('click', function(e) {
			e.preventDefault();
			$(this).toggleClass('active');
			$ncpSortTrend.removeClass('active');
			$ncp.removeClass('active');
		});
		$ncp.on('click', function(e) {
			e.preventDefault();
			$ncp.removeClass('active');
			$(this).toggleClass('active');
			
			if( $ncp.hasClass('active') ) {
				$ncpSortTrend.addClass('active');
			} else {
				$ncpSortTrend.removeClass('active');
			}
		});
	});
})(jQuery, Response);
