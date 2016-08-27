import React, { Component } from 'react';

export default class Console extends Component {
  render() {
    return (
      <div className="Console">
        <div className='log'>
          {
            this.props.output.map(function (msg, i) {
              return (<div key={ i }> { msg } </div>)
            })
          }
        </div>
      </div>
    )
  }
}
