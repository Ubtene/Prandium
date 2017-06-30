  var mongoose = require("mongoose");
   // var uniqueValidator = require('mongoose-unique-validator');
   passportLocalMongoose = require("passport-local-mongoose");

    var Schema = mongoose.Schema;

      var MealSchema = new Schema({
        userID: {
          type: String,
          // unique: true

        },
        preferences: {

        	type:String,


        },
        restrictions:{

        	type: Array,

        },
        userEmail: {
          type: String,
          // unique: true

        },
        meals: {
          type: Array
        },

        mealsForTheWeek: {
          type: Array
        },
        date: {
          type: Date
        }

      });

      // MealSchema.plugin(uniqueValidator);
      
      //Using this plugin to make a Passport Local SignUp and Sign-IN
      MealSchema.plugin(passportLocalMongoose);


    var userMeals = mongoose.model("userMeals", MealSchema);

module.exports = userMeals; 