const React = require('react');
import helpers from './../utils/helpers.js';

class Query extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      login: "",
      email: '',
      password: "",
      preferences: ''


  };
  console.log(this.state);
  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

         this.setState({
           [name]: value
         });
  }

  handleSubmit(event) {
        event.preventDefault();           
        helpers.postForm(this.state.login, this.state.password, this.state.email, this.state.preferences);
        console.log(this.state);
  }

  render() {
            return (  
  
  

  
  <div className="panel panel-default">
        <div className="panel-heading">
          <h1 className="panel-title text-center"><strong>PRADIUM</strong></h1>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4>
                <strong>SIGN UP</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <h4> Please choose a login name: </h4>
              <input
                value={this.state.login}
                type="text"
                className="form-control text-center"
                id="login"
                name="login"
                onChange={this.handleChange}
                required
              />
              <h4>
                <strong>Please Enter a Password</strong>
              </h4>   
              <input
                value={this.state.password}
                type="text"
                className="form-control text-center"
                id="password"
                name="password"
                onChange={this.handleChange}
                required
              />
              <h4>
                <strong>Please enter your email</strong>
              </h4>
              <input
                value={this.state.email}
                type="text"
                className="form-control text-center"
                id="email"
                name="email"
                onChange={this.handleChange}
                required
              />
              <br />
              Meal type Preference Option
              <br/>
              <select 
              name="preferences"

              onChange={this.handleChange}
              >
                <option value=""> </option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan </option>
                <option value="GlutenFree">GlutenFree </option>
                <option value="Pescetarian">Pescetarian </option>
              </select>
             
              <br/>
              <br/>
              <input
                value="Submit"
                className="btn btn-primary"
                type="submit"
              />
               
              
            </div>
          </form>
        </div>
      </div>
          )
        }


}

module.exports = Query;
