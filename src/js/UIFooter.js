$(window).bind("load", function() {

  var footerHeight = 0,
  footerTop = 0,
  $footer = $(".footer");

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

  positionFooter();

  $(window)
  .scroll(positionFooter)
  .resize(positionFooter);

});
