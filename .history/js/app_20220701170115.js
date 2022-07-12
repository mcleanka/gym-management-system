/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

/* $(document).ready(function () {

	$(".nav_ico").click(function () {
		$(".main_nav").toggleClass("active");
	});

	$(".main_nav").click(function () {
		$(this).removeClass("active");
	});

	$(".main_nav ul").click(function (event) {
		event.stopImmediatePropagation();
	});

}); */