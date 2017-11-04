import React from 'react';

import Header from './Header';
import Main from './Main';
import Login from './Login';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showLogin: false};

      this.showLogin = this.showLogin.bind(this);
      this.cancelLogin = this.cancelLogin.bind(this);
    }

    showLogin() {
      this.setState({
        showLogin: true
      });
    }

    cancelLogin() {
      this.setState({
        showLogin: false
      });
    }


    render() {

      return (
        <div>
          <Header showLogin={this.showLogin}  />
          <Main />
          <Login show={this.state.showLogin} onCancel={this.cancelLogin} />
        </div>
      );
    }

}

export default App;
