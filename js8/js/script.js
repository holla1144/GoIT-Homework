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

 	$('#submit').on('click', function(){
 		var userFish = $('#userFish').val();
 		console.log(userFish);
 		var API_KEY = '2651505-45a5ca7f4e3550f4ba2024b08';
		var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(userFish) + "&per_page=20";
		$.getJSON(URL, function(data){
		$('.imageDiv').remove();
    	if (parseInt(data.totalHits) > 0)
        	$.each(data.hits, function(i, hit){ 
        		$('#search').append( "<div class='imageDiv'><p class='imageTitle'>" + hit.tags + "</p><br>" + "<p class='imageHolder'><a" + " " + "href=" + '' + hit.pageURL + '' + "><img" + " " + "src=" + hit.previewURL + "></a></p></div>" ); });
    	else
        	console.log('No hits');
		});
	});

	
	var human = {
		name: 'Susan', 
		age: 34, 
		race: 'African-American', 
		height: '2 meters', 
		gender:'Female', 
		weight: '50 kg'

	}; 

	var worker = {
		workplace: 'Google', 
		salary: 200, 
		savings: 0, 
		work: function () {
			this.savings += 200; 

		}
	};

	worker.__proto__ = human; 

	var student = {
		university: 'Dnipropetrovsk National University', 
		stipend: 500, 
		watchTV: function () {
			console.log('I love the Simpsons');
		}
	};

	student.__proto__ = human; 


}); 

