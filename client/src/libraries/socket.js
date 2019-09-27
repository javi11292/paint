import io from "socket.io-client"

const HOST = "javiscript-paint.herokuapp.com"
const PORT = 80

const socket = io(`https://${HOST}:${PORT}`)

export default socket