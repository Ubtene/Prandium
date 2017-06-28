const React = require('react');
var helpers = require('./../utils/helpers.js');
var NavLink = require('react-router-dom').NavLink;
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = Router.Redirect;
var helpers = require('./../utils/helpers.js');
var names = ["peanut", "dairy", "wheat", "pork", "soy", "fish", "shellfish"];




class Query extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      login: "",
      email: '',
      password: "",
      preferences: "",
      peanut: false,
      dairy: false,
      wheat: false,
      pork: false,
      soy: false,
      fish: false,
      shellfish: false,
      restrictions: []
  }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
        var options = ["peanut", "dairy", "wheat", "pork", "soy", "fish", "shellfish"];
        var restrictions = this.state.restrictions;
        var term = [this.state.peanut, this.state.dairy, this.state.wheat, this.state.pork, this.state.soy, this.state.fish, this.state.shellfish];

        for(var i = 0; i < options.length; i++){
            if(term[i]){
              restrictions.push(options[i]);
            }
        }

      this.setState({restrictions: restrictions});
      helpers.postForm(this.state.login, this.state.email, this.state.password, this.state.preferences, this.state.restrictions).then(function(result){

        console.log(result);

      });

      this.setState({
      login: "",
      email: '',
      password: "",
      preferences: '',
      peanut: false,
      dairy: false,
      wheat: false,
      pork: false,
      soy: false,
      fish: false,
      shellfish: false,
      restrictions: []
        })
  }
  render() {
    return (  

    <div className="panel panel-default" id='form'>

        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">

            <h3 id='loginTitle'>Create a Prandium Account</h3>
            <br/>
              <label id="top">
              UserName:
              <input
                value={this.state.login}
                type="text"
                className="form-control"
                id="login"
                name="login"
                onChange={this.handleChange}
                required
              />
              </label>
              <br/>
              <label id="top">
              Password: 
              <input
                value={this.state.password}
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
                required
              />
              </label>
              <br/>
              <label id="top">
              Email:
              <input
                value={this.state.email}
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                required
              />
              </label>

              <br />
              
              <br/>
              <label id="top">
              Meal Preferences:
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
              </label>
              <br />
              <br />


              <fieldset>
              <legend>Dietary Restrictions</legend>

                  {names.map((name, index)=> {

                  this.handleInputChange = this.handleInputChange.bind(this);
                  var term = [this.state.peanut, this.state.dairy, this.state.wheat, this.state.pork, this.state.soy, this.state.fish, this.state.shellfish];
                  var states = ["Peanuts:", "Dairy:", "Wheat:", "Pork:", "Soy:", "Fish:", "Shellfish:"];
                  return (

                  <label key={index}>
                   {states[index]}
                  <input
                      name={name}
                      type="checkbox"
                      checked={term[index]}
                      onChange={this.handleInputChange} />
                  </label>
                  )
              })}
              </fieldset>
             <input value="Submit" className="btn" type="submit"/>
                 
            </div>
          </form>
        </div>
      </div>

    )

  }
}


module.exports = Query;
