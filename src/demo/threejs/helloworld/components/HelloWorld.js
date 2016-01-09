import React from 'react';

import demo from '../demo';

class Three extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    demo.init(this.refs.three);
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div ref="three"/>
    );
  }
}

export default Three;
