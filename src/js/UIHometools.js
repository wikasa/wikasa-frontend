;( function( $, R ) {
	R.ready( function() {
		var $htTabs = $('.ht-tabs'),
			$htTab = $('.ht-tab')
			;

		$htTab.on('click', function(e) {
			e.preventDefault();
			$htTab.removeClass('active');
			$(this).toggleClass('active');
		});

		var $htSort = $('.ht-sort'),
			$htSortDds = $('.ht-sort-dds')
			;

		$htSort.on('click', function(e) {
			e.preventDefault();
			$(this).find('.ht-sort-dds').toggleClass('open');
		});
	});
})(jQuery, Response);
