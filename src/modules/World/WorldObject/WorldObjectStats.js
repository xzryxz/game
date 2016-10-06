import WorldObjectStatsArmor from './WorldObjectStatsArmor'
import WorldObjectStatsDamage from './WorldObjectStatsDamage'
import WorldObjectStatsEnergy from './WorldObjectStatsEnergy'
import WorldObjectStatsSpeed from './WorldObjectStatsSpeed'
import WorldObjectStatsTech from './WorldObjectStatsTech'

export default class WorldObjectStats {

  constructor (stats) {
    if (typeof stats !== 'object') {
      throw new Error(`Argument 'stats' must be object but got '${ stats }'.`)
    }
    this._armor = new WorldObjectStatsArmor(stats.armor)
    this._damage = new WorldObjectStatsDamage(stats.damage)
    this._energy = new WorldObjectStatsEnergy(stats.energy)
    this._speed = new WorldObjectStatsSpeed(stats.speed)
    this._tech = new WorldObjectStatsTech(stats.tech)
  }

  get armor () {
    return this._armor
  }

  get damage () {
    return this._damage
  }

  get energy () {
    return this._energy
  }

  get speed () {
    return this._speed
  }

  get tech () {
    return this._tech
  }


}
