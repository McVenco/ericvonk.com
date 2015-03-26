$(document).ready(function(){

	$("h1").rotate({ 
	   bind: 
	     { 
        mouseover : function() { 
            $(this).rotate({animateTo:360})
        },
        mouseout : function() { 
            $(this).rotate({animateTo:0})
        }
	     } 
	});

	$("h1").hover(
		function(){
			$(this).css('font-weight', 'bold');
		}, function(){
			$(this).css('font-weight', 'normal');
		}
	);

});