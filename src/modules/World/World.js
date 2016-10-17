import WorldObject from './WorldObject/WorldObject'

export default class World {

  constructor (ship) {
    this._dots = DOTS.map((dot, index) => {
      const position = {
        x: dot.x,
        y: dot.y,
      }
      return new WorldObject(index, dot.name, null, position, dot.type)
    })
  }

  get dots () {
    return this._dots
  }

}


const DOTS = [ { x:50, y:50, type: 'signal', color: 'blue', name: 'distress call', },
               { x:50, y:50, type: 'loot', color: 'transparent', name: 'spooky wreck', },
              { x:50, y:50, type: 'ship', color: 'transparent', name: 'ghost pirate', },
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
