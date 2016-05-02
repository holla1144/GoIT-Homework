$(function(){	

	//Start of content box

	$('#about').click(function() {
		$('#p1').show();
		$('#p2').hide();
		$('#p3').hide();


	});

	$('#tour_dates').click(function(){
		$('#p1').hide();
		$('#p2').show();
		$('#p3').hide();

	});

	$('#press').click(function(){
		$('#p1').hide();
		$('#p2').hide();
		$('#p3').show();


	});

	$("p").hide();

	//End of content box

	//Start of form

	//Show tooltip on hover
	
	$("#first_name").hover(function() {
		$("#tt_first").show(200);

	},
	function() {
		$("#tt_first").hide(200);

	});

	$("#last_name").hover(function() {
		$("#tt_last").show(200);

	},
	function() {
		$("#tt_last").hide(200);

	});

	$("#address").hover(function() {
		$("#tt_add").show(200);

	},
	function() {
		$("#tt_add").hide(200);

	});

	//End show tooltip on hover

	//Show tooltip on label click

	$("#lab_first_name").click(function(){
		$("#tt_first").show(200);
		$("#tt_last").hide(200)
		$("#tt_add").hide(200);
	});
	
	$("#lab_last_name").click(function(){
		$("#tt_first").hide(200);
		$("#tt_last").show(200)
		$("#tt_add").hide(200);
	});

	$("#lab_address").click(function(){
		$("#tt_first").hide(200);
		$("#tt_last").hide(200)
		$("#tt_add").show(200);
	});

	//End show tooltip on label click



	//Start show all tooltips on button click

		$("#show_off").click(function() {
		$("#tt_first").show(200);
		$("#tt_last").show(200)
		$("#tt_add").show(200);

	});

	//End show all tooltips on button click

});