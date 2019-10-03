"use strict"

const io = require("socket.io")
const redisAdapter = require("socket.io-redis")

function listen(server) {
    const socketServer = io(server, { origins: "*:*" })
    socketServer.adapter(redisAdapter({ host: "redis", port: 6379 }))
    socketServer.on("connect", socket => {
        socket.on("draw", points => {
            socketServer.emit("draw", points)
        })
    })
}

module.exports = listen
