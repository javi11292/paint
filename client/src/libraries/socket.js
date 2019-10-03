import io from "socket.io-client"

const HOST = "https://javiscript-paint.herokuapp.com/"

const socket = io(HOST, { transports: ["websocket"] })

export default socket