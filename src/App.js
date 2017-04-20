import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Input from './Input';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {bannerText: "type here and fuck off"};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(input) {
    this.setState({bannerText: input.target.value});
  }

  render() {
    return (
      <div>
        <Banner text={this.state.bannerText}/>

        <Input onInputChange={this.onInputChange} />
      </div>
    );
  }
}

export default App;
