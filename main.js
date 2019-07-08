var next = document.querySelectorAll('.next');
var prev = document.querySelectorAll('.prev');

next.forEach(function(elem) {
	elem.addEventListener('click', function() {
		var slides = elem.closest('.wrapper').querySelectorAll('img');

		for (var i = 0; i < slides.length; i++) {
			if (slides[i].classList.contains('active')) {
				var currentSlide = i;
			}
			slides[i].classList.remove('active');
		}

		if (currentSlide >= (slides.length - 1)) {
			currentSlide = 0;
			slides[currentSlide].classList.add('active');
		} else {
			currentSlide++;
			slides[currentSlide].classList.add('active');
		}
	});
});

prev.forEach(function(elem) {
	elem.addEventListener('click', function() {
		var slides = elem.closest('.wrapper').querySelectorAll('img');

		for (var i = 0; i < slides.length; i++) {
			if (slides[i].classList.contains('active')) {
				var currentSlide = i;
			}
			slides[i].classList.remove('active');
		}

		if(currentSlide <= 0) {
			currentSlide = slides.length - 1;
			slides[currentSlide].classList.add('active');
		} else {
			currentSlide--;
			slides[currentSlide].classList.add('active');
		}
	});
});