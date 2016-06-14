import React, { Component } from 'react';
var belle = require('belle');
var TextInput = belle.TextInput;

ReactBootstrap = require('react-bootstrap');

var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;




var divStyle = {
  color: 'red',
//  backgroundImage: 'url(' + 'https://mediaprodpfchangs.blob.core.windows.net/contentimg/PFC0516-preferredSliderupdate-2.jpg' + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};


// App component - represents the whole app
export default class App extends Component {


  renderNavBar() {
  var divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
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
       <Nav bsStyle="tabs" justified activeKey={3} onSelect={this.handleSelect} style={divStyle} >
         <NavItem style={divStyle0}  className="menuItem" href="/home">
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
