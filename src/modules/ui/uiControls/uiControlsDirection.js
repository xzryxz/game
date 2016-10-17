import React, { Component } from 'react';

export default class UiControlsDirection extends Component {

  getClassName () {
    let c = 'UiControlsDirection'
    if (this.props.showShip) c += ' full-speed'
    else c += ' hide'
    return c
  }

  render() {
    return (
      <div className={ this.getClassName() }>
        <div className='direction' style={ {
          transform: `rotate(${ this.props.rotation }deg)`,
        } }/>
      </div>
    )
  }

}
