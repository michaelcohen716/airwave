const Modal = require('react-modal');
import React from 'react';


class SessionModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  render(){
    return (
      <div>
        <button onClick={this.openModal}>
          LOGIN
        </button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

        </Modal>
      </div>
    );
  }

}
