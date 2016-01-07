import React from 'react';

var App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

export default App;
