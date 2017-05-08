import React, { Component } from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props)

    this.onInputChange = this.props.onInputChange.bind(this);
  }

  onBlur(e) {
    e.target.focus();
  }

  render() {
    return (
      <input type="text" onChange={this.onInputChange} autoFocus="true" onBlur={this.onBlur} />
    )
  }
}
