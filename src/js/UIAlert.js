;( function( $, R ) {

    var $commonAlert = $('.js.common-alert')
        // alertTimeoutID
        ;

    // function removeAlertHandler() {
    //     alertTimeoutID = window.setTimeout(removeAlert, 3000);
    // }

    // function removeAlert() {
    //     console.log("xxx");
    //     $commonAlert.parent().remove();
    // }

    // function clearAlertTimeout() {
    //     window.clearTimeout(alertTimeoutID);
    // }

    $commonAlert.on('click', function() {
        $(this).parent().remove();
        // clearAlertTimeout();
    });

})(jQuery, Response);
