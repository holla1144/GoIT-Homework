requirejs.config({
		paths: {

			'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery'

		},

		shim: {

			'jquery': {

				exports: 'jQuery'
			}

		}

	});


require(
	[

	'model',
	 'view', 
	 'controller',
	 'jquery',
	 'template'

	],

	function (Model, View, Controller, $) {
		
		$( function () {

			var firstToDoList = ['learn Javascript', 'learn html', 'make coffee'];
			var model = new Model(firstToDoList);
			var view = new View(model);
			var controller = new Controller(model, view);

			});
				

	}

);