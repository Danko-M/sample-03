$(function() {
	// full size width backgrounds
  $(".hero").backstretch("img/hero.jpg");
  $(".c01").backstretch("img/city01.jpg");
  $(".c02").backstretch("img/city03.jpg");

  var config = {};
  
 	if(window.innerWidth >= 992) {
  	window.sr = new scrollReveal(config);
	}
});
