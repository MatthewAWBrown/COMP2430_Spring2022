import 'package:flutter/material.dart';
import 'package:mc_challenge_1/pages/results.dart';


class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final TextEditingController _heightController = TextEditingController();
  final TextEditingController _weightController = TextEditingController();
  final TextEditingController _ageController = TextEditingController();

  double height = 0;
  double weight = 0;
  int age = 0;

  bool gender  = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('BMI Calculator'),
        centerTitle: true,
        backgroundColor: Colors.blue[900],
      ),
      body: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10.0),
        child: Column(
          children: [
            TextField(
              controller: _heightController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: 'height in cm',
                icon: Icon(Icons.trending_up),
              ),
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _weightController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: 'weight in kg',
                icon: Icon(Icons.line_weight),
              ),
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _ageController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: 'age',
                icon: Icon(Icons.cake),
              ),
            ),
            const SizedBox(height: 15),
            Row(
              children: [
                SizedBox(width: MediaQuery.of(context).size.width * 0.05),
                Container(
                  margin: const EdgeInsets.only(top: 20, bottom: 10),
                  width: MediaQuery.of(context).size.width * 0.4,
                  height: MediaQuery.of(context).size.height * 0.2,
                  child: Material(
                    borderRadius: const BorderRadius.all(Radius.circular(15)),
                    color: gender == true ? Colors.orangeAccent : Colors.blueGrey,
                    child: InkWell(
                      borderRadius: const BorderRadius.all(Radius.circular(15)),
                      child: Column(
                        children: const [
                          SizedBox(height: 10),
                          Icon(Icons.male,
                            size: 100,
                            color: Colors.lightBlueAccent,
                          ),
                          Text(
                            "Male",
                            textAlign: TextAlign.center,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                                fontSize: 20
                            ),
                          ),
                        ],
                      ),
                      onTap: (){
                        setState(() {
                          gender = true;
                        });
                      },
                      focusColor: Colors.lightBlueAccent,
                    ),
                  ),
                ),
                SizedBox(width: MediaQuery.of(context).size.width * 0.05),
                Container(
                  margin: const EdgeInsets.only(top: 20, bottom: 10,),
                  width: MediaQuery.of(context).size.width * 0.4,
                  height: MediaQuery.of(context).size.height * 0.2,
                  child: Material(
                    borderRadius: const BorderRadius.all(Radius.circular(15)),
                    color: gender == false ? Colors.orangeAccent : Colors.blueGrey,
                    child: InkWell(
                      child: Column(
                        children: const [
                          SizedBox(height: 10),
                          Icon(Icons.female,
                            size: 100,
                            color: Colors.pinkAccent,
                          ),
                          Text(
                            "Female",
                            textAlign: TextAlign.center,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                              fontSize: 20,
                            ),
                          ),
                        ],
                      ),
                      onTap: (){
                        setState ((){
                          gender = false;
                        });
                      },
                    ),
                  ),
                ),
              ],
            ),
            Column(
              children: [
                ElevatedButton(
                  onPressed: (){
                    height = double.parse(_heightController.text) / 100; // read and convert height to metres
                    weight = double.parse(_weightController.text);  // read weight
                    age = int.parse(_ageController.text); // read age
                    Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (context) => Results(age: age, weight: weight, height: height, gender: gender),
                      ),
                    );
                    },
                  child: const Text(
                    'Calculate',
                    style: TextStyle(
                        color: Colors.white
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}



