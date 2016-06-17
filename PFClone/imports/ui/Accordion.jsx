import React, { Component } from 'react';
var belle = require('belle');
var TextInput = belle.TextInput;
import Button from './Button.jsx';
import NavBar from './NavBar.jsx';
import Carousel from './Carousel.jsx';
import HomeGrid from './GridHomePage.jsx';
ReactBootstrap = require('react-bootstrap');
Col = ReactBootstrap.Col;


var MenuList = React.createClass({
  getInitialState: function() {
   return {data: []};
  },
  getMenuList() {
  },
  logImages() {
  },
  renderImages() {
  return this.props.data['menuTypes']['data'].map((type) => (
        <Col>
              <div  >
                <a href="#" onClick={(event)=>this.props.handleClick(this,event)} >
                  {type['name']}
                </a>
            </div>
        </Col>
    ));
  },
  render() {
    console.log(this.props.data['menuTypes']['data']);
   return(
         <Grid>
           <Row className="clearfix">
              {this.renderImages()}
         </Row>
       </Grid>
   );
  }
});


var Section = React.createClass({
  handleClick: function(){
    if(this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    }else{
      this.setState({
        open: true,
        class: "section open"
      });
    }
  },
  getInitialState: function(){
     return {
       open: false,
       class: "section"
     }
  },
  render: function() {
    return (
      <div className={this.state.class}>
        <button>toggle</button>
        <div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

let styling = {
  margin:"0 15% 0 5%"
};

var Accordion = React.createClass({
  renderMenuItems() {
    return (
      <div>
        <MenuList handleClick={this.props.handleClick} data={this.props.data}></MenuList>
      </div>
    );
  },
  render: function() {
    return (
      <div className="main" style={styling}>
        <div className="title">{this.props.title}</div>
        <Section title="Section Title One">
          {this.renderMenuItems()}
        </Section>
        <Section title="Section Title Two">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="Section Title Three">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
      </div>
    );
  }
});
// App component - represents the whole app
export default class AccordionMenu extends Component {
  constructor(props) {
      super(props);
     }
     componentWillMount() {
     this.c = Tracker.autorun(() => {

     })
   }
   componentDidMount() {
   }

  render() {
    return (
      <div>
        < Accordion data={this.props.data} handleClick={this.props.handleClick}/>
      </div>
    );
  }
}
