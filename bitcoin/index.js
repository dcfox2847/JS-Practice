//jshint exversion: 6

// Require packages
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

//Declare app variable to use Express methods
const app = express();

//declare that the app should be using the 'urlencoded' parsing feature
app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var baseUrl = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    var finalUrl = baseUrl + crypto + fiat;

    request(finalUrl, function(error, response, body){
        var data = JSON.parse(body);
        var price = data.last;
        var currentDate = data.display_timestamp;
        res.write("<p>The current date is: " + currentDate + "</p>")
        res.write("<h1>The current price of " + crypto + " is " + price + " " + fiat + "</h1>");
        res.send();
    });
    console.log("Success! Price sent.");
});

// Set up port to run application
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});