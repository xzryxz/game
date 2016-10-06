export default class WorldObjectId {

  constructor (id) {
    if (typeof id !== 'number' || isNaN(id)) {
      throw new Error(`Argument 'id' must be number but got '${ id }'.`)
    }
    this._value = id
  }

  get value () {
    return this._value
  }

}
