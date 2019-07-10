var slider = document.querySelectorAll('.slider');
var next = document.querySelectorAll('.next');
var prev = document.querySelectorAll('.prev');
var iconBlocks = document.querySelectorAll('.icon-block'); 

for (var n = 0; n < slider.length; n++) {
	createIconBlock(slider[n]);

	slider[n].addEventListener('click', function(e) {
		var el = e.target;
		var parentSlider = el.closest('.slider');
		var icons = parentSlider.querySelectorAll('.icon');
		var slides = parentSlider.querySelectorAll('.slide');
		var activeSlide = parentSlider.querySelector('.active');
		var currentSlide;

		if (el.classList.contains('next')) {
			
			for (var i = 0; i < slides.length; i++) {
				if (slides[i].classList.contains('active')) {
					currentSlide = i;
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
		}
		if (el.classList.contains('prev')) {
			
			for (var i = 0; i < slides.length; i++) {
				if (slides[i].classList.contains('active')) {
					currentSlide = i;
				}
				slides[i].classList.remove('active');
				icons[i].classList.remove('icon-active');
			}
	
			if (currentSlide <= 0) {
				currentSlide = slides.length - 1;
				slides[currentSlide].classList.add('active');
				icons[currentSlide].classList.add('icon-active');
			} else {
				currentSlide--;
				slides[currentSlide].classList.add('active');
				icons[currentSlide].classList.add('icon-active');
			}
		}
		if (el.classList.contains('full')) {
			parentSlider.classList.toggle('slider-full');
			parentSlider.querySelector('.slides').classList.toggle('slides-height');
			
			if (parentSlider.querySelector('.slider-full')) {
				icons.forEach( icon => {
					icon.style.width = (document.documentElement.clientWidth / slides.length) + 'px';
					icon.style.height = (document.documentElement.clientHeight / slides.length) + 'px';
				})
			} else {
				icons.forEach( icon => {
					icon.style.width = (parseInt(activeSlide.width) / slides.length) + 'px';
					icon.style.height = (parseInt(activeSlide.height) / slides.length) + 'px';;
				})
			}
		}
		if (el.classList.contains('icon')) {
			var order = el.getAttribute('data-order');

			icons.forEach( item => item.classList.remove('icon-active'));
			el.classList.add('icon-active');
			
			slides.forEach( item => item.classList.remove('active'));
			slides[order].classList.add('active');
		}
	})
}


function createIconBlock(num) {
	var slides = num.querySelectorAll('.slide');

	for (let i = 0; i < slides.length; i++) {
		var iconImg = document.createElement('img');
		if (i === 0) {
			iconImg.classList.add('icon-active');
		}
		iconImg.classList.add('icon');
		iconImg.setAttribute('data-order', i);

		iconImg.src = slides[i].src;
		iconImg.style.width = (parseInt(slides[0].width) / slides.length) + 'px';
		iconImg.style.height = (parseInt(slides[0].height) / slides.length) + 'px';

		document.querySelectorAll('.icon-block')[n].appendChild(iconImg);
	}
};