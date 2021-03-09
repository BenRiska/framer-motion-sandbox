import React, {useState} from 'react'
import {motion} from "framer-motion"

const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
  };

const pageTransition = () => {
    const [selected, setSelected] = useState(colors[0]);
    return (
        <div className="container">
            <motion.h1 layoutId="title" className="padding">Page Transition</motion.h1>
            <h2 className="padding">Transition between components</h2>
            <ul>
                {colors.map(color => {
                        const isSelected = selected === color
                        return (
                        <li className="item" onClick={() => setSelected(color)} style={{ backgroundColor: color }}>
                        {isSelected && (
                        <motion.div
                        layoutId="outline"
                        className="outline"
                        initial={false}
                        animate={{ borderColor: color }}
                        transition={spring}
                        />
                    )}
                  </li>)
                })
                }
            </ul>
        </div>
    )
}

export default pageTransition
