import React, { Component } from 'react';
var belle = require('belle');
var TextInput = belle.TextInput;

ReactBootstrap = require('react-bootstrap');

import {FlowRouter} from 'meteor/kadira:flow-router'


var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;




var divStyle = {
  color: 'red',
  WebkitTransition: 'all',
  msTransition: 'all',
  padding: "0 0 0 20%"
};

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};


// App component - represents the whole app
export default class App extends Component {
  handleSelect(node, divStyle,event) {
    console.log(node);
    console.log(divStyle);
    event.preventDefault();
    FlowRouter.route('/menu');
  }
  renderNavBar() {
      var divStyle = {
      WebkitTransition: 'all',
      msTransition: 'all'
  };
  var divStyle0 = {
  width: 300,
  color: "red",
  fontWeight : 400,
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };
    return  (
    <div>
       <Nav bsStyle="tabs" justified onClick={(event)=>this.handleSelect(this,divStyle,event)} style={divStyle} >
         <NavItem style={divStyle0}  className="menuItem" href="/menu">
            <span  > Menu </span>
            <span > Explore & Order Online </span>
         </NavItem>
         <NavItem  style={divStyle0} className="menuItem" title="Item" eventKey={2}>
           <span > Catering </span>
           <span > Orders for 10 or More </span>
         </NavItem>
         <NavItem  style={divStyle0} eventKey={3} >
             <span > Reservations </span>
             <span > Save Your Table </span>
         </NavItem>
         <NavItem  style={divStyle0} eventKey={4} >
             <span > Reservations </span>
             <span > Save Your Table </span>
         </NavItem>
         <NavItem  style={divStyle0} eventKey={5} >
             <span > Reservations </span>
             <span > Save Your Table </span>
         </NavItem>
         <NavItem  style={divStyle0} eventKey={6} >
             <span > Reservations </span>
             <span > Save Your Table </span>
         </NavItem>
       </Nav>
     </div>
    );
  }

  render() {
    return (
      <div className="myNavBar">
          {this.renderNavBar()}
      </div>
    );
  }
}
