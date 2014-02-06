;( function( $, R ) {

    var $commonSidebarsNav      = $('.js.common-sidebars-nav'),
        $commonSidebarsTimeline = $('.js.common-sidebars-timeline'),
        $comsideFloatButton     = $('.js.comside-float-button'),
        $comsideLinkToggle      = $('.js.comside-link.toggle')
        ;

    R.action(function() {
        if ( R.viewportW() < 959 ) {
            if( $commonSidebarsNav.hasClass('is-shown') || $commonSidebarsTimeline.hasClass('is-shown') ) {
                $commonSidebarsNav.removeClass('is-shown');
                $commonSidebarsTimeline.removeClass('is-shown');
            }
        }
    });

    $comsideFloatButton.on('click', function(e) {
        e.preventDefault();
        if( $('.js.common-sidebars-nav').length > 0 ) {
            $comsideFloatButton.toggleClass('is-shown');
            $commonSidebarsNav.toggleClass('is-shown');
        } else if( $('.js.common-sidebars-timeline').length > 0 ) {
            $comsideFloatButton.toggleClass('is-shown');
            $commonSidebarsTimeline.toggleClass('is-shown');
        }
    });

    $comsideLinkToggle.on('click', function(e) {
        e.preventDefault();
        if( $('.js.common-sidebars-nav').length > 0 ) {
            $comsideFloatButton.toggleClass('is-shown');
            $commonSidebarsNav.toggleClass('is-shown');
        } else if( $('.js.common-sidebars-timeline').length > 0 ) {
            $comsideFloatButton.toggleClass('is-shown');
            $commonSidebarsTimeline.toggleClass('is-shown');
        }
    });

})(jQuery, Response);
