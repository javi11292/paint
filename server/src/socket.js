"use strict"

const io = require("socket.io")

function listen(server) {
    const socketServer = io(server, { origins: "*:*" })

    socketServer.on("connect", socket => {
        socket.on("draw", points => {
            socketServer.emit("draw", points)
        })
    })
}

module.exports = listen
