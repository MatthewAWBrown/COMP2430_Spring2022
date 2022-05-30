import 'package:flutter/material.dart';

class Paddle extends StatelessWidget {

  final double x;
  final double y;
  final paddleWidth;
  final isEnemy;

  Paddle({required this.x, required this.y, required this.paddleWidth, required this.isEnemy});

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment((2*x + paddleWidth)/(2-paddleWidth), y),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(10),
        child: Container(
          color: isEnemy ? Colors.red : Colors.lightBlueAccent,
          height: 20,
          width: MediaQuery.of(context).size.width * paddleWidth / 2,
        ),
      ),
    );
  }
}
