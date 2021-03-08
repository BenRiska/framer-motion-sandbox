import React from 'react'
import {motion,} from "framer-motion"

const drag = () => {
    return (
        <div className="container">
            <h1 className="padding">Drag</h1>
            <h2 className="padding">Draggable element</h2>
            <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "blue",
                cursor: "grab"
            }}
            drag
            ></motion.div>
            <h2 className="padding">Draggable element with constraints</h2>
            <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "blue",
                cursor: "grab"
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            ></motion.div>
            <h2 className="padding">Draggable element with lowered elasticity</h2>
            <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "blue",
                cursor: "grab"
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            ></motion.div>
            <h2 className="padding">Draggable element with heightened elasticity</h2>
            <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "blue",
                cursor: "grab"
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.9}
            ></motion.div>
            <h2 className="padding">Draggable element with momentum disabled</h2>
            <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "blue",
                cursor: "grab"
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragMomentum={false}
            ></motion.div>
            <h2 className="padding">Draggable element with custom transition</h2>
            <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "blue",
                cursor: "grab"
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            ></motion.div>
            <h2 className="padding">onDrag start callback</h2>
            <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "blue",
                cursor: "grab"
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragStart={() => alert("callback started")}
            ></motion.div>
            <h2 className="padding">onDrag end callback</h2>
            <motion.div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "blue",
                cursor: "grab"
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={() => alert("callback started")}
            ></motion.div>
        </div>
    )
}

export default drag
