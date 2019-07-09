var slider = document.querySelectorAll('.slider');
var next = document.querySelectorAll('.next');
var prev = document.querySelectorAll('.prev');

for (var n = 0; n < slider.length; n++) {
	createIconBlock(slider[n]);
}


next.forEach(function(elem) {
	elem.addEventListener('click', function() {
		var slides = elem.closest('.slider').querySelectorAll('.slide');
		var icons = elem.closest('.slider').querySelectorAll('.icon');

		for (var i = 0; i < slides.length; i++) {
			if (slides[i].classList.contains('active')) {
				var currentSlide = i;
			}
			slides[i].classList.remove('active');
			icons[i].classList.remove('icon-active');
		}

		if (currentSlide >= (slides.length - 1)) {
			currentSlide = 0;
			slides[currentSlide].classList.add('active');
			icons[currentSlide].classList.add('icon-active');
		} else {
			currentSlide++;
			slides[currentSlide].classList.add('active');
			icons[currentSlide].classList.add('icon-active');
		}
	});
});

prev.forEach(function(elem) {
	elem.addEventListener('click', function() {
		var slides = elem.closest('.slider').querySelectorAll('.slide');
		var icons = elem.closest('.slider').querySelectorAll('.icon');

		for (var i = 0; i < slides.length; i++) {
			if (slides[i].classList.contains('active')) {
				var currentSlide = i;
			}
			slides[i].classList.remove('active');
			icons[i].classList.remove('icon-active');
		}

		if(currentSlide <= 0) {
			currentSlide = slides.length - 1;
			slides[currentSlide].classList.add('active');
			icons[currentSlide].classList.add('icon-active');
		} else {
			currentSlide--;
			slides[currentSlide].classList.add('active');
			icons[currentSlide].classList.add('icon-active');
		}
	});
});

function createIconBlock(num) {
	var slides = num.querySelectorAll('.slide');

	for (let i = 0; i < slides.length; i++) {
		var iconImg = document.createElement('img');
		if (i === 0) {
			iconImg.classList.add('icon-active');
		}
		iconImg.classList.add('icon')
		iconImg.src = slides[i].src;
		iconImg.style.width = (parseInt(slides[0].width) / slides.length) + 'px';
		iconImg.style.height = (parseInt(slides[0].height) / slides.length) + 'px';

		document.querySelectorAll('.icon-block')[n].appendChild(iconImg);
	}
};