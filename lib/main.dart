/// Matthew Brown
/// COMP-2430 Mobile Computer Technology
/// Exercise 1
import 'package:flutter/material.dart';
import 'package:exercise_1/pages/cart.dart';
import 'package:exercise_1/pages/shop.dart';

void main () => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Map<int, Color> color = {
      50: Color.fromRGBO(160, 32, 240, .1),
      100: Color.fromRGBO(160, 32, 240, .2),
      200: Color.fromRGBO(160, 32, 240, .3),
      300: Color.fromRGBO(160, 32, 240, .4),
      400: Color.fromRGBO(160, 32, 240, .5),
      500: Color.fromRGBO(160, 32, 240, .6),
      600: Color.fromRGBO(160, 32, 240, .7),
      700: Color.fromRGBO(160, 32, 240, .8),
      800: Color.fromRGBO(160, 32, 240, .9),
      900: Color.fromRGBO(160, 32, 240, 1),
    };
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: MaterialColor(0xFF5E35B1, color),
      ),
      initialRoute: '/',
      routes: {
        '/': (BuildContext context) => ShopItems(),
        '/cart': (BuildContext context) => Cart(),
      }
    );
  }
}
