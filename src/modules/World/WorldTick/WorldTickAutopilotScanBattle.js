export default class WorldTickAutopilotScanBattle {


  _encounters () {
    let s = this.state
    if (s.piratesInbound && s.stopped) {
      this._battle()
    }
  }

  kill (pirate) {
    let s = this.state
    pirate.dead = true
    pirate.type = 'loot'
    pirate.color = 'transparent'
    pirate.name = `${ pirate.name }'s wreck`
    this.setState(s)
  }

  loot (dollars) {
    let s = this.state
    s.self.inventory[3].quantity += dollars
    s.log.unshift(`[AUTOPILOT] Looted ${ dollars } dollars.`)
    this.setState(s)
  }

  _battle () {
    let s = this.state
    let pirate = s.scan.filter((dot, i) => { return !dot.dead && dot.name.indexOf('pirate') >= 0 ? dot : false })[0]
    if (!pirate) {
      return
    }
    s.log.unshift(`[${ pirate.name.toUpperCase() }] Ye shouldn't 'ave stopped 'ere fools!`)
    s.log.unshift(`[${ pirate.name.toUpperCase() }] Get 'em!`)

    /**
     * bonus (ie ship stats) should be 0.5 or more to win every time "take one hit then shoot em down"
     * @type {Float}
     */
    const bonus = 0.5

    /**
     * Float number from 0 to 1
     * @type {Float}
     */
    const zeroPointSomething = Math.random()

    /**
     * Float number from -0.5 to 0.5
     * @type {Float}
     */
    const base = zeroPointSomething - 0.5

    /**
     * @type {Boolean}
     */
    const result = base + bonus > 0

    /**
     * Action!
     */
    if (result) {
      s.log.unshift(`[AUTOPILOT] Aiming lazer blasters.`)
      s.log.unshift(`[AUTOPILOT] Enemy eliminated.`)
      this.kill(pirate)
      this.loot(100)
      s.piratesInbound = false
    } else {
      s.log.unshift(`[AUTOPILOT] Incoming missiles!`)
      s.log.unshift(`[${ pirate.name.toUpperCase() }] NOW YE DIE, YARR!`)
      s.log.unshift(`[AUTOPILOT] Ship is taking damage!`)
      s.log.unshift(`[${ pirate.name.toUpperCase() }] HA-HA-HA-HA!`)
    }

    this.setState(s)
  }

}
