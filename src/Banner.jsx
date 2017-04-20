import React, { Component } from 'react';

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>{this.props.text}</h1>
    )
  }


}
