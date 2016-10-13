export default class AutopilotLog {

  constructor (props) {
    this._log = []
  }

  get read () {
    return this._log
  }

  write (entry) {
    if (typeof entry !== 'string' || entry === '') {
      throw new Error(`Argument 'entry' must be a non empty string but got '${ entry }'.`)
    }
    this._log.unshift(entry)
  }

}
