;( function( $, R ) {
    var $comsideTool = $('.js-comside-tool'),
        $comsideToolToggle = $('.js-comside-tool-toggle')
        ;

    $comsideToolToggle.on('click', function(e) {
        e.preventDefault();
        $comsideTool.toggleClass('close');
    });

})(jQuery, Response);
