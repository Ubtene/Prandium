  // Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");



// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(location) {

    console.log(location);

    // Figure out the geolocation
    // var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
    // return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      // if (response.data.results[0]) {
        // return response.data.results[0].formatted;
      // }
      // If we don't get any results, return an empty string
      // return "";
    // });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  },

  postForm: function(login, pword, email, preference){
    console.log(login, pword, email, preference);
    return axios.post("/", {login: login, pword: pword, email: email, preference: preference})
    console.log(login);
  }



};

// We export the API helper
module.exports = helper;