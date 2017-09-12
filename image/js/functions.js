"use strict";
$(window).on( 'load', function() {

	/*------------------ Hover Main Menu ------------------*/
	if($('.mnu>ul>li').hasClass('selected')){
		$('.selected').addClass('active');
		var currentleft=$('.selected').position().left+"px";
		var currentwidth=$('.selected').css('width');
		$('.lamp').css({"left":currentleft,"width":currentwidth});
	}
	else{
		$('.mnu>ul>li').first().addClass('active');
		var currentleft=$('.active').position().left+"px";
		var currentwidth=$('.active').css('width');
		$('.lamp').css({"left":currentleft,"width":currentwidth});
	}
	$('.mnu>ul>li').on({
	 mouseenter: function(){
		$('.mnu ul li').removeClass('active');
		$(this).addClass('active');
		var currentleft=$('.active').position().left+"px";
		var currentwidth=$('.active').css('width');
		$('.lamp').css({"left":currentleft,"width":currentwidth});
	},
	 mouseleave: function(){
		if($('.mnu>ul>li').hasClass('selected')){
			$('.selected').addClass('active');
			var currentleft=$('.selected').position().left+"px";
			var currentwidth=$('.selected').css('width');
			$('.lamp').css({"left":currentleft,"width":currentwidth});
		}
		else{
			$('.mnu>ul>li').first().addClass('active');
			var currentleft=$('.active').position().left+"px";
			var currentwidth=$('.active').css('width');
			$('.lamp').css({"left":currentleft,"width":currentwidth});
		}
	}});


	/*------------------ Mobile Main Menu ------------------*/
	$(".toggle-mnu").on( 'click', function(){
		$(this).toggleClass("on");
		$(".top_mnu").slideToggle();
		return false;
	});

	/*------------------ First Window Height Detected ------------------*/
	
	$(".head_bg").height($(window).height());
	$(window).on( 'resize', function(){
		$(".head_bg").height($(window).height());
	}); 

	/*------------------ Matrix ------------------*/
	var c = document.getElementById("c");
	var ctx = c.getContext("2d");

	var W = window.innerWidth,
	    H = window.innerHeight;

	var SZ = 12;
	var pos = [];
	var charsets = [
	  "abcdefghijklmnopqrstuvwxyz",
	  "JAMES"
	];
	var charset = charsets[1].split("");

	c.width = W; c.height = H;
	W -= W % SZ; H -= H % SZ;

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, W, H);

	for(var i = 0; i < W/SZ; i++){
	  pos[i] = Math.random()*H;
	  pos[i] -= pos[i] % SZ;
	}

	var draw = setInterval(function(){
	  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
	  ctx.fillRect(0, 0, W, H);
	  
	  ctx.font = SZ+"px monospace";
	  ctx.fillStyle = "lime";
	  ctx.textAlign = "start";
	  
	  for(var i = 0; i < W/SZ; i++){
	    pos[i] += SZ;
	    if(pos[i] == H) pos[i] = 0;
	    ctx.fillText(charset[Math.floor(Math.random()*charset.length)], i*SZ, pos[i]);
	  }
	}, 50);

	/*------------------ Animate WOW ------------------*/

	new WOW().init();


	/*------------------ Scroll Menu------------------*/

	$(".mnu ul li a, .slide_mnu ul li a, .scroll_bottom a, .scrollup").mPageScroll2id(); 


	/*------------------ Popup Window Effect------------------*/

	$('.link').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        zoom:{enabled: true, duration: 300}
    });


	/*------------------ Button to Top------------------*/
	
	$(window).on( 'scroll', function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	}); 

	// PORTFOLIO ISOTOPE
    var $container = $('.isotope_items');
    $container.isotope();

    $('.portfolio_filter ul li').on("click", function(){
        $(".portfolio_filter ul li").removeClass("select-cat");
        $(this).addClass("select-cat");				 
        var selector = $(this).attr('data-filter');
        $(".isotope_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
    });
        return false;
    }); 

});


/*------------------Preloader------------------*/
$(window).on( 'load', function(){

	$(".loader").delay(1000).fadeOut("slow");
	$(".content_name .hello").addClass('animated zoomIn');
	$(".content_name .name").addClass('animated zoomIn');
	$(".content_prof p").addClass('animated zoomIn');
	$(".content_download p").addClass('animated zoomIn');

}); 

/*------------------CountUp------------------*/

$('.counter').countUp({
  'time': 2000,
  'delay': 10
});


	
