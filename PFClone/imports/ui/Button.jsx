import React, { Component } from 'react';
var belle = require('belle');
var TextInput = belle.TextInput;

ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;


const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};


// App component - represents the whole app
export default class App extends Component {

  renderTasks() {
    return  (
    <div className="well" style={wellStyles}>
  <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
  <Button bsSize="large" block>Block level button</Button>
</div>
    );
  }

  render() {
    return (
      <div className="container">

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
