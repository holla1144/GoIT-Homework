define(
	'pageLoad',
	['jquery', 'model', 'view', 'controller'],


	jQuery( function () {

		var firstToDoList = ['learn Javascript', 'learn html', 'make coffee'];
		var model = new Model(firstToDoList);
		var view = new View(model);
		var controller = new Controller(model, view);

	})

);