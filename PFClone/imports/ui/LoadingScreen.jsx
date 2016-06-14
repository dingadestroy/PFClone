import React, { Component } from 'react';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';







// App component - represents the whole app
export default class LoadingScreen extends Component {

constructor(props) {
  super(props);

  this.state = {
    hideCompleted: false,
  };
}

  returnWrapper() {
    return(
        < LoadScreenWrapper />
      );
  }

  render() {
    return (
      <div className="container">
          {          <AccountsUIWrapper />
}
      </div>
    );
  }
}
