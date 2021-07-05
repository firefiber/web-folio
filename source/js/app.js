gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const about = document.querySelector('#landing__nav .about');
const work = document.querySelector('#landing__nav .work');
const contact = document.querySelector('#landing__nav .contact');

about.addEventListener('click', e =>{
	gsap.to(window, {duration: 2, scrollTo:"#about"});
});

work.addEventListener('click', e =>{
	gsap.to(window, {duration: 3, scrollTo:"#work", ease: "power1"});
});

contact.addEventListener('click', e =>{
	gsap.to(window, {duration: 4, scrollTo:"#contact", ease: "power1"});
});

let timeline1 = gsap.timeline({
	scrollTrigger: {
		trigger: "#about",
		start: "top 98%",
		end: "top 2%",
		scrub: true,
//		markers: true,

	}
});

let timeline2 = gsap.timeline({
	scrollTrigger: {
		trigger: "#work",
		start: "top 80%",
		end: "top 2%",
		scrub: true,
//		markers: true
	}
})

let timeline3 = gsap.timeline({
	scrollTrigger: {
		trigger: "#contact",
		start: "top 80%",
		end: "bottom bottom",
		scrub: true,
		duration: 4
	}
})

timeline1.to("#logo_svg", {
	scale: 11,
	ease: "none",
});

timeline2.to("#logo_svg", {
	x: '-50vw'
});


timeline3.to("#logo_svg",{
	rotation: 90,
	x: "-12vw"
});