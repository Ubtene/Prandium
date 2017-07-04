var axios = require("axios");
import "whatwg-fetch";

var helper = {
  //this form is sending user credentials to sign up
  postForm(login, email, password, preference, restriction) {
    console.log("in here at top");
    return axios.post("/", {
      restrictions: {
        login: login,
        email: email,
        password: password,
        preference: preference,
        restriction: restriction
      }
    });
    console.log("in postHistory");
  },
  // this form is sending info for yelp search ****** this might not be needed  ***************
  postYelp(zipcode, restaurantType) {
    console.log("yelp");
    return axios.post("/yelp", {
      yelp: { zipcode: zipcode, restaurantType: restaurantType }
    });
  },
  // this function  passes into to the get route in the server for yelp to process
  getYelp(zipcode, restaurantType) {
    return axios
      .get("/yelp", { params: { zipcode: zipcode, type: restaurantType } })
      .then(function(result) {
        console.log(result);
        return result;
      });
  },
  // this is used to capture information from the google api and send it to /api/user
  getGoogle() {
    return axios.get("/api/user").then(function(result) {
      console.log(result);
      return result;
    });
  },
  getLocal(user, password) {
    return axios
      .post("/localuser", { user: user, password: password })
      .then(function(result) {
        console.log(result);
        return result;
      });
  }
};

module.exports = helper;
