$(document).ready(function(){
	$(".hidden-list").hide();

	$(".dropdown-list").click(function(){
		$(this).siblings('ul').toggle("slow");
		$(this).siblings("img").toggle();
	});

});

function setActiveStyleSheet(title) {
	var i, a;

	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
			a.disabled = true;
			if(a.getAttribute("title") == title){
				a.disabled = false;
			}
		}
	}
}