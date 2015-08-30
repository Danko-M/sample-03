$(function() {
	// full size width backgrounds
  $(".landing").backstretch("img/hero.jpg");
  $(".c01").backstretch("img/city01.jpg");
  $(".c02").backstretch("img/city03.jpg");

  		var config = { 
  			reset:  true
  		};
 	if(window.innerWidth >= 992) {
  	window.sr = new scrollReveal(config);
	}
});
