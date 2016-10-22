import React, { Component } from 'react'


export default class UiLogsTabs extends Component {

  constructor () {
    super()
  }

  render () {
    return (
      <ul className='UiLogsTabs'>
      {
        this.state.tabs.map((tab, index) => {
          return (
            <li key={ index } className={ this.isActiveTab(tab) ? 'active' : '' }>
            <span onClick={ () => {this.activeTab = tab} }>
            { tab }
            </span>
            </li>
          )
        })
      }
      </ul>
    )
  }

}
