/* optional JS using jQuery */

/* fixed navbar on scroll */
var stickyNavTop;
console.log("loaded");
$( document ).ready(function() {
          console.log("------ready");
  stickyNavTop = $("#navbar").offset().top;
  $(window).on("scroll", function () {
    console.log("------");
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > stickyNavTop) {
    $("#navbar").addClass("fixed");
  } else {
    $("#navbar").removeClass("fixed");
  }
});

/* smooth scroll anchor */
$('a[href*="#"]:not([href="#"])').on("click", function (e) {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");        
    var position = target.offset().top;
    if ( $("#navbar").hasClass("fixed")){
      position = position - $('#navbar').height();
    }
    $("html, body").animate(
      {
        scrollTop: position
      },
      225
    );
    return false;
  }
});
});



