;( function( $, R ) {

    var $tabTrigger = $('.js.comtab-dd-trigger'),
        $tabDD = $('.js.comtab-dropdowns')
    ;

    $tabTrigger.on('click', function() {
        $tabDD.toggleClass('is-shown');
        $(this).toggleClass('is-active');
    });

})(jQuery, Response);
