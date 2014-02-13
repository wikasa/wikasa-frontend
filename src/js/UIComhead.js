;( function( $, R ) {
    var $comheadTrigger = $('.js.comhead-link-trigger'),
        $comheadLink    = $('.js.comhead-link-basic')
        isCollapsible   = false;
    ;

    // R.action( function() {
        isCollapsible = (R.viewportW() < 800) ? true : false

        if ( !isCollapsible ) {
            $comheadLink.each(function() { $(this).removeClass('is-shown'); });
        }

        $comheadTrigger.on('click', function() {
            isCollapsible = (R.viewportW() < 800) ? true : false
            if ( isCollapsible ) {
                console.log($comheadLink.length);
                $comheadLink.each(function() { $(this).toggleClass('is-shown'); });
            }
        });
    // });

})(jQuery, Response);
