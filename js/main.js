$(document).ready(function(){
	 $(".navbar-nav a").click(function(){
	 	
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })
	 
});
