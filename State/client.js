const createFailsafeSocket = require('./failsafeSocket')
const failsfeSocket = createFailsafeSocket({ port:5000 })

setInterval(() => {
    failsfeSocket.send(process.memoryUsage())
}, 1000)