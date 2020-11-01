  // Search
  $(".search-open").on('click', function(){
            $('.search-form').addClass('show-search');
        });
        $(".close-search-form").on('click', function(){
            $('.search-form').removeClass('show-search');
        });

       

        // nav
   
    $(window).scroll(function(){
    $('.nav-main').toggleClass('nav-active', $(this).scrollTop() > 100);  
 })
     $(window).scroll(function(){
    $('.back').toggleClass('scroll-active', $(this).scrollTop() > 200);  
 })
	// owl-activation
	$(document).ready(function(){
	  $(".owl-carousel").owlCarousel();
	});


// mobile menu
$(".open-menu").click(function(){
  $(".menu-wrap").toggleClass("active-menu");

});

// nice select
$(document).ready(function() {
  $('select').niceSelect();
});

// owl activation

 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})





        
