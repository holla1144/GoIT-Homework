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
			'template', 
			'jquery'

		],

	function (model, view, controller, template, jquery) {
		"use strict";
		console.log(typeof(Model));
		var firstToDoList = ['learn Javascript', 'learn html', 'make coffee'];
		var model = new Model(firstToDoList);

		
	}

);