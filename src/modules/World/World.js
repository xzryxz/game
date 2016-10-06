import WorldObject from './WorldObject/WorldObject'
import WorldTick from './WorldTick/WorldTick'

export default class World {

  constructor () {
    this._object = new WorldObject()
    this._tick = new WorldTick()
  }

  get object () {
    return this._object
  }

  get tick () {
    return this._tick
  }

}


const DOTS = [ { x:52, y:58, type: 'signal', color: 'blue', name: 'distress call', },
               { x:52, y:58, type: 'loot', color: 'transparent', name: 'spooky wreck', },
              { x:52, y:58, type: 'ship', color: 'transparent', name: 'ghost pirate', },
             ].concat(generateDots(250, {
               color: 'rgba(255,0,0, 0.15)',
               name: 'bloody pirate' ,
               type: 'ship',
             })).concat(generateDots(5, {
               color: 'green',
               name: 'military storage facility',
               type: 'station',
             }))

function generateDots (n, dot) {
  let dots = []
  for (let i = 0; i < n; i++ ) {
    let x = Math.floor((Math.random() * 100))
    let y = Math.floor((Math.random() * 100))
    dots.unshift(Object.assign({ x, y }, dot))
  }
  return dots
}


const LOG = [
  `[SYSTEM] Starting Autopilot.`,
  `[SYSTEM] Distress call nearby.`,
  `[SYSTEM] Starting services.`,
  `[SYSTEM] System online.`,
]
const GAMESPEED = 500
const DESTINATION = {x: 52, y: 58}
