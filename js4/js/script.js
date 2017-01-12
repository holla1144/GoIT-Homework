jQuery(function($){

	$('.tab a').on('click', function (e) {
		e.preventDefault();
		$('.tab-content', '#content_box')
			.removeClass('showed')
			.eq($(this).parent().index()).addClass('showed')
	});
	
	//Start of content box

	//End of content box

	//Start of form
	var form = $('#first_form'),
		tooltips = $('.tool_tip', form);
	$('input[type=text]', form)
		.on('mouseenter focus', function () {
			tooltips.removeClass('visible');
			$(this).next().addClass('visible');
		})
		.on('mouseleave', function () {
			tooltips.removeClass('visible');
		});
	//Show tooltip on hover

	//End show tooltip on hover

	//Show tooltip on label click

	//End show tooltip on label click



	//Start show all tooltips on button click

	$("#show_off").on('click', function() {
		tooltips.addClass('visible');
	});

	//End show all tooltips on button click

});