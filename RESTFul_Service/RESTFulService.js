//Express is required for creating Node.js based web apps
var express = require('express');

//body-parser is used to parse the Request body and populate the req.
var bodyParser = require('body-parser');

// Create Express app
var app = express();

// Setting port no for listening
app.set('port', 9876);
app.use(bodyParser.json());

// To allow CORS - Cross Origin Resrouce Sharing 
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});

//RESTful Methods / APIs

// Get All Heros
app.get('/', function (req, res) {
    res.send('<h1>RESTFul Service using Express!</h1>');
});

//Add a new hero
app.post("/cab", function (req, res) {
    var data = {
        deliveryCity: "",
        paymentMode: "",
        discount: 0
    };
    console.log("Getting Customer credentials: " +
        JSON.stringify(req.body));

    var name = req.body.name.toLowerCase();
    var pwd = req.body.pwd;
    var noofLaptops = req.body.noofLaptops;

    if (name == "admin" && pwd == "abcd") {
        data.deliveryCity = 'Pune';
        data.paymentMode = 'Cash on Delivery';
    }
    else {
        data.deliveryCity = 'Unknown';
        data.paymentMode = 'Unknown';
    }
    if (noofLaptops == 1) {
        data.discount = 10;
    }
    else if (noofLaptops == 2) {
        data.discount = 20;
    }
    else if (noofLaptops >= 3) {
        data.discount = 30;
    }
    res.send(JSON.stringify(data));
});


