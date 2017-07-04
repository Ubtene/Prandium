{/*This component has the modal and gets props from the active meal to get the div to open the modal with no button I passed the show state from here to the main component*/}


const React = require('react');
import { Button, Modal, ButtonToolbar  } from 'react-bootstrap';


class MyModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false
    }


  }
        // <Button bsStyle="primary" onClick={this.showModal}>
        //   Launch demo modal
        // </Button>
                   // <Button onClick={this.props.hideModal}>Close</Button>


  render() {
    return (
      <ButtonToolbar>

        <Modal
          show={this.props.show}
          onHide={this.props.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.meal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
            <p>I'm in your modal.</p>
          </Modal.Body>
          <Modal.Footer>
 
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

module.exports = MyModal;
