{
  /*Glogin is a module that creates a button with an href to the google route to the server where we initiate the google auth*/
}

const React = require("react");

class GLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2> Login </h2>
        <a
          className="btn"
          onClick={this.handleClick}
          href="http://localhost:3000/auth/google"
        >
          Login
        </a>
      </div>
    );
  }
}

module.exports = GLogin;
