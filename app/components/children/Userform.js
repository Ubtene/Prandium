  const React = require('react');
var helpers = require('./../utils/helpers.js');



// import helpers from './../utils/helpers.js';
var names = ["peanut", "dairy", "wheat", "pork", "soy", "fish", "shellfish"];
var options
class Query extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
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


  };
  console.log(this.state);
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
        var term = [this.state.peanut, this.state.dairy, this.state.wheat, this.state.pork, this.state.soy, this.state.fish, this.state.shellfish];
        var restrictions = this.state.restrictions;

        for(var i = 0; i < options.length; i++){
            if(term[i]){
              restrictions.push(options[i]);
            }
        }

        this.setState({restrictions: restrictions});
        helpers.postForm(this.state.login, this.state.email, this.state.password, this.state.preferences, this.state.restrictions);
        console.log(this.state);



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
                className="form-control text-center"
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
                className="form-control text-center"
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
                className="form-control text-center"
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


              <label>
                Peanuts:
                <input
                  name="peanut"
                  type="checkbox"
                  checked={this.state.peanut}
                  onChange={this.handleInputChange} />
              </label>

            

              <label>
                Dairy:
                <input
                  name="dairy"
                  type="checkbox"
                  checked={this.state.dairy}
                  onChange={this.handleInputChange} />
              </label>

            

              <label>
                Wheat:
                <input
                  name="wheat"
                  type="checkbox"
                  checked={this.state.wheat}
                  onChange={this.handleInputChange} />
              </label>


              <label>
                Pork:
                <input
                  name="pork"
                  type="checkbox"
                  checked={this.state.pork}
                  onChange={this.handleInputChange} />
              </label>
              
           

              <label>
                Soy:
                <input
                  name="soy"
                  type="checkbox"
                  checked={this.state.soy}
                  onChange={this.handleInputChange} />
              </label>

            
              
              <label>
                Fish:
                <input
                  name="fish"
                  type="checkbox"
                  checked={this.state.fish}
                  onChange={this.handleInputChange} />
              </label>
              
           
              
              <label>
                Shellfish:
                <input
                  name="shellfish"
                  type="checkbox"
                  checked={this.state.shellfish}
                  onChange={this.handleInputChange} />
              </label>

              </fieldset>

           <br/>
           <br/>
            
              
              <input
                  value="Submit"
                  className="btn"
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
