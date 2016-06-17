import React, { Component, PropTypes } from 'react';
import MenuWelcomeMat from './MenuWelcomeMat.jsx';
ReactBootstrap = require('react-bootstrap');
var LoaderTwo = require('react-loader');
import Accordion from './Accordion.jsx';
import MealsList from './MealsList.jsx';




ButtonToolbar = ReactBootstrap.ButtonToolbar;
ButtonGroup = ReactBootstrap.ButtonGroup;
Button = ReactBootstrap.Button;

let myMenuWelcomMat;
let myMealList;



// App component - represents the whole app
export default class MainMenuHomePage extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor Props: ", props);
    this.state = {
      loading:true
    };
   }
  componentWillMount() {
    this.c = Tracker.autorun(() => {
       const sub = this.props.subscribe()
       const subscribeToMenuTypes = this.props.subscribeToMenuTypes()
       const subscribeToMeals = this.props.subscribeToMeals()
       const state = this.props.fetch()
       state.loading = !sub.ready()
       console.log("ComponentWillMount Props: ", this.props);
       this.setState(state)
     })
  }
  componentDidMount() {
     this.state.loading = false
     const state = this.props.fetch()
     const sub = this.props.subscribe()
     console.log("ComponentDidMount Props: ", this.props);
     this.setState(state)
  }
  handleClick(comp,event) {
    if(myMenuWelcomMat ) {
      console.log(myMenuWelcomMat)
      const sub = myMenuWelcomMat.props.subscribe()
      const state = myMenuWelcomMat.props.fetch()
      state.show = false
      myMenuWelcomMat.setState(state);
    }
    if(myMealList) {
      console.log("myMealList: ",myMealList)
      const sub = myMealList.props.subscribe()
      const state = myMealList.props.fetch()
      state.show = true
      myMealList.setState(state);
    }
    event.preventDefault()
  }

  returnNode(node) {
    myMenuWelcomMat = node;
  }

  returnMealListNode(node) {
    myMealList = node;
    console.log("MEAL LISTNODE: ", myMealList)
  }

  changeMenuView() {

  }

  renderMealList() {


    return (
      <MealsList
          subscribe = {
            () => {
                return Meteor.subscribe('meals.list')
              }
            }
          fetch = {
              () => {
                  return {data:  Meals.find().fetch()
                  }
                }
             }
             returnMealListNode = {this.returnMealListNode}

        ></MealsList>
    )
  }
  renderAccordion() {
    let data = {
      "menuTypes" : this.props.fetchMenuTypes()
    }
    return (
      <Accordion data={data} handleClick={this.handleClick}></Accordion>
    )
  }
  renderMenuToolBar() {
  let btnStyle = {
    padding: "15% 0 0 40%"
  }
   return (
       <ButtonToolbar style={btnStyle}className="mainMenuButtonToolBar">
        <ButtonGroup bsSize="large">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
  renderMenuWelcomeMat() {
    return (
      <div>
        <MenuWelcomeMat subscribe = { () => {
          return Meteor.subscribe('images.list') }}
          fetch = { () => {
          return {data:  Images.find().fetch()}} } xs={6} md={4}

          returnNode = {this.returnNode}
          />
      </div>
    )
  }
  render() {
    const sub = this.props.subscribe()

    if (this.props.subscribe()) {
      return (
          <LoaderTwo loaded={this.props.subscribe().ready()} >
            <div className="container">
                {this.renderAccordion()}
                {this.renderMenuToolBar()}
                {this.renderMenuWelcomeMat()}
                {this.renderMealList()}
            </div>
          </LoaderTwo>

         )
    }

  }
}

MainMenuHomePage.propTypes = { initialCount: React.PropTypes.number };
