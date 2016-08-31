import React, { Component } from 'react';

export default class Console extends Component {
  render() {
    return (
      <div className='Console'>
        <ul className='tabs'>
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
        <div className='log'>
          {
            this.activeLog.reverse().map((msg, i) => {
              return (<div key={ i }> { msg } </div>)
            })
          }
        </div>
      </div>
    )
  }
  constructor (props) {
    super()
    this.state = {
      tabs: [
        'ALL',
        'AUTOPILOT',
        'SCANNER',
        'SYSTEM',
      ],
      activeTab: 'ALL'
    }
  }
  get activeTab () {
    return this.state.activeTab
  }
  set activeTab (activeTab) {
    if (typeof activeTab === 'string') {
      let s = this.state
      s.activeTab = activeTab
      this.setState(s)
    } else {
      throw new Error(`Tag must be a string but got '${ typeof activeTab }'.`)
    }
  }
  isActiveTab (tab) {
    return tab === this.state.activeTab
  }
  get activeLog () {
    if (this.activeTab === 'ALL') return this.props.log
    return this.props.log.filter((text) => {
      if (text.indexOf(`[${ this.activeTab }]`) >= 0) return text
      else return false
    })
  }
}
