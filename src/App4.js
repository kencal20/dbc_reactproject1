
import { React, useState } from 'react'
export default function App4() {

    const [item, setItem] = useState(['item1', 'item2'])
    function addItemOnUpdate() {
        setItem((prevItem) => { return [...prevItem, `item${prevItem.length + 1}`] })
        console.log(item);
    }

    return (
        <div className='App4'>
            <button onClick={addItemOnUpdate}>
                add item
            </button>
            {
                item
            }
        </div>
    )
}
