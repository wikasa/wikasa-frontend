;( function( $, R ) {
    var $comsideTool = $('.js-comside-tool'),
        $comsideToolToggle = $('.js-comside-tool-toggle')
        ;

    $comsideToolToggle.on('click', function(e) {
        console.log($comsideToolToggle);
        e.preventDefault();
        $comsideTool.toggleClass('close');
    });

})(jQuery, Response);
