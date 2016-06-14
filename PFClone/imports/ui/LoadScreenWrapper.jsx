import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    this.view = Blaze.render(Template.accounts, ReactDOM.findDOMNode(this.refs.container));
     window.addEventListener('click', this.handleClick);
  }

  handleClick (e) {
    console.log(e);
  }
  componentWillUnmount() {
    Blaze.remove(this.view);
  }
  render() {
    return <span ref="render-target" />
  }
}
