var axios = require("axios");   

var helper = {

		//this form is sending user credentials to sign up
	postForm(login, email, password, preference, restriction) {
			console.log('in here at top');
		 return axios.post("/", {restrictions:{login: login, email: email, password: password, preference: preference, restriction: restriction}});
		         console.log("in postHistory");

	},
	// this form is sending info for yelp search
	postYelp(zipcode, restaurantType){
		console.log('yelp');
		return axios.post('/yelp', {yelp:{zipcode: zipcode, restaurantType: restaurantType}});	
	},

	getYelp(zipcode, restaurantType){
		return axios.get('/yelp', { params: {zipcode: zipcode, type: restaurantType}}).then(function(result){
			console.log(result);
			return(result);
		})

	},

	getGoogle(){
		return axios.get('/auth/google');
		console.log("sent google");
	}

};


module.exports = helper;