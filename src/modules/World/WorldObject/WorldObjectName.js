export default class WorldObjectName {

  constructor (name) {
    if (typeof name !== 'string' || name === '') {
      throw new Error(`Argument 'name' must be string but got '${ name }'.`)
    }
    this._value = name
  }

  get value () {
    return this._value
  }

}
