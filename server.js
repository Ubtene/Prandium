// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var unirest = require("unirest");
const yelp = require('yelp-fusion');
const clientId = 'pbRwg0shy1Zy_gUqWLpiYQ';
const clientSecret = '499HGjfOQVwIUWD9ys11menFEA8Ytu77zNrjRCVJ0qYHUQTdpfqdDKNaR7QDYNPy';

// // Require History Schema
// var History = require("./models/History");

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


app.use(express.static("./public"));

app.get("/", function(req,res){

	    res.sendFile(__dirname + "/public/index.html");
})

app.post("/", function(req,res){
console.log(req.body);
res.json("thanks");

})

app.post('/yelp', function(req,res){

	
	console.log(req.body);



})



app.get("/yelp", function(req,res){
console.log('in/yelpget');
// console.log("-------------------------")
// console.log("this is in get yelp" + req.body);
// console.log("-------------------------")
// console.log("Start of the yelp response");
console.log(req.query.zipcode);
console.log(req.query.type);
        // Yelp response

  const searchRequest = {
  term: req.query.type,
  location: req.query.zipcode
  
};


      yelp.accessToken(clientId, clientSecret).then(response =>  
      {
            const client = yelp.client(response.jsonBody.access_token);

            client.search(searchRequest).then(response => 
            {
              const firstResult = response.jsonBody.businesses[0];
              const prettyJson = JSON.stringify(firstResult, null, 4);
              // console.log(prettyJson);
              res.send(firstResult);
              // console.log("End of the Yelp Response");
            });
      }).catch(e => 
      {
        console.log(e);
      });




});



// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
