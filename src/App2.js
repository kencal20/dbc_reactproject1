import React from 'react'
import Button from './Components/button'
let App2 = () => {
    return (
        <div>
            <div className='container' handleClick={() => { return (alert("ypu just clicked white ")) }}>
                <Button handleClick={() => { return (alert("Uploading ")) }}>
                    UPlOAD MOVIE
                </Button>
                <Button handleClick={() => { return (alert("Uploading ")) }}>
                    UPlOAD MOVIE
                </Button>
            </div>
        </div>
    )
}
export default App2