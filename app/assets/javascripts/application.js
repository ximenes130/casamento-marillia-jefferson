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

function setDisplayedHistory(index){
	$('#history .text-navigator-title').text(data['histories'][index].title);
	$('#history .text-navigator-content').text(data['histories'][index].text);
	document.getElementById('history-range').value = index;
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
