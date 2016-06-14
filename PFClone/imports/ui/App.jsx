import React, { Component } from 'react';
var belle = require('belle');
var TextInput = belle.TextInput;
import Button from './Button.jsx';
import NavBar from './NavBar.jsx';
import Carousel from './Carousel.jsx';
import HomeGrid from './GridHomePage.jsx';

import { Template } from 'meteor/templating';





ReactBootstrap = require('react-bootstrap');

import LoadScreenWrapper from './LoadScreenWrapper.jsx';






import Task from './Task.jsx';

// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  returnWrapper() {
    return(
        < LoadScreenWrapper />
      );
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <div>
      <Task key={task._id} task={task} />
      </div>
    ));
  }

  renderHomeGrid() {
    return (
      <div>
          < HomeGrid />
       </div>
    );
  }
  renderCarousel() {
    return (
      <div>
      <Carousel />
      </div>
    ); }

  render() {
    return (
      <div className="container">
        <NavBar />
          {this.renderCarousel()}
          {this.renderHomeGrid()}
      </div>
    );
  }
}
