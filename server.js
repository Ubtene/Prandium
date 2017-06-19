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
            res.json(CurrentUser);
            res.end()
        });



    }));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/views/signup.html");
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));


app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/success',
    failureRedirect: '/',
}));


app.get('/success', isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

function isAuthenticated(req, res, next) {
    if (req.user)
        return next();
    // if req.user does not exist redirect them to the fail page.  Here you can either redirect users back to the login page
    // res.redirect('/fail');
    console.log("failure");
};

app.get("/main" , function(req,res) {

  res.sendFile(path.join(__dirname + '/views/index.html'));

});

app.post("/api/userdatabase", function(req, res) {


    var userID = req.body.user
    var grestrictions = req.body.generalRestrictions
    var prestrictions = req.body.particularRestrictions
    var email = req.body.email
    var days = req.body.days


    // These code snippets use an open-source library. http://unirest.io/nodejs
    unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=100&tags=" + grestrictons + "%2C" + prestrictions)
        .header("X-Mashape-Key", "RdXEu67LNZmshdxsrbAGe3gh9fAKp1VdlhxjsnnRI93ldi2bTU")
        .header("Accept", "application/json")
        .end(function(result) {

            console.log('got here');

            console.log(result);

            var mealPlanArray = [];

            for (i = 0; i < 7; i++) {

                mealPlanArray.push(result.body.recipes[i]);
            }

            console.log("saved to array");

            // MongoDB configuration (Change this URL to your own DB)
            mongoose.Promise = global.Promise;
            mongoose.connect("mongodb://127.0.0.1:27017/Prandium");
            var db = mongoose.connection;

            db.on("error", function(err) {
                console.log("Mongoose Error: ", err);
            });

            db.once("open", function() {
                console.log("Mongoose connection successful.");
            });

            userMeals.create({
                userID: userID,
                userEmail: email,
                meals: mealPlanArray,
                grestrictions: grestrictions,
                prestrictions: prestrictions,
                days: days,
                date: Date.now()
            }, function(err) {
                if (err) {
                    console.log(err);
                } else {

                    console.log("saved your meals");

                        }


                        $.post("/api/mealpan",  function (res, req) {


                        	var mealsByDay = {

                        		meals: days
                        	}

                               userMeals.find({
                               userID: userID
                              }, function(err, data) {

                        for (i = 0; i < days.length ;i++) {

                        	userMeals.find({
                                userID: userID
                            }).limit(10).exec(function(err, data) {

                                var mongoObj = data[0];

                                 days[i].meals = mongoObj;


                            });



                        	res.send(mealByDay)

                        });

                        // res.send(mongoObj);

                    });
                }

            });


            //end of spoonacular query      
        });

    //end of post    
});




// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
