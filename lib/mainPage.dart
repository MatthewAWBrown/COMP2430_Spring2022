import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'components/paddle.dart';
import 'components/puck.dart';
import 'components/pauseScreen.dart';
import 'components/score.dart';

class MainPage extends StatefulWidget {

  @override
  State<MainPage> createState() => _MainPageState();
}

enum direction { UP, DOWN, LEFT, RIGHT }

class _MainPageState extends State<MainPage> with SingleTickerProviderStateMixin {


  // game state
  bool gameStarted = false;
  double playerX = -0.2;
  double paddleWidth = 0.4;
  int enemyScore = 0;
  int playerScore = 0;

  // enemy variables
  double enemyX = -0.2;

  // puck
  double puckX = 0;
  double puckY = 0;
  var goY = [direction.UP, direction.DOWN];
  var goX = [direction.LEFT, direction.RIGHT];
  var puckYDirection = direction.DOWN;
  var puckXDirection = direction.LEFT;

  T getRandomElement<T>(List<T> list) {
    final random = new Random();
    var i = random.nextInt(list.length);
    return list[i];
  }

  void startGame() {
    puckYDirection = getRandomElement(goY);
    puckXDirection = getRandomElement(goX);
    gameStarted = true;
    Timer.periodic(const Duration(milliseconds: 16), (timer) {
      updateDirection();
      movePuck();
      moveEnemy();
      if (enemyScored()) {
        ++enemyScore;
        timer.cancel();
        _showDialog(false);
      }
      if (playerScored()) {
        ++playerScore;
        timer.cancel();
        _showDialog(true);
      }
    });
  }

  void _showDialog(bool playerWin) {
    showDialog(
        context: context,
        barrierDismissible: false,
        builder: (BuildContext context){
          return AlertDialog(
            backgroundColor: Colors.white70,
            title: Center(
              child: Text(
                playerWin ? "YOU HAVE THE HIGH GROUND" : "YOU UNDERESTIMATE MY POWER",
                style: TextStyle(color: Colors.black),
              ),
            ),
            actions: [
              GestureDetector(
                onTap: resetGame,
                child: ClipRRect (
                  borderRadius: BorderRadius.circular(5),
                  child: Container(
                    padding: EdgeInsets.all(7),
                    color: playerWin ? Colors.lightBlueAccent : Colors.redAccent,
                    child: Text(
                      "PLAY AGAIN?",
                      style: TextStyle(color: playerWin ? Colors.blue[900] : Colors.red[900]),
                    ),
                  ),
                ),
              )
            ],
          );
        });
  }

  void resetGame() {
    Navigator.pop(context);
    setState(() {
      gameStarted = false;
      puckX = 0;
      puckY = 0;
      playerX = -0.2;
      enemyX = -0.2;
    });
  }

  bool enemyScored() {
    if (puckY >= 0.85) {
      return true;
    }
    return false;
  }

  bool playerScored() {
    if (puckY <= -0.85){
      return true;
    }
    return false;
  }

  void updateDirection() {
    setState(() {
      if (puckY >= 0.77 && playerX + paddleWidth >= puckX && playerX <= puckX) {
        puckYDirection = direction.UP;
      } else if (puckY <= -0.77 && enemyX + paddleWidth >= puckX && enemyX <= puckX) {
        puckYDirection = direction.DOWN;
      }

      // wall hitting simulation
      if (puckX >= 1) {
        puckXDirection = direction.LEFT;
      } else if (puckX <= -1) {
        puckXDirection = direction.RIGHT;
      }
    });
  }

  void movePuck() {
    setState(() {
      // vertical change
      if (puckYDirection == direction.DOWN) {
        puckY += 0.01;
      } else if (puckYDirection == direction.UP) {
        puckY -= 0.01;
      }

      // horizontal change
      if (puckXDirection == direction.LEFT) {
        puckX -= 0.01;
      } else if (puckXDirection == direction.RIGHT) {
        puckX += 0.01;
      }
    });
  }

  void moveEnemy() {
    setState(() {
      //enemyX = puckX;
      if (enemyX <= (puckX - 0.05) && !((enemyX + paddleWidth) >= 1)) {
        enemyX += 0.1;
      } else if (enemyX >= (puckX + 0.05)) {
        enemyX -= 0.1;
      }
      }
    );
  }

  void moveLeft() {
    setState(() {
      if (!(playerX - 0.1 <= -1)) {
        playerX -= 0.1;
      }
    });
  }

  void moveRight () {
    setState(() {
      if (!(playerX + paddleWidth >= 1)) {
        playerX += 0.1;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return RawKeyboardListener(
      focusNode: FocusNode(),
      autofocus: true,
      onKey: (event) {
        if (event.isKeyPressed(LogicalKeyboardKey.arrowRight)){
          moveRight();
        } else if (event.isKeyPressed(LogicalKeyboardKey.arrowLeft)){
          moveLeft();
        }
      },
      child: GestureDetector(
          onTap: startGame,
          child: Scaffold(
            backgroundColor: Colors.grey[900],
            body: Center(
              child: Stack(
                children: [
                  Container(
                    alignment: Alignment.bottomRight,
                    child: ElevatedButton.icon(
                        onPressed: moveRight,
                        icon: Icon(Icons.arrow_forward),
                        label: Text('Right'),
                    ),
                  ),
                  Container(
                    alignment: Alignment.bottomLeft,
                    child: ElevatedButton.icon(
                      onPressed: moveLeft,
                      icon: Icon(Icons.arrow_back),
                      label: Text('Left'),
                    ),
                  ),
                  // start game
                  PauseScreen(
                    gameStarted: gameStarted,
                  ),

                  // score
                  Score(
                    gameStarted: gameStarted,
                    enemyScore: enemyScore,
                    playerScore: playerScore,
                  ),

                  // enemy paddle
                  Paddle(
                    x: enemyX,
                    y: -0.8,
                    paddleWidth: paddleWidth,
                    isEnemy: true,
                  ),

                  // player paddle
                  Paddle(
                    x: playerX,
                    y: 0.8,
                    paddleWidth: paddleWidth,
                    isEnemy: false,
                  ),

                  // le puck
                  Puck(
                      x: puckX,
                      y: puckY
                  ),
                ],
              )
            )
          ),
        ),
    );
  }
}
