import React, { Component } from 'react';
var belle = require('belle');
var TextInput = belle.TextInput;

ReactBootstrap = require('react-bootstrap');

var Carousel = ReactBootstrap.Carousel;
Image = ReactBootstrap.Image;







// App component - represents the whole app
export default class CarouselClass extends Component {


  renderCarousel() {

    return  (
      <Carousel>
        <Carousel.Item>
            <Image width={700} height={800} alt="900x500" src="http://localhost:3000/images/earnpoints.jpg" class="img-responsive" alt="a" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image width={900} height={500} alt="900x500" src="http://localhost:3000/images/fathersday.jpg" class="img-responsive" alt="a" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image width={900} height={500} alt="900x500" src="http://localhost:3000/images/happyhour.jpg" class="img-responsive" alt="a" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
  }

  render() {
    return (
      <div >
          {this.renderCarousel()}
      </div>
    );
  }
}
