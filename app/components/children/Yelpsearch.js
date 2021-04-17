var React = require("react");
var helpers = require('./../utils/helpers.js');


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

      <div className="panel panel-default" id='form'>
        <div className="panel-heading">
          <h1 className="panel-title text-center"><strong>Search Local Restaurants</strong></h1>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">

            

              <input
                value={this.state.zipcode}
                type="text"
                className="form-control text-center"
                id="zipcode"
                name="zipcode"
                onChange={this.handleChange}
                pattern="(\d{5}([\-]\d{4})?)"
                required
              />


              <input
                value={this.state.type}
                type="text"
                className="form-control text-center"
                id="type"
                name="type"
                onChange={this.handleChange}
                required
              />
              <input
                  value="Submit"
                  className="btn"
                  type="submit"
              />


            </div>
          </form> 
      </div>   
    </div>
       
    );
  }
}

module.exports = YelpR;
