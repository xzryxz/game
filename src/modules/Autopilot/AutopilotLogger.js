// @flow

import { List as list } from 'immutable'


export default class AutopilotLogger {

  logs: list<string>

  constructor () {
    this.logs = list([`[SYSTEM] System online.`])
  }

  log (entry: string): void {
    if (typeof entry !== 'string' || entry === '') {
      throw new Error(`Argument 'entry' must be a non empty string but got '${ entry }'.`)
    }
    this.logs.unshift(entry)
  }

}
