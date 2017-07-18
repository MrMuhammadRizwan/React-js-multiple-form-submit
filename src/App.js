import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.state = {
      name: 'Rizwan',
      message: 'This is comment line'
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: this.refs.input_value.value
    });
    console.log('Success name change to:', this.refs.input_value.value);
    this.refs.input_value.value = '';
  }
  handleSubmit2(e) {
    e.preventDefault();
    this.setState({
      message: this.refs.input_comment_value.value
    });
    console.log('Success comment change to:', this.refs.input_comment_value.value);
    this.refs.input_comment_value.value = '';
  }
  render() {
    let name = this.state.name;
    let message = this.state.message;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="input-cl-wrap">
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="input_value" placeholder="Enter Name..." className="input-cl" />
            <button className="d-btn">Change Name</button>
          </form>
        </div>
        <div className="input-cl-wrap">
          <form onSubmit={this.handleSubmit2}>
            <input type="text" ref="input_comment_value" placeholder="Enter Comment..." className="input-cl" />
            <button className="d-btn">Change Comment</button>
          </form>
        </div>
        <div className="App-intro">
          <h2>Welcome: {name} </h2>
          <p>Message: {message} !!!</p>
        </div>
      </div>
    );
  }
}

export default App;
