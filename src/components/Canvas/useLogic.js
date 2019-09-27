import { useRef, useState, useEffect } from "react"

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
        const { offsetX, offsetY } = nativeEvent
        if (isDrawing.current) setPoints(([initial, current]) => [current ? current : initial, [offsetX, offsetY]])
    }

    useEffect(() => draw(canvas.current, points), [points])

    return { canvas, toggleDrawing, addPoint }
}

function draw(canvas: HTMLCanvasElement, points) {
    if (points.length < 2) return
    const context = canvas.getContext("2d")
    context.fillStyle = "#000000"

    const [initial, current] = points
    const [ratioX, ratioY] = [canvas.width / canvas.clientWidth, canvas.height / canvas.clientHeight]

    context.moveTo(ratioX * initial[0], ratioY * initial[1])
    context.lineTo(ratioX * current[0], ratioY * current[1])
    context.stroke()
}

export default useLogic