import 'dart:async';
import 'dart:math';
import 'package:flutter/material.dart';

import './components/bucket.dart';
import './components/startScreen.dart';
import './components/score.dart';
import './components/ball.dart';

class GamePage extends StatefulWidget {

  @override
  State<GamePage> createState() => _GamePageState();
}

enum direction {DOWN}

class _GamePageState extends State<GamePage> with SingleTickerProviderStateMixin {

  // game state
  bool gameStarted = false;
  double bucketWidth = 0.4;
  double playerX = -0.2;
  double randomdouble = Random().nextDouble();
  var ballDrop = direction.DOWN;
  double ballY = -1;
  late Animation<double> animation;
  late AnimationController controller;
  int score = 0;

  void startGame() {
    //initState;
    ballDrop;
    gameStarted = true;
    Timer.periodic(const Duration(milliseconds: 32), (timer) {
      dropBall;
      ballY += 0.01;
      randomdouble = Random().nextDouble();
    });
  }

  void dropBall(){
    print(Container(
      alignment: Alignment(randomdouble, ballY),
      child: Container(
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: Colors.white,
        ),
        width: 20,
        height: 20,
      ),
    ));
  }


  void scorePoint() {
    if (ballY >= 0.77 && playerX + bucketWidth >= randomdouble && playerX <= randomdouble) {
      ++score;
    }
  }

  @override
  Widget build(BuildContext context) {

    void movePlayer(DragUpdateDetails update) {
      setState(() {
        double n = update.delta.dx / (MediaQuery.of(context).size.width / 2);
        if (playerX + n >= -1 && playerX + bucketWidth + n <= 1.4) {
          playerX += n;
        }
      });
    }

    return GestureDetector(
      onTap: startGame,
        child: Scaffold(
          backgroundColor: Colors.grey[900],
          body: Center(
            child: Stack(
              children: [
                StartScreen(
                  gameStarted: gameStarted,
                ),
                GestureDetector(
                  onHorizontalDragUpdate: (DragUpdateDetails update ) => movePlayer(update),

                  child: Bucket(
                    x: playerX,
                    y: 1.1,
                    bucketWidth: bucketWidth,
                  ),
                ),

                Score(
                  gameStarted: gameStarted,
                  playerScore: score,
                ),
                Ball(
                  x: randomdouble,
                  y: ballY,
                ),
              ],
            ),
          ),
        ),
      );
  }
}
