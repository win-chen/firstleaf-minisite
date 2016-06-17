$(document).ready(function(){
// VARIABLES
	var window_width  = 0;
	var promos = document.getElementById("home-content").children;
	var banner = document.getElementById("banner");
	
// GENERAL FUNCTIONS
function checkWindowWidth() {
	window_width = $(window).width();
	if($(window).width() < 1000) {
		for(var i = 0; i < promos.length; i++) {
			promos[i].removeAttribute("class");
			promos[i].setAttribute("class", "promo-small");
		}
		banner.removeAttribute("class");
		banner.setAttribute("class", "banner-small");
	}
	else {
		for(var i = 0; i < promos.length; i++) {
			promos[i].removeAttribute("class");
			promos[i].setAttribute("class", "promo-large");
		}
		banner.removeAttribute("class");
		banner.setAttribute("class", "banner-large");
	}
}
	
// EVENT LISTENERS
	checkWindowWidth();
	$(window).resize(checkWindowWidth);
});