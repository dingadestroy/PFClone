import React, { Component } from 'react';
ReactBootstrap = require('react-bootstrap');
var LoaderTwo = require('react-loader');



var MenuList = React.createClass({
  getInitialState: function() {
   return {data: []};
  },
  getMenuList() {
  },
  logImages() {
  },
  renderImages() {
  return this.props.data.map((type) => (
        <Col>
              <div >
                <a href="#">
                  {type['name']}
                </a>
            </div>
        </Col>
    ));
  },
  render() {
    // console.log(this.props.data['menuTypes']['data']);
   return(
         <Grid>
           <Row className="clearfix">
              {this.renderImages()}
         </Row>
       </Grid>
   );
  }
});



export default class MealsListComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loading:false,
        show: false
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
     const state = this.props.fetch()
     const sub = this.props.subscribe()
     this.setState(state)
   }

  renderProductList() {
    return (
      <div>

      </div>
    );
  }
  render() {
    // const sub = this.props.subscribe();
    console.log("RENDER??? : ", this.state.show )
    this.props.returnMealListNode(this);
    let style = {
        padding:"0 0 0 40%",
        display: this.state.show ? "block" : "none"
      };
      return (
        <LoaderTwo loaded={true}>
          <div style={style}>
            <MenuList data={this.state['data']}></MenuList>
          </div>
        </LoaderTwo>
         )
       }

}


MealsListComponent.propTypes = {

};

MealsListComponent.defaultProps = {

};
