import { React, useState } from "react";
import logo from "../logo.png";
import "../style.css";
export default function Contactcard() {
  const [card, setCard] = useState({
    firstName: "2pac",
    lastName: "Shacol",
    phone: "202020202",
    email: "2pac@gmail.com",
    isliked: false,
  });
  function islikedClicked() {
    setCard((prevCard) => ({ ...prevCard, isliked: !prevCard.isliked }));
  }
  let emoji;
  if (card.isliked === true) {
    emoji = "👍";
  } else {
    emoji = "👎";
  }

  return (
    <div>
      <img src={logo} alt="" />
      <br />

      <p>firstName : {card.firstName}</p>
      <p>lastName : {card.lastName}</p>
      <p>phone : {card.phone}</p>
      <p>email : {card.email}</p>
      <button onClick={islikedClicked}>{emoji}</button>
    </div>
  );
}
