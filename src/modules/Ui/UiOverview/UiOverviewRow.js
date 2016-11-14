// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDestination } from './../../../actions/autopilot'


class UiOverviewRow extends Component {

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

const mapDispatchToProps = (dispatch) => ({
  setDestination: (coordinates) => dispatch(setDestination(coordinates))
})

const connected = connect(null, mapDispatchToProps)(UiOverviewRow)

export default connected
