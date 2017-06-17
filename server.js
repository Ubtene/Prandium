// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var unirest = require("unirest");
const yelp = require('yelp-fusion');

// // Require History Schema
// var History = require("./models/History");


//My Yelp Access Token
const clientId = 'pbRwg0shy1Zy_gUqWLpiYQ';
const clientSecret = '499HGjfOQVwIUWD9ys11menFEA8Ytu77zNrjRCVJ0qYHUQTdpfqdDKNaR7QDYNPy';
//Yelp Search Request
const searchRequest = {
  term:'vegan',
  location: 'san francisco, ca'
  
};
// Yelp response
yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  });
}).catch(e => {
  console.log(e);
});
//Ending of the Yelp stuff.

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
// mongoose.connect("mongodb://admin:codingrocks@ds023664.mlab.com:23664/reactlocate");
// var db = mongoose.connection;

// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {

unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/videos/search?includeingredients=chicken&avacado&maxLength=999&minLength=0&number=10&offset=0&query=quesadilla")
.header("X-Mashape-Key", "RdXEu67LNZmshdxsrbAGe3gh9fAKp1VdlhxjsnnRI93ldi2bTU")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});


app.get("/t", function(req,res){

});

});

// // This is the route we will send GET requests to retrieve our most recent search data.
// // We will call this route the moment our page gets rendered
// app.get("/api", function(req, res) {

//   // We will find all the records, sort it in descending order, then limit the records to 5
//   History.find({}).sort([
//     ["date", "descending"]
//   ]).limit(5).exec(function(err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });

// This is the route we will send POST requests to save each search.
// app.post("/api", function(req, res) {
//   console.log("BODY: " + req.body.location);

//   // Here we'll save the location based on the JSON input.
//   // We'll use Date.now() to always get the current date time
//   History.create({
//     location: req.body.location,
//     date: Date.now()
//   }, function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Saved Search");
//     }
//   });
// });

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
