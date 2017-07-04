const React = require('react');
const Userform = require('./children/Userform');
const Header = require('./children/Header');
const Yelp = require('./children/Yelp');
const FormOrLogin = require('./children/FormOrLogin');
import CentralPage from './children/CentralPage';
const MainLogin = require('./children/MainLogin');
const MyModal = require('./children/Modal');
const Empty = require('./children/Empty');

{
  /* currenlty not using the state here for user */
}
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      isLoggedIn: '',
      day: "",
      meal: '',
      img: '',
      instructions: "",
      show: false
    }

    this.userUpdate = this.userUpdate.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.getMyMeal = this.getMyMeal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

  }




  showModal() {
    this.setState({
      show: true
    });
  }

  hideModal() {
    this.setState({
      show: false
    });
  }


  userUpdate(user) {
    this.setState({
      user: user
    });
    console.log('googleupdated');
  }

  userLogin(isLoggedIn) {
    this.setState({
      isLoggedIn: isLoggedIn
    })
    console.log(this.state);
    console.log("In main js");
  }

  getMyMeal(day, meal, img, instructions) {
    this.setState({
      day: day,
      meal: meal,
      img: img,
      instructions: instructions,
      show: true
    })
  }

  componentDidUpdate() {
    console.log("this.stateinmain");
    console.log(this.state);
  }

  // Here we render the function
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        { /*This is our main component and we will need to specify what we're going to render here depending on what information is present.
                    If there is a user then setup a function to take the current user info from google and render the app else we should propably have another file that has our
                    running app components in it.  So you will either get the first instance of our main app or the login screen..... we will need to pass the user state
                    using function to run on submit to pass user info back here so we can pass it around as props for the app.
                  */ }
        <div className="row">
          { this.state.isLoggedIn ? <CentralPage getMyMeal={ this.getMyMeal } meal={ this.state.meal } show={ this.state.show } hideModal={ this.hideModal } /> : <MainLogin userLogin={ this.userLogin } /> }
        </div>
      </div>
    )
  }
}

// Export the component back for use in other files
module.exports = Main;
