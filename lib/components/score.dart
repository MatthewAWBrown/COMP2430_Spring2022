import 'package:flutter/material.dart';

class Score extends StatelessWidget {

  final bool gameStarted;

  final playerScore;

  Score({required this.gameStarted, required this.playerScore});

  @override
  Widget build(BuildContext context) {
    return gameStarted ? Stack(
        children: [
          // player score
          Container(
            alignment: Alignment(-0.8, -0.75),
            child: Text(
              playerScore.toString(),
              style: TextStyle(
                color: Colors.grey[700],
                fontSize: 50,
              ),
            ),
          ),
          // player score
        ]
    ) : Container ();
  }
}