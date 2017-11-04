import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
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
        <button style={headerButtonStyle}  onClick={this.props.showLogin} >Login</button>
      </div>
    );
  }
}

export default Header;
