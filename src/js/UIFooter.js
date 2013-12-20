;( function( $, R ) {

  var footerHeight = 0,
  footerTop = 0,
  $footer = $(".footers");

  function positionFooter() {

    footerHeight = $footer.height();
    footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";

    if ( ($(document.body).height()+footerHeight) < $(window).height()) {
      $footer.css({
        position: "absolute"
      }).animate({
        top: footerTop
      });
    } else {
      $footer.css({
        position: "static"
      });
    }

  }

  R.ready( function() {
    positionFooter();

    $(window)
      .scroll(positionFooter)
      .resize(positionFooter);
  });

})(jQuery, Response);
