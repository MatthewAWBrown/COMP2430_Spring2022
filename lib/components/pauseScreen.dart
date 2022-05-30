import 'package:flutter/material.dart';

class PauseScreen extends StatelessWidget {

  final bool gameStarted;

  PauseScreen({required this.gameStarted});

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment(0, -0.2),
      child:
        Text(
          gameStarted ? '' : 'T A P  T O  P L A Y',
          style: TextStyle(
            color: Colors.white
          ),
        ),
    );
  }
}
