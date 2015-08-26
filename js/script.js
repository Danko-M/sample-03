$(function() {
  function resizeBg() {
    if ($(window).width() >= 1200) {
      $(".landing").backstretch("img/zoom-29719860-3.jpg", {
        centeredX: true
      }).show();
    }
  }

  $(window).on("resize", resizeBg);
  resizeBg();
});
