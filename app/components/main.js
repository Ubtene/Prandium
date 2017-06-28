const React = require('react');
const Userform = require('./children/Userform');
const Header = require('./children/Header');
const Yelp = require('./children/Yelp');
const Login = require('./children/Login');

{/* currenlty not using the state here for user */}
class Main extends React.Component{
constructor(props){
super(props);  
this.state={
  user: ""
}

this.userUpdate = this.userUpdate.bind(this);

}

userUpdate(user){
  this.setState({user: user});
  console.log('googleupdated');
}


  // Here we render the function
  render() {
    return (
      <div className="container">
      <Header />

 
      
      {/*This is our main component and we will need to specify what we're going to render here depending on what information is present.
        If there is a user then setup a function to take the current user info from google and render the app else we should propably have another file that has our 
        running app components in it.  So you will either get the first instance of our main app or the login screen..... we will need to pass the user state
        using function to run on submit to pass user info back here so we can pass it around as props for the app.
      */}
      {this.state.user ? <Yelp />  : <Login />}

  
      </div>
    )
  }
}

// Export the component back for use in other files
module.exports = Main;
