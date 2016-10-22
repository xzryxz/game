// @flow

import { List as list, Map as map } from 'immutable'
import WorldObject from './WorldObject/WorldObject'


export default class World {

  dots: list<WorldObject>

  constructor () {
    this.populateWorld()
  }

  generateDots (amount: number, template: Object): list<*> {
    return list().withMutations((dots) => {
      for (let i = 0; i < amount; i++ ) {
        let x = Math.floor((Math.random() * 100))
        let y = Math.floor((Math.random() * 100))
        dots.push(Object.assign({ x, y }, template))
      }
    })
  }

  getRandomPirates (amount: number): list<*> {
    const template = {
      name: 'pirate' ,
      type: 'ship',
    }
    return this.generateDots(amount, template)
  }

  getRandomSignals (amount: number): list<*> {
    const randomDots = this.generateDots(amount, {})
    let signals = []
    for (let dot of randomDots) {
      const x = dot.x
      const y = dot.y
      signals.push({ x, y, type: 'signal', name: 'distress call', })
      signals.push({ x, y, type: 'loot', name: 'spooky wreck', })
      signals.push({ x, y, type: 'ship', name: 'ghost pirate', })
    }
    return list(signals)
  }

  getRandomStations (amount: number): list<*> {
    const template = {
      name: 'military storage facility',
      type: 'station',
    }
    return this.generateDots(amount, template)
  }

  populateWorld (): void {
    this.dots = list()
      .concat(this.getRandomSignals(3))
      .concat(this.getRandomStations(10))
      .concat(this.getRandomPirates(250))
      .map((dot) => {
        return new WorldObject(map({
          name: dot.name,
          position: {
            x: dot.x,
            y: dot.y,
          },
          type: dot.type,
        }))
      })
  }

}
