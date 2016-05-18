$(function() {

	var template = $('#test').html(); 

	
	var data = [

	{
		title: 'Dark Side of the Moon', 
		artist: 'Pink Floyd'

	},
	{
		title: "A Hard Day/'s night", 
		artist: 'The Beatles'
	},
	{
		title: 'Highway to Hell',
		artist: 'ACDC'
	}, 
	{
		title: 'Danger Doom', 
		artist: 'MF Doom'
	}, 
	{
		title: 'Sticky Fingers',
		artist: 'The Rolling Stones'

	},
	{
		title: 'The Division Bell',
		artist: 'Pink Floyd'

	},

	];

	var content = tmpl(template, 
		{data: data});


	$('#wrapper').append(content);


	var holder = $('#head').html();

	var header = {header: 'My favorite albums'};

	var newCont = tmpl(holder, header);

	$('#wrapper').prepend(newCont);

});