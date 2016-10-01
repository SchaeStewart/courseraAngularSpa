(function() {
    'use strict'

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var showItemsToBuy = this;

				showItemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();

        showItemsToBuy.addToBought = function(itemIndex) {
					ShoppingListCheckOffService.addToBought(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var showItemsBought = this;

				showItemsBought.items = ShoppingListCheckOffService.getBoughtItems();

				showItemsBought.addToBuy = function(itemIndex){
					ShoppingListCheckOffService.addToBuy(itemIndex);
				}
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var itemsToBuy = [{
            name: 'Cookies',
            quantity: 10
        }, {
            name: "Soda",
            quantity: 10
        }, {
            name: "Green beans",
            quantity: 5
        }, {
            name: "Chicken",
            quantity: 15
        }, {
            name: "Cheese",
            quantity: 10
        }];
        var itemsBought = [];

        service.addToBought = function(index) {
            itemsBought.push(itemsToBuy[index]);
            itemsToBuy.splice(index, 1);
        }
				service.addToBuy = function(index){
					itemsToBuy.push(itemsToBuy[index]);
					itemsBought.splice(index, 1);
				}

        service.getBoughtItems = function() {
            return itemsBought;
        };
        service.getItemsToBuy = function() {
            return itemsToBuy;
        };
    }
}());
