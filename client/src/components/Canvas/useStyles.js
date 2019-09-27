import { makeStyles } from "@material-ui/core"

export default makeStyles(() => ({
    root: {
        position: "absolute",
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        background: "white",
        position: "relative",
        maxWidth: "100%",
        maxHeight: "100%",
        width: "100%",
        height: "auto",
        "@media (min-aspect-ratio: 16/9)": {
            width: "auto",
            height: "100%",
        }
    },
    svg: {
        display: "block",
        width: "100%",
        height: "auto",
        "@media (min-aspect-ratio: 16/9)": {
            width: "auto",
            height: "100%",
        }
    },
    canvas: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
    }
}))