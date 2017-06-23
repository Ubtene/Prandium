import React from 'react';
import Yelpresults from './Yelpresults';
import Yelpsearch from './Yelpsearch';


class Yelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    zipcode: '',
    term: '',
    restaurantInfo: []
    }
   this.handleSubmit = this.handleSubmit.bind(this);
   this.resetSubmit = this.resetSubmit.bind(this);
   this.set = this.set.bind(this);
  }

  handleSubmit(zipcode, term){
  event.preventDefault();
  console.log('I love react....');
  this.setState({
  zipcode: zipcode, term: term
  })
}

	set(info){
	console.log("in setRestaurantInfo");	
	this.setState({restaurantInfo: info})
	
	}


resetSubmit(zipcode, term){
	event.preventDefault();
	this.setState({
	zipcode: zipcode, term: term
		})
	}

  render() {
    return (
        <div>
     
        {this.state.zipcode ? <Yelpresults term={this.state.term} zipcode={this.state.zipcode} onSubmit={this.resetSubmit} restaurantInfo={this.state.restaurantInfo} /> : <Yelpsearch onSubmit={this.handleSubmit} set={this.set} /> }
        </div>
    )
  }

}

module.exports = Yelp;