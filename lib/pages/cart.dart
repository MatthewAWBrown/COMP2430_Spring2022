/// Matthew Brown
/// COMP-2430 Mobile Computer Technology
/// Exercise 1
import 'package:flutter/material.dart';
import 'package:exercise_1/bloc/cart_items_bloc.dart';

class Cart extends StatelessWidget {
  const Cart({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cart'),
      ),
      body: StreamBuilder<dynamic>(
        stream: bloc.getStream,
        initialData: bloc.allItems,
        builder: (context, snapshot){
          return snapshot.data['cart items'].length > 0
              ?Column(
            children: <Widget>[
              Expanded(child: cartListBuilder(snapshot)),
              SizedBox(height: 40)
            ],
          )
              : Center(
              child: Text("You haven't taken any item yet")
          );
        },
      ),
    );
  }
}

Widget cartListBuilder(snapshot) {
  return ListView.builder(
    itemCount: snapshot.data["cart items"].length,
    itemBuilder: (BuildContext context, i) {
      final cartList = snapshot.data["cart items"];
      return ListTile(
        title: Text(cartList[i]['name']),
        subtitle: Text("\$${cartList[i]['price']}"),
        trailing: IconButton(
          icon: Icon(Icons.remove_shopping_cart),
          onPressed: () {
            bloc.removeFromCart(cartList[i]);
          },
        ),
        onTap: () {},
      );
    },
  );
}