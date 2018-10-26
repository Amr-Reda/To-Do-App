import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

export default class NavbarComp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <Navbar color="info" dark expand="md">
          <NavbarBrand href="/">TO DO APP</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}