import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';



import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import {mount} from 'react-mounter';



import App from '../imports/ui/App.jsx';

IncludeBlaze = React.createClass({
    propTypes: {
        template: React.PropTypes.object.isRequired
    },

    componentDidMount() {
        var componentRoot = ReactDOM.findDOMNode(this);
        var parentNode = componentRoot.parentNode;
        // Render the Blaze template on this node
        this.view = Blaze.renderWithData(this.props.template, this.props.data, parentNode, componentRoot);
        parentNode.removeChild(componentRoot);
    },

    componentWillUnmount() {
        // Clean up Blaze view
        Blaze.remove(this.view);
    },

    render() {
        return <div />;
    }
});

AccountsWrapper = React.createClass({
  componentDidMount() {
    this.view = Blaze.render(Template.accounts,
      ReactDOM.findDOMNode(this.refs.container));
  },
  componentWillUnmount() {
    Blaze.remove(this.view);
  },
  render() {
    // Just render a placeholder container that will be filled in
    return <span ref="container" />;
  }
});



var Aquarium = (props) => {
  const getSpecies = (event) => {
    return "jellyfish";
  };
  var fish = getSpecies();
  return <div>  {fish} </div>;
}

Aquarium.propTypes = {
className: React.PropTypes.string.isRequired,
numbers: React.PropTypes.arrayOf(React.PropTypes.number)
}


function HelloMessage(props) {
  return <div> Hello {props.name} </div>
}

const Text = (props) =>
  <p>{props.children}</p>;



const handle = Meteor.subscribe('images.list');




Meteor.startup(() => {
  const isReady = handle.ready();

  console.log(isReady);
  if (isReady) {

    mount(document.getElementById('render-target'), {
      content:  () => (<App />)
    });
  }
  else {
        console.log("Loading");
        mount(MainLayout, {
        content:  () => ( <App />)


        });
  }
});


const MainLayout = ({content}) => (
    <div>
      <main>
        {content()}
      </main>
    </div>
);
