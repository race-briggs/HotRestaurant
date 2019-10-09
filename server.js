var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitlist = [];

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/api/waitlist", function(req, res){
  return res.json(waitlist)
})

app.get('/api/reservations', function(req, res){
  return res.json(reservations);
})

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.post("/api/reservations", function(req, res){
  var newReservation = req.body;

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
})

app.listen(PORT, function(){
  console.log('App is listening on PORT ' + PORT);
})