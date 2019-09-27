import React from "react"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

const Canvas = () => {
    const classes = useStyles()
    const { canvas, toggleDrawing, addPoint } = useLogic()

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <svg className={classes.svg} width="16" height="9" />
                <canvas
                    width="1920"
                    height="1080"
                    onMouseDown={toggleDrawing(true)}
                    onMouseUp={toggleDrawing(false)}
                    onMouseMove={addPoint}
                    ref={canvas}
                    className={classes.canvas} />
            </div>
        </div>
    )
}

export default Canvas