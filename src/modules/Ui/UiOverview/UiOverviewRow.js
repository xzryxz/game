// @flow

import React, { Component } from 'react'


export default class UiOverviewRow extends Component {

  onClick () {
    this.props.setDestination(this.props.position)
  }

  render () {
    return (
      <tr className={ this.props.className } onClick={ this.onClick.bind(this) } >
        <td>{ this.props.type }</td>
        <td>{ this.props.range }</td>
      </tr>
    )
  }

}
