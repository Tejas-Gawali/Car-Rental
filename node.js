const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const con = require('./connection');
const Connection = require('mysql/lib/Connection');

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/book', function(req, res) {
  res.sendFile(path.join(__dirname, './static/book.html'));
});

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, './static/login.html'));
});

app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, './static/contact.html'));
});

app.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, './static/signup.html'));
});

app.get('/host', function(req, res) {
  res.sendFile(path.join(__dirname, './static/host.html'));
});

app.get('/cars', function(req, res) {
  res.sendFile(path.join(__dirname, './static/cars.html'));
});

app.get('/payment', function(req, res) {
  res.sendFile(path.join(__dirname, './static/payment.html'));
});

app.get('/pay', function(req, res) {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.post('/book', function(req, res) {
  var type = req.body.type;
  var pickupdate = req.body.pickupdate;
  var dropdate = req.body.dropdate;
  var location = req.body.location;
  console.log(req.body);
  var sql = "INSERT INTO book (type_car, pickup_date,drop_date,location) VALUES (?,?,?,?)";
  con.query(sql,[type,pickupdate,dropdate,location], function (err, result) {
    });
  res.redirect('/cars');
});

app.post('/host', function(req, res) {
  var type = req.body.type;
  var colour = req.body.colour;
  var location = req.body.location;
  console.log(req.body);
  var sql = "INSERT INTO host (type, colour,location) VALUES (?,?,?)";
  con.query(sql,[type,colour,location], function (err, result) {
    });
  res.redirect('/');
});

app.post('/signup', function(req, res) {
  var name = req.body.name;
  var phone = req.body.phone;
  var email = req.body.email;
  var password = req.body.password;
  var city = req.body.city;
  var address = req.body.text;
  console.log(req.body);
  var sql = "INSERT INTO signup (name, phone,email,password,city,address) VALUES (?,?,?,?,?,?)";
  con.query(sql,[name,phone,email,password,city,address], function (err, result) {
    });
    res.redirect('/');
});


app.post('/login', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  console.log(req.body);
  var sql = "select name,email from signup where email=? and password=?";
  con.query(sql,[email,password], function (err, result) {
          return console.log(result);
    });
  
  res.redirect('/');
});



 






app.listen(80 , ()=>{
  console.log("Listening to port 80")
})