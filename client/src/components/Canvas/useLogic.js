import { useRef, useState, useEffect } from "react"
import socket from "libraries/socket"

function useLogic() {
    const [points, setPoints] = useState([])
    const canvas = useRef()
    const isDrawing = useRef(false)

    function toggleDrawing(drawing) {
        return ({ nativeEvent }) => {
            isDrawing.current = drawing
            const { offsetX, offsetY } = nativeEvent
            if (drawing) setPoints([[offsetX, offsetY]])
        }
    }

    function addPoint({ nativeEvent }) {
        if (isDrawing.current) {
            const { offsetX, offsetY } = nativeEvent
            setPoints(([initial, current]) => [current ? current : initial, [offsetX, offsetY]])
        }
    }

    useEffect(() => {
        socket.on("draw", points => draw(canvas.current, points))
        return () => socket.off("draw")
    }, [])

    useEffect(() => {
        if (points.length !== 2) return
        const [initial, current] = points
        const [ratioX, ratioY] = [canvas.current.width / canvas.current.clientWidth, canvas.current.height / canvas.current.clientHeight]
        socket.emit("draw", [[ratioX * initial[0], ratioY * initial[1]], [ratioX * current[0], ratioY * current[1]]])
    }, [points])

    return { canvas, toggleDrawing, addPoint }
}

function draw(canvas: HTMLCanvasElement, points) {
    if (points.length !== 2) return
    const context = canvas.getContext("2d")
    context.fillStyle = "#000000"

    const [initial, current] = points

    context.moveTo(...initial)
    context.lineTo(...current)
    context.stroke()
}

export default useLogic