// @flow

import React, { Component } from 'react';


export default class UiControlsDirection extends Component {

  getStyle (): Object {
    return {
      transform: `rotate(${ this.props.rotation }deg)`,
    }
  }

  render() {
    return (
      <div className='UiControlsDirection'>
        <div className='direction' style={ this.getStyle() } />
      </div>
    )
  }

}
