import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';

class AddButton extends React.Component {
    state = {
      modal: false,
      query:'',
    };


  toggle=()=> {
    this.setState({
      modal: !this.state.modal,
      query:''
    });
  };

  updateQuery = (query)=>{
    this.setState({query:query});
  };

  sendData=()=>{
    let data={
      name:this.state.query
    };
    this.props.submitData(data);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle} style={{ margin: 'auto', display: 'block' }} size="lg">{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>ADD To-Do</ModalHeader>
          <ModalBody>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  value={this.state.query}
                  placeholder="Add To-Do"
                  onChange={(event)=>this.updateQuery(event.target.value)}
                />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.sendData}>ADD</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddButton;