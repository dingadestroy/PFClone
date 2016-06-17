import {FlowRouter} from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';
import App  from '../../ui/App.jsx';
import MainMenu  from '../../ui/MainMenuPage.jsx';
import MealsList from '../../ui/MealsList.jsx';



FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(MainLayout, {
      content:  () => (
                <App
                  subscribe = { () => {
                  return Meteor.subscribe('images.list') }}
                  fetch = { () => {
                  return {data:  Images.find().fetch()}} }
                 />
                )
    })
  }
});
let style = {
  width:"50%"
};

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    mount(MainLayout, {
      content:  () => (
                <MainMenu className="mainMenu" style= {style}
                  subscribe = {
                    () => {
                        return Meteor.subscribe('images.list')
                      }
                    }
                  fetch = {
                      () => {
                          return {data:  Images.find().fetch()
                          }
                        }
                     }
                  subscribeToMenuTypes = {
                        () => {
                              return Meteor.subscribe('types.list')
                            }
                      }
                  fetchMenuTypes = {
                    () => {
                      return { data: Types.find().fetch()}
                    }
                  }
                  subscribeToMeals = {
                        () => {
                              return Meteor.subscribe('meals.list')
                            }
                      }
                 />
                )
    })
  }
});

FlowRouter.route('/menu/meal', {
  name: 'menu',
  action() {
    mount(MainLayout, {
      content:  () => (
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
                 />
                )
    })
  }
});

let bodyStyle = {
  padding: 0,
  width: "40%"
}

const MainLayout = ({content}) => (
  <body style={bodyStyle}>
    <div>
      <main className="mainMenuLayout">
        {content()}
      </main>
    </div>
  </body>

);
