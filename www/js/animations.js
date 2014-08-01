function addJavascript(jsname,pos) {
	var th = document.getElementsByTagName(pos)[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}

addJavascript('js/jquery.transit.js','body');

ANIMATIONS = {

	planos: function(){
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
	},

	duvidas: function(){
		var menu = $('.d_menu');
		var menu_m = $('.d_menu_m');
		var content = $('.d_content');

		$('.ctDuvidas .duvida').click(function(){
			var id = this.id;
			hideOnUse(id);
			menu.addClass('hidden');
			menu_m.show();
			setTimeout(function(){
				content.addClass('w100');
			}, 200)
			$('.duvida').removeClass('dHover');

		})

		menu_m.click(function(){
			menu.removeClass('hidden ');
			content.removeClass('w100');
			menu_m.hide();
			$('.duvida').addClass('dHover');

		});
		
		function  hideOnUse(id){
			var totalDivs = $('.ctDuvidas .duvida').length + 1;
			for (var i = 0; i < totalDivs; i++) {
				var dct = 'dct'+ i;
				if(dct != id){
					$('#dct'+ i).hide();
				}
			}
		}
	},

	menu: function(){
		$('.menu li').hover(function(){
			$(this).addClass('animated pulse');
		},function(){
			$(this).removeClass('animated pulse');
		});
	},

	duvidaTabs: function(){
		var totalTabs = $('.d_menu ul li').length + 1;

		$(document).ready(function(){
			for (var i = 0; i < totalTabs; i++) {
				$('.d_menu ul li:nth-child('+ i +')') .addClass('dlk'+ i);
				$('.ctDuvidas div:nth-child('+ i +')').attr('id', 'dct'+ i);
			}
			
			$('.dlk1 a, #dct1').addClass('active');
			
			for (var i = 1; i < totalTabs; i++) {
				$('.dlk'+ i + ' a').click(cback(i));
			}
		})

		function cback(i){
			return function(){
				$('.findCount').hide();
				$('.d_menu ul li a, .ctDuvidas div').removeClass('active');
				$('.ctDuvidas div').hide();
				$('#dct' + i).show();	
				$(this).addClass('active');	

				setTimeout(function(){
					$('#dct' + i).addClass('active');	
				}, 200)
			}
		}

	}
}

