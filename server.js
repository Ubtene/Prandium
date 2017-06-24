// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var unirest = require("unirest");
const yelp = require('yelp-fusion');
const clientId = 'pbRwg0shy1Zy_gUqWLpiYQ';
const clientSecret = '499HGjfOQVwIUWD9ys11menFEA8Ytu77zNrjRCVJ0qYHUQTdpfqdDKNaR7QDYNPy';



var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var session = require('express-session');
var CurrentUser = {};

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
// supply a session 'secret' to hash the session (security measure)
app.use(session({
    secret: "mySecret"
}));
// initialize the passport middleware
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    // placeholder for custom user serialization
    // null is for errors
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    // placeholder for custom user deserialization.
    // null is for errors
    done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: "848838294022-7h0tlqrqq67isbjjav949n6uaor9cocl.apps.googleusercontent.com",
        clientSecret: "Fn43-sWs-iBcdPHPjnBC3zFe",
        callbackURL: "http://localhost:3000/auth/google/callback"
    },


    function(accessToken, refreshToken, profile, cb) {
        console.log('in passport.usenewgoogle strategy');
        // console.log(accessToken);

        cb(null, accessToken, profile, refreshToken);

        var given_name = profile.name.givenName;

        var user_id = profile.id;

        CurrentUser["user_id"] = user_id;

        CurrentUser["given_name"] = given_name;

        app.get("/api/user", function(req, res) {
            res.json(CurrentUser);
            res.end()
        });

    }));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));


app.get('/auth/google/callback', passport.authenticate('google', {
    
    successRedirect: '/success',
    failureRedirect: '/',
}));

app.get('/success', isAuthenticated, function(req, res) {
    console.log("in success");
    // var successObj = {
    //   google: true,
    // };
    // console.log(successObj);


});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


function isAuthenticated(req, res, next) {
    if (req.user)
        return next();
    // if req.user does not exist redirect them to the fail page.  Here you can either redirect users back to the login page
    // res.redirect('/fail');
    console.log("failure");
};

app.use(express.static("./public"));

app.get("/", function(req,res){

	    // res.sendFile(__dirname + "/public/index.html");
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
