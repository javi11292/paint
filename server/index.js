"use strict"

const express = require("express")
const router = require("./src/router")
const listen = require("./src/socket")

const PORT = process.env.PORT
const app = express()

function onReady() {
    console.log(`Listening on port ${PORT}`)
}

app.use(router)

const server = app.listen(PORT, onReady)

listen(server)
