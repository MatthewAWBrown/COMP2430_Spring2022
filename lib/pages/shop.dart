/// Matthew Brown
/// COMP-2430 Mobile Computer Technology
/// Exercise 1
import 'package:flutter/material.dart';
import 'package:exercise_1/bloc/cart_items_bloc.dart';

class ShopItems extends StatelessWidget {
  const ShopItems({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dungeons & Dragons Books'),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.shopping_cart),
            onPressed: () => Navigator.pushNamed(context, '/cart'),
          )
        ],
      ),
      body: ShopItemsWidget(),
    );
  }
}

class ShopItemsWidget extends StatelessWidget {
  const ShopItemsWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<dynamic>(
      initialData: bloc.allItems,
      stream: bloc.getStream,
      builder: (context, snapshot) {
        return snapshot.data["shop items"].length > 0
            ? shopItemsListBuilder(snapshot)
            : Center(
            child: Text("All items in shop have been taken")
        );
      },
    );
  }
}

Widget shopItemsListBuilder(snapshot) {
   return ListView.builder(
    itemCount: snapshot.data["shop items"].length,
    itemBuilder: (BuildContext context, i) {
      final shopList = snapshot.data['shop items'];
      return ListTile(
        title: Text(shopList[i]['name']),
        subtitle: Text("\$${shopList[i]['price']}"),
        trailing: IconButton(
          icon: Icon(Icons.add_shopping_cart),
          onPressed: () {
            bloc.addToCart(shopList[i]);
          },
        ),
        onTap: () {},
      );
    },
  );
}


