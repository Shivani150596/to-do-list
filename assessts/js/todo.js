$("ul").on("click","li",function(){
 //if li is gray then return it black
 console.log($(this).css("color"),"rgb(128, 128, 128)");
/* if($(this).css("color")==="rgb(128, 128, 128)"){ 
 	$(this).css({
 	color:"black",
 	textDecoration:"none",
 	});

 }else{
 	$(this).css({
 	color:"gray",
 	textDecoration:"line-through",
    });
 }*/
  $(this).toggleClass("complete");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which===13){
		//grabbing new todo test from input
		var todoText=$(this).val();
		$(this).val("");

		//create a new li and add to ul
		 $("ul").append("<li><span>x</span> " +todoText+ "</li>");
    }
});
$("#icon").click(function(){
	$("input[type='text'").fadeToggle();

});