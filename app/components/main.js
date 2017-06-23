var React = require('react');
const Userform = require('./children/Userform.js');
const Header = require('./children/Header.js')
const Yelp = require('./children/Yelp')

class Main extends React.Component{


  // Here we render the function
  render() {
    return (
      <div className="container">
      <Header />
      <Userform />
      <Yelp />
      </div>
    )
  }
}

// Export the component back for use in other files
module.exports = Main;
