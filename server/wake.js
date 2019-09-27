"use strict"

const https = require("https")

setInterval(() => {
    https.get(`https://javiscript-paint.herokuapp.com`)
}, 15 * 60 * 1000)