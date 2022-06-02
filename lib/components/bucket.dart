import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class Bucket extends StatelessWidget {

  final double x;
  final double y;
  final bucketWidth;

  Bucket({required this.x, required this.y, required this.bucketWidth});

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment (x, y),
      child: ClipRRect (
        borderRadius: BorderRadius.circular(10),
        child: Container(
          height: 200,
          decoration: BoxDecoration(
            image: DecorationImage(
              image: AssetImage('assets/images/bucket.png'),
            ),
          ),
          width: MediaQuery.of(context).size.width * bucketWidth / 2,
        ),
      ),
    );
  }
}