var axios = require("axios");
import "whatwg-fetch";

var helper = {
	//this form is sending user credentials to sign up
	postForm(login, email, password, preference, restriction) {
		console.log("data to send to backend from the sign-up form", arguments);
		// console.log("in here at top");
		return axios.post("/", {
			restrictions: {
				login: login,
				email: email,
				password: password,
				preference: preference,
				restriction: restriction
			}
		});
		// commented out this console log statement because it is unreachable due to the return keyword above. It won't execute
		// console.log("in postHistory");
	},
	// this form is sending info for yelp search ****** this might not be needed  ***************
	postYelp(zipcode, restaurantType) {
		console.log("yelp");
		return axios.post("/yelp", {
			yelp: {
				zipcode: zipcode,
				restaurantType: restaurantType
			}
		});
	},
	
	
	

	// ****************************************YELP API CALLS BELLOW*******************************************
	
	// this function  passes into to the get route in the server for yelp to process
	getYelp(zipcode, restaurantType) {
		return axios
			.get("/yelp", {
				params: {
					zipcode: zipcode,
					type: restaurantType
				}
			})
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
	}
};

module.exports = helper;
