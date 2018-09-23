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
	$('.history-next').click(historyNext)
	$('#pictures .owl-carousel img').click(picturesItemClick)
});


// Handling events

function historyNext() {
	Animations.exitRight('#history .flow-text, #history h3')
	Animations.enterLeft('#history .flow-text, #history h3')
}

function picturesItemClick(event) {
	var src = $(event.target).attr('data-src')
	$('#picture-main').attr('src', src)
}


// Setting Animations

Animations.enterLeft = function (selectorOrEl) {
	var element = $(selectorOrEl)
	element.velocity({ opacity: "0", translateX: "-100px" }, { duration: 0 });
	element.velocity({ opacity: "1", translateX: "0" }, { duration: 1200, easing: [60, 10] });
};

Animations.exitRight = function (selectorOrEl) {
	var element = $(selectorOrEl)
	element.velocity({ opacity: "0", translateX: "100px" }, { duration: 1200, easing: [60, 10] });
};
