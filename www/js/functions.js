FUNCTIONS = {
	
	liveSearch: function(){
		$(document).ready(function(){

		    $("input.liveSearch").keyup(function(){
		 
		 		var value = $(this).val();
		        var filter = value, count = 0;
				
				if(!filter){
				    $(".duvida").hide();
		        	$(".findCount").html("Use o campo acima para buscar ou selecione uma aba ao lado!");
				    return;
				}

		        $(".duvida").each(function(){
			        if(value == null){
						$(this).fadeOut();
				        $(".findCount").html("Foram encontrados <strong>"+count+"</strong> resultados!");
			        }

		            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
		                $(this).fadeOut();
		            } else {
		                $(this).show();
						$(this).addClass('active');	
		                count++;
		            }
		        });
		 
		        $(".findCount").show();

		        if (count > 1){
		        	$(".findCount").html("Foram encontrados <strong>"+count+"</strong> resultados!");
		        }else if(count == 0){
		        	$(".findCount").html("Nenhum resultado encontrado");
		        }else{
		        	$(".findCount").html("Foram encontrados <strong>"+count+"</strong> resultado!");
		        }
	        	

		    });
		});
	}
}