import React, { Component } from 'react'

export default class UiLogTabs extends Component {

  constructor () {
    super()
  }

  render () {
    return (
      <ul className='UiLogTabs'>
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
