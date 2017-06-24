var path = require('path');
var session = require('express-session');
var mongoose = require("mongoose");
var userMeals = require("../models/Users.js");
var express = require("express");
var unirest = require("unirest");
// Load the full build. 
var _ = require('lodash');
var app = express();

module.exports = function(app) {

    app.get("/", function(req, res) {

        res.sendFile(path.resolve(__dirname + "/../views/signup.html"));
    });

    app.get("/main", function(req, res) {

        res.sendFile(path.resolve(__dirname + '/../views/index.html'));

    });

    app.post("/api/userdatabase", function(req, res) {

        var userID = req.body.user
        var preferences = req.body.preferences
        var restrictions = req.body.restrictions
        var email = req.body.email
        var password = req.body.password
        var days = req.body.days

        console.log("running spoonacular");

        // These code snippets use an open-source library. http://unirest.io/nodejs
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitL" +
                "icense=false&number=100&tags=" + preferences + "%2C" + restrictions)
            .header("X-Mashape-Key", "RdXEu67LNZmshdxsrbAGe3gh9fAKp1VdlhxjsnnRI93ldi2bTU")
            .header("Accept", "application/json")
            .end(function(result) {

                var mealPlanArray = [];

                for (i = 0; i < 99; i++) {

                    mealPlanArray.push(result.body.recipes[i]);

                }

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
                    password: password,
                    meals: mealPlanArray,
                    preferences: preferences,
                    restrictions: restrictions,
                    days: days,
                    date: Date.now()
                }, function(err) {
                    if (err) {
                        console.log(err);
                    } else {

                        console.log("saved your meals");

                        userMeals.find({ userID: userID }).exec(function(err, results) {



                            var mealProperty = results[0].meals;

                            for (i = 0; i < days.length; i++) {

                                var number = Math.floor(Math.random() * 100);

                                days[i].meal = mealProperty[number];
                                days[i].meal2 = mealProperty[number + 1];
                                days[i].meal3 = mealProperty[number + 2];

                                console.log(mealProperty[2]);

                                // commence shiffling

                                var shuffledMeals = _.shuffle(mealProperty);

                                console.log(shuffledMeals[2]);

                                userMeals.update({ userID: userID }, { $set: { "meals": shuffledMeals }});

                                 userMeals.findOne({ userID: userID }, "meals" , function (err, meals){

                                    console.log(meals);

                                 });

                                //end of for loop
                            }

                            res.json(days);


                        });

                    }
                });

            });

        //end of spoonacular query
    });

    //exporting
};
