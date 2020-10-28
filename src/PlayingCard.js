import React from "react";
import { useFlip } from './hooks'
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [faceUp, flip] = useFlip()
  return (
    <img
      src={faceUp ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
