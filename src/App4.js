import React, { useState } from 'react';

export default function App4() {
    const [item, setItem] = useState(['item1']);

    const artistData = [
        { id: 0, name: 'Marta Colvin Andrade' },
        { id: 1, name: 'Lamidi Olonade Fakeye' },
        { id: 2, name: 'Louise Nevelson' },
    ];

    const [artists, setArtist] = useState(artistData);

    function addItemOnUpdate() {
        setItem((prevItem) => [...prevItem, `item${prevItem.length + 1}`]);
    }

    let elementItem = item.map((item) => <p key={item.length + 1}>{item}</p>);

    let artistElement = artists.map((artist) => (
        <p key={artist.id}>
            {artist.name}{' '}
            <button
                onClick={() => {
                    setArtist(artists.filter((a) => a.id !== artist.id));
                }}
            >
                Delete
            </button>{' '}
        </p>
    ));

    return (
        <div className="App4">
            <button onClick={addItemOnUpdate}>add item</button>
            {elementItem}
            {artistElement}
        </div>
    );
}
