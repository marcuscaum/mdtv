<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>MidiaTV</title>
	<link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400,700,400italic' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="less/animate.css">
	<link rel="stylesheet" href="less/home.min.css">
    <script type="text/javascript"  src="js/jquery.js"></script>
    <script type="text/javascript"  src="animation/animation_edgePreload.js"></script>
    <script type="text/javascript"  src="js/wow.js"></script>
    <script type="text/javascript"  src="js/jquery.tubular.1.0.js"></script>
    <script></script>
    <style>
        .edgeLoad-EDGE-3152717 { visibility:hidden; }
        .EDGE-3152717{background:none !important; margin:0 auto;}
    </style>
</head>
<body>
	<div class="container_12">
		<header>
			<div class="grid_2">
				<img src="img/logo.png" height="63" width="182" alt="" style="margin:20px">
			</div>
			<ul class="menu">
				<li>HOME</li>
				<li>PLANOS</li>
				<li>QUEM SOMOS</li>
				<li>CONTATO</li>
			</ul>
		</header>
		<section class="animation">
			<div id="Stage" class="EDGE-3152717" style="height: 375px !important;">
		        <div id="Stage_tv" class="edgeLoad-EDGE-3152717"></div>
		        <div id="Stage_source-sans-prosans-serif" class="edgeLoad-EDGE-3152717">Porque</div>
		        <div id="Stage_source-sans-prosans-serif2" class="edgeLoad-EDGE-3152717">toda informao Ã© um</div>
		        <div id="Stage_source-sans-prosans-serif3" class="edgeLoad-EDGE-3152717">PrivilÃ©gio.</div>
		        <div id="Stage_logo" class="edgeLoad-EDGE-3152717"></div>
		        <div id="Stage_IconTime" class="edgeLoad-EDGE-3152717"></div>
		        <div id="Stage_weather" class="edgeLoad-EDGE-3152717"></div>
		        <div id="Stage_news" class="edgeLoad-EDGE-3152717"></div>
	    	</div>
    	</section>
    	<section class="content  wow fadeInUp "data-wow-duration="1s">
    		<div class="grid_4 ">
    			<div class="icone"></div>
    			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias soluta quidem voluptatem quo quae magni omnis similique obcaecati error tempore et, molestias quis nam ex veniam, itaque ut suscipit.</p>
    		</div>
			<span class="vr"></span>
    		<div class="grid_4 ">
    			<div class="icone"></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias soluta quidem voluptatem quo quae magni omnis similique obcaecati error tempore et, molestias quis nam ex veniam, itaque ut suscipit.</p>
    		</div>
			<span class="vr"></span>
    		<div class="grid_4">
    			<div class="icone"></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias soluta quidem voluptatem quo quae magni omnis similique obcaecati error tempore et, molestias quis nam ex veniam, itaque ut suscipit.</p>
    		</div>
    	</section>   
    	<section class="absolutesc">
    		<div id="wrapper"></div>
    	</section>
    	<div style="margin:480px 0 70px 0 !important; float: left;">
	    	<section class="content  wow fadeInUp "data-wow-duration="1s">
	    		<div class="grid_4 ">
	    			<div class="icone"></div>
	    			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias soluta quidem voluptatem quo quae magni omnis similique obcaecati error tempore et, molestias quis nam ex veniam, itaque ut suscipit.</p>
	    		</div>
				<span class="vr"></span>
	    		<div class="grid_4 ">
	    			<div class="icone"></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias soluta quidem voluptatem quo quae magni omnis similique obcaecati error tempore et, molestias quis nam ex veniam, itaque ut suscipit.</p>
	    		</div>
				<span class="vr"></span>
	    		<div class="grid_4">
	    			<div class="icone"></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias soluta quidem voluptatem quo quae magni omnis similique obcaecati error tempore et, molestias quis nam ex veniam, itaque ut suscipit.</p>
	    		</div>
	    	</section>    
		</div>
	</div>
	<footer></footer>
	<script>
	wow = new WOW(
	  {
	    animateClass: 'animated',
	    offset: 100
	  }
	);
	wow.init();

	$('.menu li').hover(function(){
		$(this).addClass('animated pulse');
	},function(){
		$(this).removeClass('animated pulse');
	})

	$(document).ready(function() {
	    $('#wrapper').tubular({videoId: 'F5h7isYgb7Y'}); 
		$('#tubular-container').append('<div class="opaBG"><p><strong>Auxiliamos a instalação</strong><br />iremos no local</p></div>');
	});
	</script>
</body>
</html>