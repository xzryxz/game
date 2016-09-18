export default class Config {

    constructor() {

        this.LOG = [`[SYSTEM] System online.`,
            `[SYSTEM] Starting services.`,
            `[SYSTEM] Distress call nearby.`,
            `[SYSTEM] Starting Autopilot.`,
        ]

        this.GAMESPEED = 10000

        this.DESTINATION = {
            x: 52,
            y: 58
        }

        this.DIFFICULTY = 0.9

        this.DOTS = [{
            x: 52,
            y: 58,
            type: 'signal',
            color: 'blue',
            name: 'distress call',
        }, {
            x: 52,
            y: 58,
            type: 'loot',
            color: 'transparent',
            name: 'spooky wreck',
        }, {
            x: 52,
            y: 58,
            type: 'ship',
            color: 'transparent',
            name: 'ghost pirate',
        }, ].concat(this.generateDots(250, {
            color: 'rgba(255,0,0, 0.15)',
            name: 'bloody pirate',
            type: 'ship',
        })).concat(this.generateDots(5, {
            color: 'green',
            name: 'military storage facility',
            type: 'station',
        }))

    }

    generateDots (n, dot) {
        let dots = []
        for (let i = 0; i < n; i++) {
            let x = Math.floor((Math.random() * 100))
            let y = Math.floor((Math.random() * 100))
            dots.push(Object.assign({
                x,
                y
            }, dot))
        }
        return dots
    }

}
