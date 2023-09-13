import React from "react";
import GalleryData from "../GalleryData";
import "../styles.css";

export default function Gallery({ index, onNextClicked, onPrevClicked }) {
  return (
    <div>
      <button className="imageButton" onClick={onPrevClicked}>
        Previous
      </button>
      <button className="imageButton" onClick={onNextClicked}>
        Next
      </button>

      <h2>
        {" "}
        <i>{GalleryData[index].name}</i> by {GalleryData[index].artist}
      </h2>
      <h3>
        ({index} of {GalleryData.length} )
      </h3>
      <img src={GalleryData[index].url} alt={GalleryData[index].alt} />
      <p>{}</p>
    </div>
  );
}
