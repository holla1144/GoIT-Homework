define(
	'controller',
	['view', 'jquery', 'model','template'],

	function (model, view, jquery) {



			var self = this;
			
			//view.elements.addBtn.on('click', addItem);
			//view.elements.listContainer.on('click', '.item-delete', removeItem);

			return {

				addItem: function addItem () {
					var newItem = view.elements.input.val();
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');

				}, 

				removeItem: function removeItem () {
					var item = $(this).attr('data-value');

					model.removeItem(item);
					view.renderList(model.data);
				}


	}

		


	}
);