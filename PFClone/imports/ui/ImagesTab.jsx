import React, { Component, PropTypes } from 'react';
ReactBootstrap = require('react-bootstrap');
Glyphicon = ReactBootstrap.Glyphicon;
Image = ReactBootstrap.Image;
Grid = ReactBootstrap.Grid;
Row = ReactBootstrap.Row;
Col = ReactBootstrap.Col;
Tab = ReactBootstrap.Tab;
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
  logImages() {
    console.dir(this.getImageList());
  },
  renderImages() {
    this.logImages();
  return this.getImageList().map((product) => (
        <Col>
              <div class="photo">
                 <Image src={product['location']}responsive />
            </div>
        </Col>
    ));
  },
  render() {
   return(
         <Grid>
           <Row className="clearfix">
              {this.renderImages()}
         </Row>
       </Grid>
   );
  }
});

export default class GridInstance extends Component {
getGrid() {
  return(
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <GridList />
    </Tab.Container>
  )
}
 render() {
  return(
        this.getGrid()
  );
 }
}
