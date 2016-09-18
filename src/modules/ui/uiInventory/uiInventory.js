import React, { Component } from 'react';
import './UiInventory.css'

export default class UiInventory extends Component {
  render() {
    let bag = (item, index) => {
      return (
        <li key={ index }>
          <span> { item.name }:&nbsp;</span><span>{ item.quantity === Infinity ? "\u221E" : item.quantity } </span>
        </li>
      )
    }
    let bags = this.props.self.inventory.map((item, index) => {
      return bag(item, index)
    })
    return (
      <div className='UiInventory'>
        <ul className='bags'>
          { bags }
        </ul>
      </div>
    )
  }
}
