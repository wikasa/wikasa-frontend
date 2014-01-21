;( function( $, R ) {

    var $comheadLinkUser = $('.js.comhead-link-user'),
        $commonSidebarsTool = $('.js.common-sidebars-tool')
        ;

    $comheadLinkUser.on('click', function(e) {
        e.preventDefault();
        console.log('z');
        $commonSidebarsTool.toggleClass('is-shown');
    });

})(jQuery, Response);
