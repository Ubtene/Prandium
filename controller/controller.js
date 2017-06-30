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


        // These code snippets use an open-source library. http://unirest.io/nodejs
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitL" +
                "icense=false&number=3&tags=" + preferences + "%2C" + restrictions)
            .header("X-Mashape-Key", "RdXEu67LNZmshdxsrbAGe3gh9fAKp1VdlhxjsnnRI93ldi2bTU")
            .header("Accept", "application/json")
            .end(function(result) {

                var newObj = JSON.parse(result.raw_body);

                var mealPlanArray = [];

                for (i = 0; i < newObj.recipes.length; i++) {

                    mealPlanArray.push(newObj.recipes[i]); 
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
                    mealsForTheWeek: days,
                    date: Date.now()
                }, function(err) {
                    if (err) {
                        console.log(err);
                    } else {

                        userMeals.find({ userID: userID }).exec(function(err, results) {

                            var mealProperty = results[0].meals;

                            for (i = 0; i < days.length; i++) {

                             var number = Math.floor(Math.random() * 100);

                                days[i].meal = mealProperty[i];

                                // days[i].meal2 = mealProperty[number];
                                // days[i].meal2 = mealProperty[number + 1];
                                // days[i].meal3 = mealProperty[number + 2];

                            }

                         

                            //end of for loop

                            //update mongo for persistence


                            userMeals.update({userID: userID}) , {$set: {mealsForTheWeek: []}} , function (err, result) {

                                    console.log(err);

                            }

                            console.log(days);

                            userMeals.update({userID: userID}) , {$set: {mealsForTheWeek : days}} , function (err, result) {

                                console.log(err);
                            }
                            
                            //send things back

                            var daysObject = {

                                userDays: days,
                            }

                            console.log("sending the object");

                             res.json(daysObject);

                            // commence shiffling

                                var shuffledMeals = _.shuffle(mealProperty);

                                userMeals.update({ userID: userID }, { $set: { "meals": shuffledMeals }});

                                 userMeals.findOne({ userID: userID }, "meals" , function (err, meals){

                                    console.log(err);

                                 });

                            

                           


                        });

                    }
                });

            });

        //end of spoonacular query
    });

     app.get("/api/remove" , function (req, res) {

     var newInfo = req.body;

     console.log(newInfo.meal);


     });

    //exporting
};
