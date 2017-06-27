// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var unirest = require("unirest");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var path = require('path');
var session = require('express-session');
var userMeals = require("./models/Users.js");
var routes = require("./controller/controller.js");
var CurrentUser = {};
var PORT = 3000;
var app = express();



// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

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

        // console.log(accessToken);

        cb(null, accessToken, profile, refreshToken);

        var given_name = profile.name.givenName;

        var user_id = profile.id;

        CurrentUser["user_id"] = user_id;

        CurrentUser["given_name"] = given_name;

        app.get("/api/user", function(req, res) {
        	console.log("doing things");
            res.json(CurrentUser);
            res.end();

            mongoose.Promise = global.Promise;
            mongoose.connect("mongodb://127.0.0.1:27017/Prandium");
            var db = mongoose.connection;

            userMeals.find({user_id:user_id}).exec(function(err, results) {
                console.log(results);
            });
        });

        

    }));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));


app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/success',
    failureRedirect: '/',
}));

app.get('/success', isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));

    
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

require("./controller/controller.js")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
