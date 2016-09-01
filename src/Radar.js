import React, { Component } from 'react';
import RadarUi from './RadarUi.js';

export default class Radar extends Component {
  render() {

    document.onkeydown = checkKey.bind(this);

    function checkKey (e) {
      const dest = this.props.dest
      if (e.keyCode === '38') {
        this.props.setDest({
          x: (dest.x ? dest.x : dest.x),
          y: (dest.y ? dest.y : dest.y) - 1,
        })
      }
      else if (e.keyCode === '40') {
        this.props.setDest({
          x: (dest.x ? dest.x : dest.x),
          y: (dest.y ? dest.y : dest.y) + 1,
        })
      }
      else if (e.keyCode === '37') {
        this.props.setDest({
          x: (dest.x ? dest.x : dest.x) - 1,
          y: (dest.y ? dest.y : dest.y),
        })
      }
      else if (e.keyCode === '39') {
        this.props.setDest({
          x: (dest.x ? dest.x : dest.x) + 1,
          y: (dest.y ? dest.y : dest.y),
        })
      }
    }

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
