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
    <script type="text/javascript"  src="http://ricostacruz.com/jquery.transit/jquery.transit.min.js"></script>

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
		<header id="rwdHeader">
			
		</header>
		<div id="planos">
			<section>
				<ul>
					<li class="grid_4 pl1">
						<div class="plano_title">PLANO PADRÃO</div>
						<div class="imagem"><img src="img/img1.jpg"  alt=""></div>
						<div class="preco">
							<div><span>R$</span>19<span>,00</span></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus rerum vero, inventore nesciunt repellat aperiam perferendis voluptas quaerat voluptatem dicta nemo molestiae maiores error nam accusamus quibusdam repudiandae quia ab.</p>
						</div>
						<input type="submit" id="btnPl1" value="Ver mais">
					</li>
					<li class="grid_4 pl2">
						<div class="plano_title">PLANO EMPRESARIAL</div>
						<div class="imagem"><img src="img/img2.jpg" alt=""></div>
						<div class="preco">
							<div><span>R$</span>19<span>,00</span></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam deserunt nemo at ea eveniet id tenetur. At iure dolorum odio tempora, nisi nesciunt dignissimos? Cum vero provident officiis, velit. Esse.</p>
						</div>
						<input type="submit" id="btnPl2" value="Ver mais">
					</li>
					<li class="grid_4 pl3">
						<div class="plano_title">PLANO PREMIUM</div>
						<div class="imagem" style="margin-top:-20px;"><img src="img/img3.jpg" alt=""></div>
						<div class="preco">
							<div style="margin-top:10px"><span>R$</span>19<span>,00</span></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus facilis maiores non nisi, quaerat fuga. Ullam possimus rerum at labore. Beatae, nam possimus quo repudiandae sapiente maxime, rem consectetur sequi?</p>
						</div>
						<input type="submit" id="btnPl3" value="Ver mais">
					</li>
				</ul>
			</section>

			<section class="planoContent grid_8">
				<div class="planoA" id="planoA">
					<a href="javascript:void(0)" class="closepl">Voltar</a>
					<br>
					<br style="clear:both">
					<h1>Plano A</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita omnis ex soluta reiciendis iusto maiores veritatis saepe cupiditate voluptatibus labore delectus aliquid ullam vitae id odio, ducimus dicta aperiam? Officiis.</p>
					<br>
					<input type="submit" value="Adquirir plano" id="btnAdqPlano">
				</div>
				<div class="planoB" id="planoB">
					<a href="javascript:void(0)" class="closepl">Voltar</a>
					<br>
					<br style="clear:both">
					<h1>Plano B</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quam expedita voluptate praesentium aspernatur molestias eius labore tenetur libero natus nam possimus odio vel inventore, fugiat, atque quas distinctio. Aperiam.</p>
					<br>
					<input type="submit" value="Adquirir plano" id="btnAdqPlano">
				</div>
				<div class="planoC" id="planoC">
					<a href="javascript:void(0)" class="closepl">Voltar</a>
					<br>
					<br style="clear:both">
					<h1>Plano C</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus alias sequi eveniet porro mollitia nihil laudantium tempore debitis voluptate dolore, minus quisquam quibusdam dolorem nostrum facere, tenetur aperiam quo rerum!</p>
					<br>
					<input type="submit" value="Adquirir plano" id="btnAdqPlano">
				</div>
			</section>
		</div>
	</div>
	<footer></footer>
	<script src="js/animations.js"></script>
	<script>

	ANIMATIONS.teste();
	ANIMATIONS.menu();

	</script>
</body>
</html>