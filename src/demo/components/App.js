import React from 'react';
import {
  Nav,
  Navbar,
  NavBrand,
  NavItem,
  NavDropdown,
  MenuItem,
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
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">SystemJS ES6 Demos</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/echarts/word-cloud">
                <NavItem>ECharts</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="three.js" id="threejs-nav-dropdown">
                <LinkContainer to="/three.js/hello-world">
                  <NavItem>Hello World</NavItem>
                </LinkContainer>
                <LinkContainer to="/three.js/lesson1">
                  <NavItem>Lesson 1</NavItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="//github.com/luqin/systemjs-es6-demos" target="_blank">GitHub</NavItem>
            </Nav>
          </Navbar.Collapse>
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
