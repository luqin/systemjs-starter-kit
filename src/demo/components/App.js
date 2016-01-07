import React from 'react';
import {
  Navbar,
  NavBrand,
  Nav,
  NavItem,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import 'jquery';
import 'bootstrap';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Navbar inverse staticTop toggleNavKey={0}>
          <NavBrand><a href="#">SystemJS Starter</a></NavBrand>
          <Nav>
            <LinkContainer to="/examples">
              <NavItem>Examples</NavItem>
            </LinkContainer>
            <NavItem eventKey={2} href="//github.com/luqin/systemjs-es6-react-demo" target="_blank">GitHub</NavItem>
          </Nav>
        </Navbar>
        <Grid>
          <Row>
            <Col md={12}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
