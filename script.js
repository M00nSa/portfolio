$(document).ready(function(){

    /* Hamburger menu animation */
    $('.open-button').click(function(){
      $(this).toggleClass('open');
    });

	 /* Menu fade/in out on mobile */
    $(".open-button").click(function(e){
        e.preventDefault();
        $(".mobile-menu").toggleClass('open');
    });
	
});
