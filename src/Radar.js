import React, { Component } from 'react';
import RadarUi from './RadarUi.js';

export default class Radar extends Component {
  render() {
    return (
      <div className="Radar">
        <RadarUi
          dest={ this.props.dest }
          dots={ this.props.dots }
          self={ this.props.self }
          setDest={ this.props.setDest }
        />
      </div>
    )
  }
}
