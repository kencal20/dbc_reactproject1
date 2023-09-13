import React from 'react'
import Button from './Components/button'

export default function App2() {
function handleClick(){
  
}
    return (
        <div>
            <div className='container' handleClick={() => { return (alert("ypu just clicked white ")) }}>
                <Button handleClick={() => { return (alert("Uploading ")) }}>
                    UPlOAD MOVIE
                </Button>
                <br/>
                <Button handleClick={() => { return handleClick(alert('helllllll')) }}>
                 PLAY MOVIE
                </Button>
            </div>
        </div>
    )
}
