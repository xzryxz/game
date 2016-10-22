// @flow

import Armor from './WorldObjectStatsArmor'
import Damage from './WorldObjectStatsDamage'
import Energy from './WorldObjectStatsEnergy'
import Speed from './WorldObjectStatsSpeed'
import Tech from './WorldObjectStatsTech'


export default class WorldObjectStats {

  armor: Armor
  damage: Damage
  energy: Energy
  speed: Speed
  tech: Tech

  constructor (stats?: Object) {
    if (stats === undefined) {
      stats = {
        armor: Math.random(),
        damage: Math.random(),
        energy: Math.random(),
        speed: Math.random(),
        tech: Math.random(),
      }
    }
    this.armor = new Armor(stats.armor)
    this.damage = new Damage(stats.damage)
    this.energy = new Energy(stats.energy)
    this.speed = new Speed(stats.speed)
    this.tech = new Tech(stats.tech)
  }

}
