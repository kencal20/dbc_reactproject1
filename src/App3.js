import { React, useState } from 'react'
import Gallery from './Components/gallery'

export default function App3() {
  const [index, setIndex] = useState(1)
  function onNextClick() {
    setIndex((prevIndex) => { return prevIndex + 1 })
  }
  return (
    <div className='App3'>
      <Gallery 
      index ={index}
      onNextClicked ={onNextClick}
      />

    </div>
  )
}
