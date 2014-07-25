
	var btnpl1 = $('#btnPl1');
	var btnpl2 = $('#btnPl2');
	var btnpl3 = $('#btnPl3');
	var closepl = $('.closepl');
	var hpa = $('.planoA').height();
	var hpb = $('.planoB').height();

	$(document).ready(function(){
	
		$('head').append(
			"<style>.pl_anim_t1{"+
				"-webkit-transform: translateY("+ hpa * (-1) +"px) translateX(0) !important;"+
				"-moz-transform: translateX("+ hpa * (-1) +"px)translateX(0)  !important;"+
				"-o-transform: translateX("+ hpa * (-1) +"px) translateX(0) !important;"+
				"-ms-transform: translateX("+ hpa * (-1) +"px)translateX(0)  !important;"+
				"opacity: 1 !important;"+
				"-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100)) !important;"+
				"filter: alpha(opacity = (100)) !important;"+
				"-moz-opacity: 1 !important;"+
				"transform: translateX("+ hpa * (-1) +"px)translateX(0)  !important;} "+
			".pl_anim_t2{"+
				"-webkit-transform: translateY("+ hpb * (-2) +"px)translateX(0)  !important;"+
				"-moz-transform: translateX("+ hpb * (-2) +"px) translateX(0) !important;"+
				"-o-transform: translateX("+ hpb * (-2) +"px) translateX(0) !important;"+
				"-ms-transform: translateX("+ hpb * (-2) +"px) translateX(0) !important;"+
				"transform: translateX("+ hpb * (-2) +"px) translateX(0) !important;"+
				"opacity: 1 !important;"+
				"-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100)) !important;"+
				"filter: alpha(opacity = (100)) !important;"+
				"-moz-opacity: 1 !important;"+
			"}"+
			"</style>");
	})

	$('#planos ul li').hover(function(){
		$('#planos ul > li').addClass('blur');
	}, function(){
		$('#planos ul > li').removeClass('blur');
	});



	btnpl1.click(function(){
		$('.pl2, .pl3').addClass('pl1_anim');

		setTimeout(function(){
			$('.pl1').addClass('pl1_anim_1');
		},200)
		setTimeout(function(){
			$('.planoA').addClass('pl_opa');
		},200)
		$('#planos .planoContent').addClass('pl_index');
		$('#planos ul li').addClass('pl_grayscale');

	});

	btnpl2.click(function(){
		$('.pl1, .pl3').addClass('pl1_anim');

		setTimeout(function(){
			$('.pl2').addClass('pl1_anim_2');
		},200)
		setTimeout(function(){
			$('.planoB').addClass('pl_anim_t1');
		},600)
		$('#planos .planoContent').addClass('pl_index');
		$('#planos ul li').addClass('pl_grayscale');
	});	

	btnpl3.click(function(){
		$('.pl1, .pl2').addClass('pl1_anim');

		setTimeout(function(){
			$('.pl3').addClass('pl1_anim_3');
		},200)		
		setTimeout(function(){
			$('.planoC').addClass('pl_anim_t2');
		},600)
		$('#planos .planoContent').addClass('pl_index');
		$('#planos ul li').addClass('pl_grayscale');
	});

	closepl.click(function(){
   		$('#planos ul li').removeClass("hide");
	    $('#planos .planoContent > div').removeClass("pl1_anim_3");
	    $('#planos .planoContent').removeClass("pl_index");
		$('.planoA').removeClass('pl_opa');
		$('.planoB').removeClass('pl_anim_t1');
		$('.planoC').removeClass('pl_anim_t2');
		setTimeout(function(){
	    	$('#planos ul li').removeClass("pl1_anim pl1_anim_1 pl1_anim_2 pl1_anim_3 pl_grayscale");
		},200)

	});

