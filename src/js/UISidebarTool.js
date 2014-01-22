;( function( $, R ) {

    var $comheadLinkUser = $('.js.comhead-link-user'),
        $commonSidebarsTool = $('.js.common-sidebars-tool')
        ;

    $comheadLinkUser.on('click', function(e) {
        e.preventDefault();
        $commonSidebarsTool.toggleClass('is-shown');
    });

})(jQuery, Response);
