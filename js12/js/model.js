	define(
		'model',
		[],
		function () {
		"use strict";				

			return function Model(data) {
				
				var self = this;
				
				var data = ['learn javascript', 'learn html', 'make coffee'],
				

				addItem = function (item) {
					if (item.length === 0) {
						return;
					}

					self.data.push(item);

					return self.data;


					}, 

				removeItem = function (item) {
					var index = self.data.indexOf(item);

					if (index === -1) {
						return;
					}

					self.data.splice(index, 1);

					return self.data;
				}


			}
	
		}
);