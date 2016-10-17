import WorldObjectId from './WorldObjectId'
import WorldObjectName from './WorldObjectName'
import WorldObjectStats from './WorldObjectStats'

export default class WorldObject {

  constructor (id, name, stats, position, type) {
    this._id = new WorldObjectId(id)
    this._name = new WorldObjectName(name)
    this._stats = new WorldObjectStats(stats)
    this._position = position
    this._type = type
  }

  get id () {
    return this._id
  }

  get name () {
    return this._name
  }

  get name () {
    return this._name
  }

  get position () {
    return this._position
  }

  get type () {
    return this._type
  }

}
