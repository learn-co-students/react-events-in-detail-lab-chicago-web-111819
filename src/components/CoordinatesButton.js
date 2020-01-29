
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  getCoords = e => [e.clientX, e.clientY];

  render() {
    return (
      <button id="btn" onClick={e => this.props.onReceiveCoordinates(this.getCoords(e))}>Get Coordinates</button>
    );
  }
}

