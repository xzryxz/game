// @flow

import { Map } from 'immutable'
import WorldObjectStats from './WorldObjectStats'


export default class WorldObject {

  name: string
  stats: Object
  position: Object
  type: string

  constructor (props: Map<*,*>) {
    this.name = props.get('name')
    this.position = props.get('position')
    this.stats = new WorldObjectStats()
    this.type = props.get('type')
  }

}
