import React from "react";
import "./Board.scss";

function Board() {
  return (
    <div className="Board">
      {Array.from({ length: 100 }).map((item, index) => (
        <div className={`box box-${index + 1}`} key={index}>
          Hello Im box!
        </div>
      ))}
    </div>
  );
}

export default Board;
