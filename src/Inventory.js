import React, { Component } from 'react';

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
      </div>
    )
  }
}
