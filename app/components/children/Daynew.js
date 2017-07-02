import React from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';



export const Daynew = (props) => {
    return (

      <div className="col-sm-4">

        <Button onClick={ ()=> this.setState({ aopen: !this.state.aopen })}>
          {props.day}: {props.lunch} 
          <br/>
          <img src=""/>
            </Button>
        <Collapse in={this.state.aopen}>
          <div>
            <Well >
        {props.ingredients}
            
            </Well>
            <Well >
        {props.instructions}
            
            </Well>
          </div>
        </Collapse>
      </div>

  );
}

export default Daynew