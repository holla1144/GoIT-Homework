	define(
		'view',
		['jquery', 'model', 'template'], 

		function (model) {

			var self = this; 
			var wrapper = tmpl($('#wrapper-template').html());

			
			return {
				
				renderlist: function (data) {}, 
				
				init: function () {
					
					$('body').append(wrapper);

					self.elements = {
						input: $('.item-value'),
						addBtn: $('.item-add'),
						listContainer: $('.item-list')

					}

					self.renderList(model.data);

				},

				renderList: function (data) {
					var list = tmpl($("#list-template").html(), {data: data});
					self.elements.listContainer.html(list);

			}



			};



			self.init();

	}

);