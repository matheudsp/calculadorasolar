(function ($) {
	
	"use strict";

	$(function() {
        $("#tabs").tabs();
    });

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	

	$('.schedule-filter li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.schedule-filter li').removeClass('active');
        $(this).addClass('active');
        if (tsfilter == 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
        }
        $('.ts-item').each(function() {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });


	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) + 1
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);

/* calculo de geracao de energia*/


function CalcSolar() {
	var pot = Number(document.getElementById("txtPotencia").value);
	var rad = Number(document.getElementById("txtRegiao").value);
	var qtdP = Number(document.getElementById("txtPlacas").value);
	var ediaria = (rad* (pot/1000)* qtdP);
	var emensal = (ediaria)* 30;
	var eanual = (emensal)* 12;
	var ediariaf = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(ediaria);
	var emensalf = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(emensal);
	var eanualf = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(eanual);
	
	if (ediaria === 0 || ediaria === NaN) {
		document.getElementById("botao-calc").innerHTML = "<a>PREENCHA OS CAMPOS CORRETAMENTE</a>";
		
	 }
	 else { // IE
		
		document.getElementById("resultado-diaria").innerHTML = "kWh " +String(ediariaf);
		document.getElementById("resultado-mensal").innerHTML  = "kWh " +String(emensalf);
		document.getElementById("resultado-anual").innerHTML  = "kWh " +String(eanualf);
	 }

}


function botaocalc(){
	document.getElementById("botao-calc").innerHTML = "<a>CALCULAR</a>";
}

function time() {
	setTimeout(botaocalc,2000);
}






