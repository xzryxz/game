import React, { Component } from 'react';
import RadarArrow from './RadarArrow.js';

export default class Inventory extends Component {
  render() {
    let bag = (item, index) => {
      return (
        <div key={ index }>
          <div style={{float: 'right'}}>
            { item.quantity === Infinity ? "\u221E" : item.quantity }
          </div>
          <div>
            { item.name }
          </div>
        </div>
      )
    }
    let bags = this.props.self.inventory.map((item, index) => {
      return bag(item, index)
    })
    return (
      <div className='Inventory'>
        <div className='bags'>
          { bags }
        </div>
        <div style={ {
          height: '4em',
          width: '4em',
          marginTop: '-1em',
          marginLeft: '-1em',
          position: 'absolute,'
        } }>
          <RadarArrow direction={ {x:null,y:null} } setDirection={ this.props.setDirection } />
          <RadarArrow direction={ {x:true,y:false} } setDirection={ this.props.setDirection } />
          <RadarArrow direction={ {x:true,y:null} } setDirection={ this.props.setDirection } />
          <RadarArrow direction={ {x:true,y:true} } setDirection={ this.props.setDirection } />
          <RadarArrow direction={ {x:null,y:true} } setDirection={ this.props.setDirection } />
          <RadarArrow direction={ {x:false,y:true} } setDirection={ this.props.setDirection } />
          <RadarArrow direction={ {x:false,y:null} } setDirection={ this.props.setDirection } />
          <RadarArrow direction={ {x:false,y:false} } setDirection={ this.props.setDirection } />
        </div>
      </div>
    )
  }
}
