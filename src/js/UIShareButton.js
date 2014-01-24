;( function( $, R ) {

    var $comshareBtn      = $('.js.comshare-btn')
        ;

    $comshareBtn.each(function() {
        $(this).on('click', function(e) {
            $(this).toggleClass('open');
        });
        $(this).on('mouseout', function(e) {
            $comshareBtn.removeClass('open');
        });
    });

})(jQuery, Response);
