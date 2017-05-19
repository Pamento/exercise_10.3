$(function(){

	var carouselList = $("#carousel ul");
	var slides = carouselList.find('li');
	var slideLoop = 1;
	var interval;

	var goLeft = $('#leftDirect');			// for the arrow left
	var goRight = $('#rightDirect');		// for the arrow right
	var lookEachSlide = $('#outSlider');

	function goMoveSlider() {
		interval = setInterval(function(){

			carouselList.animate({'margin-left': '-=400px'}, 700, moveSlide);
		},3000);

		function moveSlide(){
			slideLoop++;
			if (slideLoop === slides.length) {
				slideLoop = 1;
				carouselList.css('margin-left', 0);
			}
		}
	}

	function stopMoveSlider() {
		clearInterval(interval);
	}

	lookEachSlide.on('mouseenter', stopMoveSlider).on('mouseleave', goMoveSlider);
	goMoveSlider();

	goLeft.click(function() {
		carouselList.animate({'margin-left': '-=400px'}, 700, function(){
			slideLoop++;
			if (slideLoop === slides.length) {
				slideLoop = 1;
				carouselList.css('margin-left', 0);
			}
		});
	});

	goRight.click(function() {
		carouselList.animate({'margin-left': '+=400px'}, 700, function(){
			slideLoop--;
			if (slideLoop === 1) {
				slideLoop = 6;
				carouselList.css('margin-left', '-2000px');
			}
		});
	});


});







