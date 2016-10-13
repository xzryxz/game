export default class AutopilotScan {

  _localScan (type) {
    let s = this.state
    s.log.unshift(`[SCANNER] Found ${ this.dots.filter((dot) => { return dot.type === 'ship' }).length } signals.`)
    const result = this.dots.filter((dot) => { return dot.x === s.self.x && dot.y === s.self.y ? dot : false })
    s.log.unshift(`[SCANNER] ${ result.filter((dot) => { return dot.type === 'ship' && dot.dead ? dot : false }).length > 0 ? 'You are not alone.' : 'You are in dark space.'}`)
    result.forEach((dot) => {
      if (dot.name.indexOf('pirate') >= 0 && !dot.dead) {
        if (s.stopped) s.piratesInbound = true
        s.log.unshift(`[${dot.name.toUpperCase()}] YARRRRRR!`)
      }
    })
    s.scan = result
    this.setState(s)
  }

}
