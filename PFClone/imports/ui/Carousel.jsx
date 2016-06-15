import React, { Component, PropTypes } from 'react';
var belle = require('belle');
var TextInput = belle.TextInput;

ReactBootstrap = require('react-bootstrap');

var Carousel = ReactBootstrap.Carousel;
Image = ReactBootstrap.Image;

export default class CarouselClass extends Component {

  renderCarousel() {
    return  (
      <Carousel width={'100%'} >
        <Carousel.Item>
            <Image width={'100%'} height={500} alt="900x500" src="http://localhost:3000/images/earnpoints.jpg" class="img-responsive" alt="a" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image width={'100%'} height={500} alt="900x500" src="http://localhost:3000/images/fathersday.jpg" class="img-responsive" alt="a" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image width={'100%'} height={500} alt="900x500" src="http://localhost:3000/images/happyhour.jpg" class="img-responsive" alt="a" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
  }

  render() {
    let inlineStyling = {
        width: "100%",
        height: 30,
        padding: 5,
        backgroundColor:"#ee9900"
      };
    return (
      <div stlye={inlineStyling} >
          {this.renderCarousel()}
      </div>
    );
  }
}
