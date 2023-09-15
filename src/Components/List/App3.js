import { React, useState } from 'react'
import Gallery from '../button/button'

export default function App3() {
  const [index, setIndex] = useState(0)
  function onNextClick() {
    setIndex((prevIndex) => { return prevIndex + 1 })
  }
  function onPrevClick() {
    setIndex((prevIndex) => { return prevIndex - 1 })
  }
  
  return (
    <div className='App3'>
      <Gallery 
      index ={index}
      onNextClicked ={onNextClick}
      
      index1={index}
      onPrevClicked={onPrevClick}
    
      />

    </div>
  )
}
