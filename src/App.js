import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput/UserInput';
import UserOutput from './User/UserOutput/UserOutput';

class App extends Component {
  state = {
    username : 'Super Anumaan !!'
  }

  userNameChangedHandler= (event) => {
    this.setState({username : event.target.value});
  }

  render() {
    return (
      <div>
      <UserInput
       changed={this.userNameChangedHandler}
       currentName={this.state.username}
       />
      <UserOutput userName={this.state.username} />
      <UserOutput userName={this.state.username} />
      <UserOutput userName="Anumaanbhavi"/>
      </div>
    )
  }
}

export default App;

