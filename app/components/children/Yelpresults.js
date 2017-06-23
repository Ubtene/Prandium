var React = require("react");
var helpers = require('./../utils/helpers.js');


class Yelpresults extends React.Component {

constructor(props){
super(props);
this.state = {

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

render(){

  return(


        <div className="container" id="yelpResults">
            <h1>HI I'M YOUR RESULTS </h1>

            <div className="media">

                <div className="media-left media-top">
                  <a href="#">
                    <img className="media-object" src="www.google.com" alt="..." width="150" height="150" />
                  </a>
                </div>

                <div className="media-body">
                    <div className="well sm-well" id="reswell">Restaurant: {this.props.term}</div>
                    <div className="well sm-well" id="reswell">Zipcode: {this.props.zipcode}</div>
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
