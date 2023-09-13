import React from "react";
import GalleryData from "../GalleryData";
function Gallery({index, onNextClicked}) {
  return (
    <div>
      <button onClick={onNextClicked}>Next</button>
      <h2>
        {" "}
        <i>{GalleryData[index].name}</i> by {GalleryData[index].artist}
      </h2>
      <h3>
        ({index} of {GalleryData.length} )
      </h3>
      <img src={GalleryData[index].url} 
      alt={GalleryData[index].alt} />
      <p>{}</p>
    </div>
  );
}

export default Gallery;
