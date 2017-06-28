const React = require("react");
const helpers = require("./../utils/helpers.js");
const Yelp = require("./Yelp");
const GLogin = require("./Glogin");
const Userform = require("./Userform");

{
  /*  this component builds out our login.  Pulls in the google login button and if user is not present in state will render the userform if not will ultimately sign into app  */
}
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: ""
    };
    this.handleClick = this.handleClick.bind(this);

    // unused functions commented out bellow
    // this.renderLogin = this.renderLogin.bind(this); /
    // this.googleUpdate = this.props.googleUpdate.bind(this);
  }

  handleClick() {
    this.setState({ google: true });
    console.log("sent helpers google");
    console.log('How state looks when handleClick is clicked: ', this.state);
  }

  componentWillMount() {
    console.log("in Willmount on login component");

    helpers.getGoogle().then(
      function(result) {
        console.log('Results from helpers.getGoogle Promise in the ComponentWillMount func:', result);

        this.setState({
          id: result.data.Googleid
        });

        console.log('how id property looks when compWillMount func is called:', this.state.id);
      }.bind(this)
    );
    // console.log(this.state);
  }

//   componentWillUnmount() {}

  componentDidUpdate() {
    console.log("----------------");

    console.log("in login componentDidUpdate", this.state);

    console.log("----------------");
  }

//   renderLogin() {}

  render() {
      console.log(`the appearance of the rendered component's object`, this);
    return (
      <div>
        {/* if we have a state.id set then we will render the userform otherwise we will render the googlelogin button  */}

        {this.state.id ? <Userform /> : <GLogin />}
      </div>
    );
  }
}

module.exports = Login;
