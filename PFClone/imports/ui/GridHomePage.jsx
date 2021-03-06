import React, { Component, PropTypes } from 'react';
ReactBootstrap = require('react-bootstrap');
Glyphicon = ReactBootstrap.Glyphicon;
Image = ReactBootstrap.Image;
Grid = ReactBootstrap.Grid;
Row = ReactBootstrap.Row;
Col = ReactBootstrap.Col;
Clearfix = ReactBootstrap.Clearfix;
Image = ReactBootstrap.Image;


images = {
  imageOne : {
    location: "http://localhost:3000/images/earnpoints.jpg",
    text: "Earn Free Entrees"
  },
  imageTwo : {
    location: "http://localhost:3000/images/earnpoints.jpg",
    text: "Earn Free Entrees"
  },
  imageThree : {
    location: "http://localhost:3000/images/earnpoints.jpg",
    text: "Earn Free Entrees"
  },

};

var GridList = React.createClass({
  getInitialState: function() {
   return {data: []};
  },
  getImageList() {
    var imageList =  Images.find().fetch();
    return imageList;
  },
  renderImages() {

  return this.getImageList().map((product) => (
        <Col>
              <div class="photo">
                 <Image responsive />
            </div>
        </Col>
    ));
  },
  render() {
   return(
         <Grid>
         <Row className="show-grid">
          {this.renderImages()}
         </Row>
       </Grid>
   );
  }
});

// Task component - represents a single todo item
export default class GridInstance extends Component {
getGrid() {
  return(
    <GridList />
  )
}
 render() {
  return(
        this.getGrid()
  );
 }
}
