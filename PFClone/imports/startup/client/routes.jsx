import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'
import App  from '../../ui/App.jsx'

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
})

const MainLayout = ({content}) => (
    <div>
      <main>
        {content()}
      </main>
    </div>
);
