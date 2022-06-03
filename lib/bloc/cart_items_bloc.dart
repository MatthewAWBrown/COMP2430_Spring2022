/// Matthew Brown
/// COMP-2430 Mobile Computer Technology
/// Exercise 1

/// The [dart:async] is necessary for using streams

import 'dart:async';

class CartItemsBloc {
  final cartStreamController = StreamController.broadcast();
  Stream get getStream => cartStreamController.stream;

  /// items to be displayed in the shop
  final Map allItems = {
    'shop items': [
      {'name': "Player's Handbook", 'price': 58, 'id': 1},
      {'name': "Dungeon Master's Guide", 'price': 58, 'id': 2},
      {'name': 'Monster Manual', 'price': 58, 'id': 3},
      {'name': "Baldur's Gate: Descent into Avernus", 'price': 66, 'id': 4},
      {'name': 'The Wild Beyond the Witchlight', 'price': 66, 'id': 5},
      {'name': 'Tomb of Annihilation', 'price': 66, 'id': 6},
    ],
    'cart items': [],
    /// cart items
    /// array will be filled with items added from the shop list
  };

  void addToCart(item){
    allItems['shop items'].remove(item);
    allItems['cart items'].add(item);
    cartStreamController.sink.add(allItems);
  }

  void removeFromCart(item){
    allItems['cart items'].remove(item);
    allItems['shop items'].add(item);
    cartStreamController.sink.add(allItems);
  }

  void dispose() {
    cartStreamController.close();
  }
}
final bloc = CartItemsBloc();