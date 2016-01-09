import React from 'react';
import $ from 'jquery';

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
      <div ref="three"/>
    );
  }

}

export default BaseComponent;
