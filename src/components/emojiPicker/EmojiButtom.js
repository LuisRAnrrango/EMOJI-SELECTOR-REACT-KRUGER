import React from "react";

export default function EmojiButtom({ emoji, onClick }) {
  function handleClick() {
    onClick(emoji);
  }
  return <button onClick={handleClick}>{emoji.symbol}</button>;
}
