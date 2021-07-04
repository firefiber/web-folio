const trackContainer = document.querySelector('.work__slider__trackContainer');
const sliderStack = Array.from(document.querySelectorAll('.work__slider__trackContainer'));
const nextButton = document.querySelector('.work__slider__btn.right');
const prevButton = document.querySelector('.work__slider__btn.left');

const sliderLinks = Array.from(document.querySelector('#work__links ul').children);
let activeLink = 0;

//set Animation as default 'active' link
sliderLinks[0].classList.add('active');
sliderStack[0].classList.add('active');

// set event listener to each li element
sliderLinks.forEach((link, index) => {
	link.addEventListener('click', updateActiveLink);
	
})

// function to update 'active' class from links
function updateActiveLink() {
	if (this==activeLink){
		return;
	}
	// loops over all li elements
	sliderLinks.forEach((link, index) => {
		// removes 'active' from each
		link.classList.remove('active');
		sliderStack[index].classList.remove('active');
	});
	// adds 'active' to clicked item
	this.classList.add('active');
	sliderStack[sliderLinks.indexOf(this)].classList.add('active');
	// stores clicked item
	activeLink = this;
	moveSlides();
}

//set animation slider deck as active

//hide all other decks
//find selected link, mark that 'active'
//display matching slider deck
//hide previous deck
function moveSlides() {
	const track = document.querySelector('.work__slider__trackContainer.active .work__slider__track');
	const slides = Array.from(track.children);

	// get the width of each slide
	const slideWidth = slides[0].getBoundingClientRect().width;
	track.style.transform = 'translateX(0px)';
	// arrange slides next to each other in a row
	const setSlidePosition = (slide, index) => {
		slide.style.left = slideWidth * index + 'px';
	};
	slides.forEach(setSlidePosition);

	// function to set position of slides track 
	const moveToSlide = (track, currentSlide, targetSlide) => {
		// gets the left position of the next slide and sets that as the position of the track
		track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
		// updates the currentSlide class to the new slide
		currentSlide.classList.remove('currentSlide');
		targetSlide.classList.add('currentSlide');
	};

	// next button - move slide to the right
	nextButton.addEventListener('click', e => {
		//get the current and next slide
		const currentSlide = track.querySelector('.currentSlide');
		const nextSlide = currentSlide.nextElementSibling;
		// call moveToSlide function with current and next slide selected
		moveToSlide(track, currentSlide, nextSlide);
	});

	// previous button - move slide to the left
	prevButton.addEventListener('click', e => {
		//get the current and previous slide
		const currentSlide = track.querySelector('.currentSlide');
		const prevSlide = currentSlide.previousElementSibling;
		// call moveToSlide function with current and previous slide selected
		moveToSlide(track, currentSlide, prevSlide);
	});
}
