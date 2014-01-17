;( function( $, R ) {

    var $comsideNav = $('.js-comside-nav'),
        $comsideNavToggle = $('.js-comside-nav-toggle')
        ;

    $comsideNavToggle.on('click', function(e) {
        e.preventDefault();
        $comsideNav.toggleClass('close');
    });

})(jQuery, Response);
