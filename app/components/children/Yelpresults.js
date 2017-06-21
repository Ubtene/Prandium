var React = require("react");
var helpers = require('./../utils/helpers.js');
var Header = require('./Header');
var NavLink = require('react-router-dom').NavLink;
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var browserHistory = ReactRouter.browserHistory;

class YelpR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      type: ''
  }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
  handleSubmit(event){
        event.preventDefault(); 
         
        console.log(this.state);
        helpers.postYelp(this.state.zipcode, this.state.type);
        browserHistory.push("/")
        // this.setState({newterm: "", startDate: "", endDate: ""})

  }



  handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
  }

  render() {
    return (
      <div className="container" id="rsContainer">
      {/*<Header /> Had header here now moving it to the Routes*/}
      <div className="panel panel-default" id='form'>
        <div className="panel-heading">
          <h1 className="panel-title text-center"><strong>Search Local Restaurants</strong></h1>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">

            

              <input
                value={this.state.type}
                placeholder="Find e.g. Italian, Mexican, Japanese"
                type="text"
                className="form-control text-center restaurantSearch"
                id="type"
                name="type"
                onChange={this.handleChange}
                required
              />


              <input
                value={this.state.zipcode}
                placeholder="Near zipcode"
                type="text"
                className="form-control text-center restaurantSearch"
                id="zipcode"
                name="zipcode"
                onChange={this.handleChange}
                pattern="(\d{5}([\-]\d{4})?)"
                required
              />


                  <input
                  value="Submit"
                  className="btn"
                  type="submit"
                  to='/header'
                  />



            </div>
          </form> 
      </div>   
    </div>
  </div>
       
    );
  }
}

module.exports = YelpR;
