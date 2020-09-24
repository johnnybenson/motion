import * as React from "react"
import { motion } from "../../src"

const styleA = {
    width: 200,
    height: 200,
    background: "white",
    borderRadius: 20,
}

export const App = () => {
    return (
        <div style={{ height: "500vh", paddingTop: 100 }}>
            <motion.div dragDirectionLock drag="x" style={styleA} />
        </div>
    )
}
