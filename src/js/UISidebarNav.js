;( function( $, R ) {

    var $commonSidebarsNav = $('.js.common-sidebars-nav'),
        $comsideFloatButton = $('.js.comside-float-button'),
        $comsideLinkToggle = $('.js.comside-link.toggle')
        ;

    $comsideFloatButton.on('click', function(e) {
        e.preventDefault();
        $comsideFloatButton.toggleClass('is-shown');
        $commonSidebarsNav.toggleClass('is-shown');
        console.log("x");
    });

    $comsideLinkToggle.on('click', function(e) {
        e.preventDefault();
        $comsideFloatButton.toggleClass('is-shown');
        $commonSidebarsNav.toggleClass('is-shown');
        console.log("y");
    });

})(jQuery, Response);
