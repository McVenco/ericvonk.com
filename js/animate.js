// empty file, to be filled
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

});