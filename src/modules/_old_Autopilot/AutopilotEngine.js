// @flow

export default class AutopilotEngine {

  // warp () {
  //   this.start()
  // }

  // moveOnce () {
  //   let s = this.state
  //   let shouldStop = s.self.x === s.destination.x && s.self.y === s.destination.y
  //   if (shouldStop) {
  //     this.stop()
  //   } else {
  //     s.direction = {x:null, y:null}
  //     if (s.self.x < s.destination.x) { s.self.x++; s.direction.x = true }
  //     if (s.self.y > s.destination.y) { s.self.y--; s.direction.y = false }
  //     if (s.self.x > s.destination.x) { s.self.x--; s.direction.x = false }
  //     if (s.self.y < s.destination.y) { s.self.y++; s.direction.y = true }
  //   }
  //   s.stopped = shouldStop
  //   s.log.unshift(`[AUTOPILOT] ${ s.stopped ? 'Ship has arrived at set destination.' : 'Moving at full speed.'}`)
  //   this.setState(s)
  // }


  // addTravelPath () {
  //   const signs = '▇ ▅ █ ▅ ▇ ▂ ▃ ▅ ▃ ▅ ▅ ▄ ▅ ▇'
  //     .split(' ')
  //     .map((content) => { return {order: Math.random(), content: content} })
  //     .sort((a, b) => a.order > b.order)
  //   const newline = signs.map((a) => a.content).join(' ')
  //   let s = this.state
  //   s.log.unshift(' ')
  //   s.log.unshift(' ')
  //   s.log.unshift(' ')
  //   s.log.unshift(' ')
  //   s.log.unshift(' ')
  //   s.log.unshift('[AUTOPILOT] Scanning')
  //   s.log.unshift(newline)
  //   s.log.unshift(' ')
  //   s.log.unshift(`[AUTOPILOT] Scan #${ s.ticks }. Position: ${ s.self.x },${ s.self.y }.`)
  //   s.dots.unshift({ x: s.self.x, y: s.self.y, type: 'travelpath', color: 'rgba(255,255,255, 0.1)', name: 'travel path', })
  //   this.setState(s)
  // }

  // start () {
  //   this.addTravelPath()
  //   this.moveOnce()
  // }

  // stop () {
  //   let s = this.state.ship
  //   clearInterval(s.intervalId)
  //   s.intervalId = null
  //   s.stopped = true
  //   s.log.unshift(`[AUTOPILOT] Ship stopped.`)
  //   this.setState(s)
  // }

}
