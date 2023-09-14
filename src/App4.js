
import { React, useState } from 'react'
export default function App4() {

    const [item, setItem] = useState(['item1', 'item2'])
    function addItemOnUpdate() {
        setItem((prevItem) => { return [...prevItem, `item${prevItem.length + 1}`] })

    }
    let elementItem = item.map((item) => { return <p key={item.length + 1}>{item}</p> })

    return (
        <div className='App4'>
            <button onClick={addItemOnUpdate}>
                add item
            </button>
            {
                elementItem
            }
        </div>
    )
}
