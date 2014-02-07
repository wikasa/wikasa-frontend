;( function( $, R ) {

    var $commonAlert = $('.js.common-alert')
    ;

    $commonAlert.on('click', function() {
        $(this).parent().remove();
    });

})(jQuery, Response);
