define(
	'controller',
	['model', 'view', 'jquery'],

	function () {

		return function Controller(model, view) {
	
			var self = this;
			view.elements.addBtn.on('click', self.addItem);
			view.elements.listContainer.on('click', '.item-delete', self.removeItem);

			self.addItem = function () {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');

			}

			self.removeItem = function() {
				var item = $(this).attr('data-value');

				model.removeItem(item);
				view.renderList(model.data);
			}




		};


}

)
