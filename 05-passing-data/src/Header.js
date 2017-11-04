import React from 'react';

import Modal from './Modal';
import Login from './Login';
import Profile from './Profile';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showProfile: false,
      email: ''
    };

    this.showLogin = this.showLogin.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.cancelLogin = this.cancelLogin.bind(this);

    this.showProfile = this.showProfile.bind(this);
    this.closeProfile = this.closeProfile.bind(this);
  }

  showLogin() {
    this.setState({
      showLogin: true
    });
  }

  onLogin(email) {
    this.setState({
      email: email,
      showLogin: false      
    });
  }

  cancelLogin() {
    this.setState({
      showLogin: false
    });
  }

  showProfile() {
    this.setState({
      showProfile: true
    });
  }

  closeProfile() {
    this.setState({
      showProfile: false
    });
  }

  render() {
    const headerStyle = {
        backgroundColor: 'lightgreen',
        padding: 10,
        height: 180,
        width: '100%',
        overflow: 'hidden'
      };

    const headerButtonStyle = {
        height: 30,
        width: 100,
        display: 'inline-block',
        borderRadius: 5,
        fontSize: 16,
        marginTop: 20,
        marginRight: 35,
        float: 'right'
      };

    return (
      <div style={headerStyle} >
        <button style={headerButtonStyle}  onClick={this.showLogin} >Login</button>
        <button style={headerButtonStyle}  onClick={this.showProfile} >Hi {this.state.email}</button>
        <Modal show={this.state.showLogin || this.state.showProfile}>
          <Login show={this.state.showLogin} onLogin={this.onLogin} onCancel={this.cancelLogin} />
          <Profile show={this.state.showProfile} email={this.state.email} onClose={this.closeProfile} />
        </Modal>  
      </div>
    );
  }
}

export default Header;
