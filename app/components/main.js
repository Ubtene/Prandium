var React = require('react');
const Userform = require('./children/Userform.js');
const Header = require('./children/Header.js');
const YelpR = require('./children/Yelpresults.js');
import MealCalendar from './children/MealCalendar';
class Main extends React.Component{


  // Here we render the function
  render() {
    return (
      <div className="container">
      <Header />
      <YelpR />
      <MealCalendar />
      <Userform />
      </div>
    )
  }
}

// Export the component back for use in other files
module.exports = Main;
