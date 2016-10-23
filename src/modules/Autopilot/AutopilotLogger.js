// @flow

export default class AutopilotLogger {

  logs: Array<string>

  constructor () {
    this.logs = []
  }

  isDestinationEntry (entry: string): boolean {
    return entry.indexOf('[SYSTEM] Destination set to') === 0
  }

  log (entry: string): void {
    if (typeof entry !== 'string' || entry === '') {
      throw new Error(`Argument 'entry' must be a non empty string but got '${ entry }'.`)
    }
    if (this.logs.length && this.isDestinationEntry(this.logs[0]) && this.isDestinationEntry(entry)) {
      this.logs.shift()
    }
    this.logs.unshift(entry)
  }

}
