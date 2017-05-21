$(function(){

	var carouselList = $("#carousel ul");
	var interval;
	var lookEachSlide = $("#outSlider");

	function goMoveSlider() {
		interval = setInterval(function(){
			carouselList.animate({"marginLeft": -400}, 700, moveSlide);
		},3000);
		function moveSlide(){
			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last");
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		}
	}
	function stopMoveSlider() {
		clearInterval(interval);
	}
	lookEachSlide.on("mouseenter", stopMoveSlider).on("mouseleave", goMoveSlider);
	goMoveSlider();
});

// buttons controls slides

$("#leftDirect").click(function(event) {
	event.preventDefault();
	var carouselList = $("#carousel ul");
	carouselList.animate({"marginLeft": -400}, 700, function(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	});
});

$("#rightDirect").click(function(event) {
	event.preventDefault();
	var carouselList = $("#carousel ul");
	var lastItem = carouselList.find("li:last");
	var firstItem = carouselList.find("li:first");
	firstItem.before(lastItem);

	carouselList.css({marginLeft:-400});
	carouselList.animate({"marginLeft": 0}, 700);
});





