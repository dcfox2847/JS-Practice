// A BMI calculator using express

//Setting requirements for express and body-parser

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Routes

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/official", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/", function(req, res){
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is: " + result + ".");
});

app.post("/official", function(req, res){
    var height = parseFloat(req.body.height) * 0.025;
    var weight = parseFloat(req.body.weight) * 0.45;
    var squareHeight = Math.pow(height, 2);
    var bmiPercentage = weight / squareHeight;
    res.send("You body mass index is: " + bmiPercentage + " ."); 
});

// Set listener

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});