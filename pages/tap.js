import React from 'react'
import {motion} from "framer-motion"

const tap = () => {
    return (
        <div className="container">
            <h1 className="padding">Tap</h1>
            <h2 className="padding">while tap animation</h2>
            <motion.div 
            whileTap={{scale: 0.95}}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">on tap callback</h2>
            <motion.div 
            onTap={(e, info) => alert(info.point.x, info.point.y)}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            ></motion.div>
            <h2 className="padding">on tap start callback</h2>
            <motion.div 
            onTapStart={(e, info) => alert(info.point.x, info.point.y)}
            style={{
            width: "100px", 
            height: "100px", 
            backgroundColor: "red", 
            cursor: "pointer"}}
            ></motion.div>
        </div>
    )
}

export default tap
