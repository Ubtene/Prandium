var path = require('path');
var session = require('express-session');
var mongoose = require("mongoose");
var userMeals = require("../models/Users.js");
var express = require("express");
var unirest = require("unirest");
var app = express();

module.exports = function (app) {

    app
        .get("/", function (req, res) {

            res.sendFile(path.resolve(__dirname + "/../views/signup.html"));
        });

    app.get("/main", function (req, res) {

        res.sendFile(path.resolve(__dirname + '/../views/index.html'));

    });

    app.post("/api/userdatabase", function (req, res) {

        var userID = req.body.user
        var preferences = req.body.preferences
        var restrictions = req.body.restrictions
        var email = req.body.email
        var password = req.body.password
        var days = req.body.days

        console.log("got to the backend");

        // These code snippets use an open-source library. http://unirest.io/nodejs
        unirest
            .get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitL" +
                "icense=false&number=100&tags=" + preferences + "%2C" + restrictions)
            .header("X-Mashape-Key", "RdXEu67LNZmshdxsrbAGe3gh9fAKp1VdlhxjsnnRI93ldi2bTU")
            .header("Accept", "application/json")
            .end(function (result) {

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

                db.on("error", function (err) {
                    console.log("Mongoose Error: ", err);
                });

                db.once("open", function () {
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
                }, function (err) {
                    if (err) {
                        console.log(err);
                    } else {

                        console.log("saved your meals");

                    }
                });

                // $.post("/api/mealpan", function (res, req) {

                //     var mealsByDay = {

                //         mealsForDays: days
                //     }

                //     userMeals.find({
                //         userID: userID
                //     }, function (err, data) {

                //         for (i = 0; i < days.length; i++) {

                //             userMeals
                //                 .find({userID: userID})
                //                 .limit(10)
                //                 .exec(function (err, data) {

                //                     var mongoObj = data[0];

                //                     days[i].meals = mongoObj;

                //                 });

                //             // res.send(mealByDay);
                //         };
                //     });
                // });

            });

        //end of spoonacular query
    });

    //end of post

};
