var React = require('react');
const Userform = require('./children/Userform.js');
const Header = require('./children/Header.js');
const Yelp = require('./children/Yelp');
const Login = require('./children/Login');


class Main extends React.Component{
constructor(props){
super(props);  
this.state={
  google: false,
  user: true
}

this.googleUpdate = this.googleUpdate.bind(this);

}

googleUpdate(google){
  this.setState({google: true});
  console.log('googleupdated');
}


  // Here we render the function
  render() {
    return (
      <div className="container">
      <Header />

 
      
   
      {this.state.google ? <Yelp google={this.state.google} />  : <Login google={this.state.google} googleUpdate={this.googleUpdate} />}

  
      </div>
    )
  }
}

// Export the component back for use in other files
module.exports = Main;
