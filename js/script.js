$(function() {
	var trueWidth = window.innerWidth;
  function resizeBg() {
    if (trueWidth >= 1200) {
      $(".landing").backstretch("img/hero.jpg");
    }
  }  
  resizeBg();

  $(".c01").backstretch("img/city01.jpg");
  $(".c02").backstretch("img/city03.jpg");
});
