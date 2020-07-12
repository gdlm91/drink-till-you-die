import React from "react";
import Box from "./Box";
import { actions } from "./actions";
import "./Board.scss";

function Board() {
  return (
    <div className="Board">
      {actions.map((action) => (
        <div className={`box box-${action.id}`} key={action.id}>
          <Box action={action} />
        </div>
      ))}
    </div>
  );
}

export default Board;
