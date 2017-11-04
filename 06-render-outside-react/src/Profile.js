import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Login';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      showLogin: false
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.setEmail = this.setEmail.bind(this);
  }

  handleLogin() {
    this.setState({
      showLogin: true
    })
  }

  setEmail(email) {
    this.setState({
      email: email
    })
  }

render() {  
  if(!this.props.show) {
    return null;
  }

    const profileBoxStyle = {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 50,
        height: 200,
        width: 350,
        marginTop: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '1px 1px 30px gray'
      };

    const profileLabelStyle = {
        height: 40,
        width: 100,
        display: 'inline-block'
      };

    const profileButtonStyle = {
        height: 30,
        width: 100,
        display: 'inline-block',
        borderRadius: 5,
        fontSize: 16,
        marginTop: 40,
        marginLeft: 5
      };


    return (
      <div style={profileBoxStyle} >
        <div>
          <label style={profileLabelStyle} >{this.state.email}</label>
        </div>
        <div>
          <button style={profileButtonStyle} onClick={this.handleLogin} >Login</button>
          {ReactDOM.createPortal(<Login show={this.state.showLogin} onLogin={this.setEmail} />, document.getElementById('login'))}
        </div>
      </div>
    );
  }
}

export default Profile;
