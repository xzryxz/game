import WorldObjectId from './WorldObjectId'
import WorldObjectName from './WorldObjectName'
import WorldObjectStats from './WorldObjectStats'

export default class WorldObject {

  constructor (id, name, stats, position) {
    this._id = new WorldObjectId(id)
    this._name = new WorldObjectName(name)
    this._stats = new WorldObjectStats(stats)
    this._position = position
  }

  get id () {
    return this._id
  }

  get name () {
    return this._name
  }

  get stats () {
    return this._stats
  }

  get position () {
    return this._position
  }

}
