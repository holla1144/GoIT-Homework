$(function(){	

	$('.single-item').slick({
		dots:true, 

	});

	$('.slick-prev.slick-arrow').css(
		{'left': '22px',
		'z-index': '1000'});

	$('.slick-next.slick-arrow').css('right', '22px');

	$('.slick-dots').css('bottom', '10px');

	 $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );

	  $('select').selectric();

	  $('.icheck_red').iCheck({
    	checkboxClass: 'icheckbox_flat-red',

    });

}); 