import React, { Component } from 'react';
var belle = require('belle');
var TextInput = belle.TextInput;
import Button from './Button.jsx';
import NavBar from './NavBar.jsx';
import Carousel from './Carousel.jsx';
import HomeGrid from './GridHomePage.jsx';
ReactBootstrap = require('react-bootstrap');

var LoaderTwo = require('react-loader');

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
      super(props);
         this.state = {
             loading: true,
         };
     }
     componentWillMount() {
     this.c = Tracker.autorun(() => {
       const sub = this.props.subscribe()
       const state = this.props.fetch()
       state.loading = !sub.ready()
       this.setState(state)
     })
   }

   componentDidMount() {
      this.state.loading = false
     const state = this.props.fetch();
     const sub = this.props.subscribe()
     this.setState(state);
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
    const sub = this.props.subscribe()
    return (
          <LoaderTwo loaded={sub.ready()}>
          <div className="container">
            <NavBar />
              {this.renderCarousel()}
              {this.renderHomeGrid()}
          </div>
        </LoaderTwo>
       )

  }
}
