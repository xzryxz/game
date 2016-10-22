// @flow

import { List as list } from 'immutable'


export default class AutopilotLogger {

  logs: list<string>

  constructor () {
    this.logs = []
  }

  log (entry: string): void {
    if (typeof entry !== 'string' || entry === '') {
      throw new Error(`Argument 'entry' must be a non empty string but got '${ entry }'.`)
    }
    if (this.logs.length && this.logs[0].indexOf('[SYSTEM] Destination set to') === 0) {
      this.logs.shift()
    }
    this.logs.unshift(entry)
  }

}
