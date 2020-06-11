import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Container } from 'reactstrap';

class Item extends Component {

  onRemoveClick =(id)=>{
    this.props.removeData(id);
  };

  render() {
    let items=this.props.items;
    return (
      <div style={{ marginTop:"2rem"}}>
      <Container>
        <ListGroup>
          {items.map((item)=>(
            <ListGroupItem key={item._id}>
            <Button style={{ float:"right"}} onClick={this.onRemoveClick.bind(this, item._id)}>&times;</Button>
                <p>{item.name}</p>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
      </div>
    );
  }
}

export default Item;
