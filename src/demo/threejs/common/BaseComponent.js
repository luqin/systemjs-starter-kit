import React from 'react';
import $ from 'jquery';
import {
  Row,
  Col,
} from 'react-bootstrap';

class BaseComponent extends React.Component {

  componentDidMount() {
    this.init();
  }

  componentUnmount() {
    this.destroy();
    $(this.getContainer()).html();
  }

  init() {

  }

  destroy() {

  }

  getContainer() {
    return this.refs.three;
  }

  render() {
    return (
    <Row>
      <Col md={12}>
        <div ref="three"/>
      </Col>
    </Row>
    );
  }

}

export default BaseComponent;
