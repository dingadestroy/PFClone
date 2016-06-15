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
    text: "Earn Free Entrees",
    id: 0
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

var SingleTile = React.createClass({
  componentWillMount() {
    // console.log("WILL BE MOUNTED");

  },

  handleClick() {
    console.log(this.props.product.location)
  },


componentDidMount() {
  // console.log("MOUNTED");

},
  render() {
    return(
        <Image src={this.props.product.location} id={this.props.image} onClick={this.handleClick} responsive />
    )
  }
});

var GridList = React.createClass({

  getInitialState: function() {
   return {data: []};
  },
  componentWillMount() {
},

componentDidMount() {
},
  getImageList() {
    var imageList =  Images.find().fetch();
    return imageList;
  },
  logImages() {
    // console.dir(this.getImageList());
  },
  handleClick(event) {

  },
  renderImages() {
    this.logImages();
    let floatL = {
      float:"left",
      width:"30%",
      padding:5,
      border: "3px solid #73AD21",

    };
  return this.getImageList().map((product,i) => (

          <div style={floatL}  >
              <a href="#" key={i}>
                < SingleTile product={product} id={product._id} onClick={this.handleClick}  image={"http://localhost:3000/images/earnpoints.jpg"} />
              </a>
            </div>
    ));
  },
  render() {
    let inlineStyling = {
        width: "100%",
        height: "50%",
        padding: '0% 0% 0% 5%',
        overflow: 'hidden',
      };


   return(

         <Grid style={inlineStyling}>
           <Row  className="clearfix">
              {this.renderImages()}
         </Row>
       </Grid>
   );
  }
});

export default class GridInstance extends Component {
  constructor(props) {
      super(props);
         this.state = {
             loading: true,
         };
     }
getGrid() {
  let rowStyling = {
      width: "90%",
      height: "50%",
      paddingLeft: "5%",
      overflow: 'hidden',
    };

  return(
    <Tab.Container stlye={rowStyling} defaultActiveKey="first">
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
