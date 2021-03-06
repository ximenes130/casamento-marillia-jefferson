// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery/dist/jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require materialize
//= require owl.carousel/dist/owl.carousel
//= require animejs/anime
//= require_tree .


// Initializing variables

var Animations = {},
	owlData = {
		loop: true,
		margin: 10,
		responsiveClass:true,
		center: true,
		nav: false,
		dots: true,
		//   autoWidth:true,
		lazyLoad: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3,
				nav:true
			},
			1000: {
				items: 5,
				nav:true
			}
		}
	}


// Initializing plugins

$(document).ready(function () {
	var nav = $('nav')

	$('.scrollspy').scrollSpy({ scrollOffset: 70 });
	$('.parallax').parallax();

	nav.pushpin({
		top: nav.offset().top
	});

	$('.owl-carousel').owlCarousel(owlData)
	$('#pictures .owl-carousel img').click(picturesItemClick)
	init_histories();
	init_honours();
	init_timer($('.header .content h6'));
});

function init_histories(){
	data['histories']['index'] = 0;
	setDisplayedHistory(0);
	$('#history-range').attr('max', data['histories'].length - 1);
	$('#history-range').on('input',function(){
		setDisplayedHistory(this.value);
	});
	$('.history-next').click(historyNext);
	$('.history-previous').click(historyPrev);
}

function init_honours(){
	data['honours']['index'] = 0;
	setDisplayedHonour(0);
	$('#honour-range').attr('max', data['honours'].length - 1);
	$('#honour-range').on('input',function(){
		setDisplayedHonour(this.value);
	});
	$('.honour-next').click(honourNext);
	$('.honour-previous').click(honourPrev);
}

function setDisplayedHistory(index){
	try {
		$('#history .text-navigator-title').text(data['histories'][index].title);
		$('#history .text-navigator-content').text(data['histories'][index].text);
		document.getElementById('history-range').value = index;
	}
	catch(err) {
		console.log(err)
	}
}

function setDisplayedHonour(index){
	try {
		$('#honour .text-navigator-title').text(data['honours'][index].title);
		$('#honour .text-navigator-content').text(data['honours'][index].text);
		document.getElementById('honour-range').value = index;
	}
	catch(err) {
		console.log(err)
	}
}

// Handling events

function historyNext(e) {
	// Preventing link default behaviour
	e.preventDefault();

	// Calculating new index
	let index = data['histories']['index'] = (data['histories']['index'] + 1) % data['histories'].length;

	// Animating transition
	let animationTargets = '#history .flow-text, #history h3';
	anime.timeline()
		.add({
			targets: animationTargets,
			duration: 500,
			translateX: "150px",
			opacity: "0",
			easing: 'easeInOutQuad',
			complete: function(anim) {
				setDisplayedHistory(index);
			}
		})
		.add({
			targets: animationTargets,
			duration: 0,
			translateX: "-150px"
		})
		.add({
			targets: animationTargets,
			duration: 500,
			translateX: "0px",
			opacity: "1",
			easing: 'easeInOutQuad'
		});
}

function historyPrev(e) {
	// Preventing link default behaviour
	e.preventDefault();

	// Calculating new index
	let index = data['histories']['index'] - 1;

	if(index < 0){
		index = data['histories']['index'] = data['histories'].length - 1;
	}else{
		data['histories']['index'] = index;
	}

	// Animating transition
	let animationTargets = '#history .flow-text, #history h3';

	anime.timeline()
	.add({
		targets: animationTargets,
		duration: 500,
		translateX: "-150px",
		opacity: "0",
		easing: 'easeInOutQuad',
		complete: function(anim) {
			setDisplayedHistory(index);
		}
	})
	.add({
		targets: animationTargets,
		duration: 0,
		translateX: "150px"
	})
	.add({
		targets: animationTargets,
		duration: 500,
		translateX: "0px",
		opacity: "1",
		easing: 'easeInOutQuad'
	});
}

function honourNext(e) {
	// Preventing link default behaviour
	e.preventDefault();

	// Calculating new index
	let index = data['honours']['index'] = (data['honours']['index'] + 1) % data['honours'].length;

	// Animating transition
	let animationTargets = '#honour .flow-text, #honour h3';
	anime.timeline()
		.add({
			targets: animationTargets,
			duration: 500,
			translateX: "150px",
			opacity: "0",
			easing: 'easeInOutQuad',
			complete: function(anim) {
				setDisplayedHonour(index);
			}
		})
		.add({
			targets: animationTargets,
			duration: 0,
			translateX: "-150px"
		})
		.add({
			targets: animationTargets,
			duration: 500,
			translateX: "0px",
			opacity: "1",
			easing: 'easeInOutQuad'
		});
}

function honourPrev(e) {
	// Preventing link default behaviour
	e.preventDefault();

	// Calculating new index
	let index = data['honours']['index'] - 1;

	if(index < 0){
		index = data['honours']['index'] = data['honours'].length - 1;
	}else{
		data['honours']['index'] = index;
	}

	// Animating transition
	let animationTargets = '#honour .flow-text, #honour h3';

	anime.timeline()
	.add({
		targets: animationTargets,
		duration: 500,
		translateX: "-150px",
		opacity: "0",
		easing: 'easeInOutQuad',
		complete: function(anim) {
			setDisplayedHonour(index);
		}
	})
	.add({
		targets: animationTargets,
		duration: 0,
		translateX: "150px"
	})
	.add({
		targets: animationTargets,
		duration: 500,
		translateX: "0px",
		opacity: "1",
		easing: 'easeInOutQuad'
	});
}

function picturesItemClick(event) {
	var src = $(event.target).attr('data-src')
	$('#picture-main').attr('src', src)
}


// Setting Animations

Animations.enterLeft = function (selector) {
	console.log(selector)
	
	// element.velocity({ opacity: "0", translateX: "-100px" }, { duration: 0 });
	// element.velocity({ opacity: "1", translateX: "0" }, { duration: 1200, easing: [60, 10] });
};

Animations.exitRight = function (selector) {
	anime({
		targets: selector,
		translateX: "-100px",
		opacity: "0",
		easing: 'easeInOutQuad'
	});
	// var element = $(selectorOrEl)
	// element.velocity({ opacity: "0", translateX: "100px" }, { duration: 1200, easing: [60, 10] });
};

// Timer function
function init_timer(element) {
	var start = Date.parse("2019-02-16T13:00"),
			diff,
			days,
			minutes,
			hours,
			seconds;

	function timer() {
			// get the number of seconds that have elapsed since 
			// startTimer() was called
			diff = 1000 - (((Date.now() - start) / 1000) | 0);

			// does the same job as parseInt truncates the float
			seconds = (diff % 60) | 0;
			minutes = ((diff / 60) % 60) | 0;
			hours 	= (((diff / 60) / 60) % 24) | 0;
			days 		= (((diff / 60) / 60) / 24) | 0;

			minutes = minutes < 10 ? "0" + minutes : minutes;
			hours = hours < 10 ? "0" + hours : hours;

			element.text("FALTAM SOMENTE " + days + "D " + hours + "H " + minutes + "M " + seconds + "S");

			if (diff <= 0) {
					element.text("");
			}
	};
	// we don't want to wait a full second before the timer starts
	timer();
	setInterval(timer, 1000);
}
