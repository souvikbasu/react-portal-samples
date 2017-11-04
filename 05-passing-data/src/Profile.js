import React from 'react';

const Profile = (props) => {
  
  if(!props.show) {
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
          <label style={profileLabelStyle} >{props.email}</label>
        </div>
        <div>
          <button style={profileButtonStyle} onClick={props.onClose} >Close</button>
        </div>
      </div>
    );
  }

export default Profile;
