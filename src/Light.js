import React, { Component } from 'react';
import './App.css';

class Light extends Component {
  constructor(props) {
    super(props);

    this.handleCallback = this.handleCallback.bind(this);
    this.handleCallback();
  }

  handleCallback() {
    if (this.props.light.isOn) {
      setTimeout(
        () => this.props.whenDone(this.props.light),
        this.props.light.time
      );
    }
  }

  componentDidUpdate() {
    this.handleCallback();
  }

  render() {
    return (
      <div
        className={`light ${this.props.light.name}`}
        style={{'opacity': this.props.light.isOn ? 1 : 0.3}}
      >
      </div>
    );
  }
}

Light.PropTypes = {
  light: React.PropTypes.shape({
    name: React.PropTypes.string,
    isOn: React.PropTypes.boolean,
    time: React.PropTypes.number,
    next: React.PropTypes.string,
  }),
  whenDone: React.PropTypes.func,
}

export default Light;
