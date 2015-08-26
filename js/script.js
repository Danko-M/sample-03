$(function() {
	var trueWidth = window.innerWidth;
  function resizeBg() {
    if (trueWidth >= 1200) {
      $(".landing").backstretch("img/zoom-29719860-3.jpg", {
        centeredX: true,
        fade : "normal"
      });
    }
  }

  $(window).on("resize", resizeBg);
  resizeBg();
  $(".c01").backstretch("img/city01b.jpg");
  $(".c02").backstretch("img/city03b.jpg");
});
