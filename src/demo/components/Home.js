import React from 'react';

import {
  Row,
  Col,
} from 'react-bootstrap';

import EchartsWordCloudChart from '../echarts/components/WordCloudChart';
import ThreejsHelloWorld from '../threejs/webgl-buffergeometry-drawcalls/components/HelloWorld';

class Home extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>ES6 JavaScript with Modules Using System.js</h1>
        <Row>
          <Col xs={12} md={6}>
            <EchartsWordCloudChart/>
          </Col>
          <Col xs={12} md={6}>
            <ThreejsHelloWorld/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
