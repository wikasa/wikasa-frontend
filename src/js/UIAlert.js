;( function( $, R ) {

    var $commonAlert = $('.js.common-alert')
        ;

    $commonAlert.on('click', function() {
        console.log($(this).attr('class'));
        $(this).remove();
    });

})(jQuery, Response);
