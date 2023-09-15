import React, { useState } from 'react'
import Contactcard from './contactCard'

export default function App5() {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    return (
        <div className='App5' onPointerMove={(e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }}
            style={{
                position: "relative",
                width: "100vm",
                height: "100vh"
            }}
        >
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
 <Contactcard/>

        </div>




    )
}
