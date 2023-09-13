import React, { useState } from 'react';
import Button from './Components/button';

export default function App2() {
    const [X, setX] = useState(true);

    function handleClick() {
        setX((prevX) => !prevX);
    }

    let emoji;
    if (X === true) {
        emoji = "👍";
    } else {
        emoji = "👎";
    }

    return (
        <div>
            <div className='container'>
                <Button handleClick={() => alert("You just clicked 'Upload'")}>
                    UPLOAD MOVIE
                </Button>
                <br />
                <Button handleClick={handleClick}>
                    Change emoji
                </Button>
                <p>{emoji}</p>
            </div>

        </div>
    )
}