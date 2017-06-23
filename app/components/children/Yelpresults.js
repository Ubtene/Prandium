var React = require("react");
var helpers = require('./../utils/helpers.js');


class Yelpresults extends React.Component {

constructor(props){
super(props);
this.state = {
name: '',
address: '',
phone: '',
link: '',
image: ''
}
this.handleClick = this.handleClick.bind(this); 
}

handleClick(event){
event.preventDefault();

var zipcode = null;
var term = null;
console.log('clicked');
this.props.onSubmit(zipcode, term);
}



componentDidMount(){

        helpers.getYelp(this.props.zipcode, this.props.term).then(function(data){
          console.log('victory');
          console.log(data);
          this.setState({
            name: data.data.name,
            address: data.data.location.address1,
            phone: data.data.phone,
            link: data.data.url,
            image: data.data.image_url
          })

       

        }.bind(this));

}

render(){

  return(


        <div className="container" id="yelpResults">
            <h1>HI I'M YOUR RESULTS </h1>

            <div className="media">

                <div className="media-left media-top">
                  <a href="#">
                    <img className="media-object" src={this.state.image} alt="..." width="150" height="150" />
                  </a>
                </div>

                <div className="media-body">

                    <div className="well sm-well" id="reswell">Restaurant: {this.state.name}</div>
                    <div className="well sm-well" id="reswell">Zipcode: {this.props.zipcode}</div>
                    <div>{this.state.address}</div>
                    <div>{this.state.phone}</div>
                    <div>{this.state.link}</div>

                </div>
            </div>

            <button
            onClick={this.handleClick}
            className="btn btn-danger"
            >  
            Reset
            </button>  


        </div>

    )
}



}




module.exports = Yelpresults;
