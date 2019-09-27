import io from "socket.io-client"

const HOST = ""
const PORT = 80

const socket = io(`https://${HOST}:${PORT}`)

export default socket