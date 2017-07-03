import React, { Component } from 'react';
import Light from './Light.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lights: [
        {
          name: 'red',
          isOn: true,
          time: 2000,
          next: 'green',
        },
        {
          name: 'yellow',
          isOn: false,
          time: 500,
          next: 'red',
        },
        {
          name: 'green',
          isOn: false,
          time: 2000,
          next: 'yellow',
        },
      ]
    };

    this.changeColour = this.changeColour.bind(this);

  }

  changeColour(currentLight) {
    this.setState({
      lights: this.state.lights.map(light => {
        if (light.name === currentLight.name) {
          light.isOn = false;
        }

        if (light.name === currentLight.next) {
          light.isOn = true;
        }
        return light;
      }),
    })
  }

  render() {
    return (
      <div className="trafficLight">
        {this.state.lights.map(light =>
          <Light key={light.name} light={light} whenDone={this.changeColour}/>
        )}
      </div>
    );
  }
}

export default App;
