import 'package:flutter/material.dart';

class Score extends StatelessWidget {

  final bool gameStarted;
  final enemyScore;
  final playerScore;

  Score({required this.gameStarted, required this.enemyScore, required this.playerScore});

  @override
  Widget build(BuildContext context) {
    return gameStarted ? Stack(
      children: [
        Container(
          alignment: Alignment.center,
          child: Container(
            height: 1,
            width: MediaQuery.of(context).size.width / 3,
            color: Colors.grey[700],
          ),
        ),
        // enemy score
        Container(
          alignment: Alignment(-0.8, -0.75),
          child: Text(
            enemyScore.toString(),
            style: TextStyle(
              color: Colors.grey[700],
              fontSize: 50,
            ),
          ),
        ),
        // player score
        Container(
          alignment: Alignment(0.8, 0.75),
          child: Text(
            playerScore.toString(),
            style: TextStyle(
              color: Colors.grey[700],
              fontSize: 50,
            ),
          ),
        )
    ]
    ) : Container ();
  }
}
