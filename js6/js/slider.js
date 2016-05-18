$(document).ready(function (){

	var $leftUIE = $('.carousel-arrow-left');
	var $rightUIE = $('.carousel-arrow-right');
	var $elementList = $('.carousel-list')

	var pixelOffset = 125; 
	var currentLeftValue = 0;
	var elementCount = $elementList.find('li').length;
	var mimimumOffset = - ((elementCount - 5)) * pixelOffset; 
	var maximumOffset = 0; 


	$leftUIE.click(function(){
		if (currentLeftValue != maximumOffset) {
			currentLeftValue += 125; 
			$elementList.animate( {left : currentLeftValue + "px"},  500);
	}

	})

	$rightUIE.click(function(){
		if (currentLeftValue != mimimumOffset) {
			currentLeftValue -= 125; 
			$elementList.animate( {left : currentLeftValue + "px"}, 500 );
	}

	});


});