// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { start, stop } from './../../../actions/autopilot'
import { List as list, Map as map } from 'immutable'
import './UiCommandline.css'


class UiCommandline extends Component {

  componentDidMount () {
    this.refs.inputElement.focus()
  }

  getRange (x: number, y: number): number {
    const getDiff = (a: number, b: number): number => Math.abs(a - b)
    return getDiff(x, this.props.position.x) + getDiff(y, this.props.position.y)
  }

  find (type) {
    return this.props.dots.filter((dot) => {
      if (dot.type === type) return dot
      return false
    }).sort((a, b) => {
      return this.getRange(a.position.x, a.position.y) - this.getRange(b.position.x, b.position.y)
    }).valueSeq().get(0)
  }

  runCommand (command) {
    let commands = map({
      A: 'AUTO',
      D: 'DOCK',
      S: 'STOP',
      W: 'WARP',
    })
    if (list(commands.keySeq()).includes(command)) command = commands.get(command)
    switch (command) {
      case 'AUTO':
        this.props.dispatch(start(`[SYSTEM] Auto`, this.find('ship').position))
        break;
      case 'DOCK':
        this.props.dispatch(start(`[SYSTEM] Dock`, this.find('station').position))
        break;
      case 'STOP':
        this.props.dispatch(stop(`[SYSTEM] Stop`))
        break;
      case 'WARP':
        this.props.dispatch(start(`[SYSTEM] Warp`))
        break;
      default:
        console.log('command not found');
    }
    // if (command === 'AUTO' || command === 'DOCK' || command === 'WARP') {
    //   if (command === 'AUTO') {
    //     print(`[SYSTEM] Auto attacking.`)
    //     nextState.active = true
    //     nextState.destination.x = nextState.mission.x
    //     nextState.destination.y = nextState.mission.y
    //   }
    //   if (command === 'DOCK') {
    //     print()
    //     nextState.active = true
    //     nextState.destination.x = nextState.home.x
    //     nextState.destination.y = nextState.home.y
    //   }
    //   if (command === 'WARP') {
    //     if (compareCoordinates(nextState.destination, nextState.position)) {
    //       print(`[ERROR] No destination.`)
    //     } else {
    //       print(`[SYSTEM] Warping.`)
    //       nextState.active = true
    //     }
    //   }
    // } else if (command === 'STOP') {
    //   print(`[SYSTEM] Stopped.`)
    //   nextState.active = false
    // } else {
    //   print(`[ERROR] ${ command }: Command not found.`)
    // }
    // dispatch(runCommand(command))
  }

  onKeyDown (event: Object): void {
    const tabOrArrowKeys = list([9, 37, 38, 39, 40])
    const command = this.refs.inputElement.value.toUpperCase()
    const keyCode = event.keyCode
    if (tabOrArrowKeys.includes(keyCode)) {
      event.preventDefault()
    } else if (keyCode === 13 && command.length) {
      this.runCommand(command)
      this.refs.inputElement.value = null
    }
  }

  render () {
    return (
      <div className='UiCommandline'>
        <input onKeyDown={ this.onKeyDown.bind(this) } ref='inputElement' />
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

const mapStateToProps = (state) => ({
  dots: state.world.dots,
  position: state.autopilot.position,
})

const connected = connect(mapStateToProps, mapDispatchToProps)(UiCommandline)

export default connected
