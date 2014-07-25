<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>MidiaTV</title>
	<link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400,700,400italic' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="less/animate.css">
	<link rel="stylesheet" href="less/internas.min.css">
    <script type="text/javascript"  src="js/jquery.js"></script>
    <script type="text/javascript"  src="js/wow.js"></script>
    <style>
        .edgeLoad-EDGE-3152717 { visibility:hidden; }
        .EDGE-3152717{background:none !important;}
    </style>
</head>
<body>
	<div class="container_12">
		<header id="normalHeader">
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
		<header id="rwdHeader"></header>
		<section id="planos">

		</section>
	</div>
	<footer></footer>
	<script src="js/animations.js"></script>
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
	});
	</script>
</body>
</html>