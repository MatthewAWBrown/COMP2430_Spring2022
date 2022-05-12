import 'package:flutter/material.dart';


class Results extends StatelessWidget {
  final int age;
  final double weight;
  final double height;
  final bool gender;
  Results({required this.age, required this.weight, required this.height, required this.gender});


  @override
  String msg = "";
  double result = 0.0;
  Widget build(BuildContext context) {
    // if values entered indicate the user is under 20 and male
    if (age != 0 && age < 20 && weight != 0 && height != 0 && gender == true) {
      result = weight / (height * height);
      result = double.parse(result.toStringAsFixed(2));
      if (result < 18.7) {
        msg = 'You are considered underweight for a child.';
      } else if (result < 26.3) {
        msg = 'You are considered a normal weight for a child.';
      } else {
        msg = 'You are considered overweight for a child.';
      }
      // if values entered indicate the user is under 20 and female
    } else if (age != 0 && age < 20 && weight != 0 && height != 0 && gender == false){
      result = weight / (height * height);
      result = double.parse(result.toStringAsFixed(2));
      if (result < 17.8) {
        msg = 'You are considered underweight for a child.';
      } else if (result < 26.1) {
        msg = 'You are considered a normal weight for a child.';
      } else {
        msg = 'You are considered overweight for a child.';
      }
    }
    // easter egg
    else if (height == 187.96 && weight == 95 && age < 30 && age != 0){
      result = weight / (height * height);
      result = double.parse(result.toStringAsFixed(2));
      msg = 'You have the same BMI as Batman! (Also, you are considered overweight).';
      // check that all values have been entered
    } else if (height != 0 && weight != 0 && age != 0) {
      result = weight / (height * height);
      result = double.parse(result.toStringAsFixed(2));
      if (result < 18.5) {
        msg = 'You are considered underweight.';
      } else if (result < 25) {
        msg = 'You are considered normal weight.';
      } else if (result < 30) {
        msg = 'You are considered overweight.';
      } else {
        msg = 'You are considered obese.';
      }
      // error message, some field was left blank
    }  else {
      result = 0.00;
      msg = 'You did not enter valid information.';
    }


    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue[900],
        title: const Text('Your BMI is:'),
        centerTitle: true,
      ),
      body: Container(
        padding: EdgeInsets.fromLTRB(5, 120, 5, 0),
        alignment: Alignment.center,
        child: Column(
          children: [
            Text(
              '$result',
              style: const TextStyle(
                fontSize: 30
              ),
              textAlign: TextAlign.center,
            ),
            Text(
              msg,
              style: const TextStyle(
                fontSize: 26
              ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }
}
