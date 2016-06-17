import React, { Component } from 'react';
var belle = require('belle');
var TextInput = belle.TextInput;
import Button from './Button.jsx';
import NavBar from './NavBar.jsx';
import Carousel from './Carousel.jsx';
import HomeGrid from './GridHomePage.jsx';
ReactBootstrap = require('react-bootstrap');
var LoaderTwo = require('react-loader');



Row = ReactBootstrap.Row;
Col = ReactBootstrap.Col;
Image = ReactBootstrap.Image;

// App component - represents the whole app
//the combined effects of the constructor, componentWillMount,componentDidMount is to prepare the props and state for the component
export default class MenuWelcomeMat extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loading:true,
        show:true
      };
     }
     componentWillMount() {
     this.c = Tracker.autorun(() => {
       const sub = this.props.subscribe()
       const state = this.props.fetch()
       state.loading = !sub.ready()
      //  console.log("WILLMOUNT STATE: ",state)
      //  console.log("WILLMOUNT SUB: ",sub)
       this.setState(state)
     })
   }
   componentDidMount() {
     this.state.loading = false
     const state = this.props.fetch()
     const sub = this.props.subscribe()
    //  console.log("DIDMOUNT STATE: ",state)
    //  console.log("DIDMOUNT SUB: ",sub)
     this.setState(state)
   }
   getImageLocation() {

     var count = 0;
        imageList = this.state['data'];
     _.each(imageList, function(i) {
       count++;
      //  console.log("MENUWELCOME: ", i.name);
       if(i.name == "marqueeimage")
       {
         return i.location;
       }
     });
   }

  renderImageTile() {
    return (
      <div>

      </div>
    );
  }
  renderImageTile1() {
    return (
      <div>
        "RENDER OTHER IMAGE1"
      </div>
    );
  }
  renderImageTile2() {
    return (
      <div>
        "RENDER OTHER IMAGE2"
      </div>
    );
  }

  renderGrid() {
  //  console.log( "MENUWELCOME.renderGrid state[data]: " ,this.props.fetch()['data']);
   let location, imageStyle = {
     width: "700",
   height: '250',
   border: '3px solid #73AD21'
 }, gridStyle = {
   padding:"0 0 0 40%"
 };

   image = this.props.fetch()['data'][3].location;
    return (
      <div>
          <Grid style={gridStyle}>
            <Row className="show-grid" >
              <Col xs={12} md={8}>
                <Image src={ image} style={imageStyle}></Image>
              </Col>
            </Row>
            <Row className="show-grid" >
              <Col xs={12} md={8}>
                {this.renderImageTile2()}
              </Col>
            </Row>
          </Grid>
      </div>
    )
  }
  renderLunchDrinkCateringTile() {
    return (
      <div>
        {this.renderGrid()}
      </div>
    );
  }
  returnLoader() {
    return(
      <LoaderTwo></LoaderTwo>
    )
  }
  returnNav() {
    return(
      <NavBar></NavBar>
    )
  }
  render() {
    console.log(this.state.show);
    this.props.returnNode(this);
    let remove = {
      display:this.state.show ? "block" : "none"
    };
    const sub = this.props.subscribe();
      return (
        <div style={remove}>
            <LoaderTwo loaded={sub.ready()}>
              <div  className="container-menuWelcomeMat">
                    {this.renderGrid()}
              </div>
            </LoaderTwo>
          </div>

             )
       }
}


MenuWelcomeMat.propTypes = {

};

MenuWelcomeMat.defaultProps = {
  style: {
    width: "100%",
    padding : "0 0 0 30%"
  }
};
