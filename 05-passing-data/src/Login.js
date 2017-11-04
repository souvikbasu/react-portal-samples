import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  onLogin(e) {
    this.props.onLogin(this.state.email);
  }

  render() {
    if(!this.props.show) {
      return null;
    }

      const loginBoxStyle = {
          backgroundColor: 'lightgray',
          borderRadius: 10,
          padding: 50,
          height: 200,
          width: 350,
          marginTop: 100,
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '1px 1px 30px gray'
        };

      const loginLabelStyle = {
          height: 40,
          width: 100,
          display: 'inline-block'
        };

      const loginInputStyle = {
          height: 30,
          width: 200,
          display: 'inline-block',
          borderRadius: 5,
          border: 'none'
        };

      const loginButtonStyle = {
          height: 30,
          width: 100,
          display: 'inline-block',
          borderRadius: 5,
          fontSize: 16,
          marginTop: 40,
          marginLeft: 5
        };


      return (
        <div style={loginBoxStyle} >
          <div>
            <label style={loginLabelStyle} >Email</label>
            <input  style={loginInputStyle} onChange={this.onEmailChange}/>
          </div>
          <div>
            <label style={loginLabelStyle} >Password</label>
            <input  style={loginInputStyle} />
          </div>
          <div>
            <button style={loginButtonStyle} onClick={this.onLogin} >Login</button>
            <button style={loginButtonStyle} onClick={this.props.onCancel} >Cancel</button>
          </div>
        </div>
      );
    }
}

export default Login;
