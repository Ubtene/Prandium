const React = require('react');
const helpers = require('./../utils/helpers.js');
const Yelp = require('./Yelp');
const GLogin = require('./Glogin');
const Userform = require('./Userform');


{ /*  this component builds out our login.  Pulls in the google login button and if user is not present in state will render the userform if not will ultimately sign into app  */ }
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            id: "",
            email: ''

        };
        this.renderLogin = this.renderLogin.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.googleUpdate = this.props.googleUpdate.bind(this);
    }


    handleClick() {
        this.setState({ google: true });	
        console.log("sent helpers google");
    }

    componentWillMount() {
        console.log("in Willmount on login component");

        helpers.getGoogle().then(function(result) {

            console.log(result);

            this.setState({
                id: result.data.Googleid
            });


            // console.log("no user data");

        }.bind(this));
        // console.log(this.state);

    }




    componentWillUnmount() {

    }

    componentDidUpdate() {






        console.log("----------------");

        console.log("in login componentDidUpdate");
        console.log(this.state);

        console.log("----------------");

    }




    renderLogin() {

    }


    render() {
        return ( 
            <div>
            { /* if we have a state.id set then we will render the userform otherwise we will render the googlelogin button  */ }

            {this.state.id ? <Userform / > : <GLogin / > }
             </div>	
        )
    }

}





module.exports = Login;
