import React, { useMemo } from "react";
import Box from "./Box";
import { Action } from "./types";
import "./Board.scss";

function Board() {
  const actions = useMemo(
    () =>
      Array.from({ length: 60 }).fill({
        id: 1,
        action: "Do something",
        explanation: "This is how you do something",
      }) as Action[],
    []
  );

  return (
    <div className="Board">
      {actions.map((action, index) => (
        <div className={`box box-${index + 1}`} key={index}>
          <Box action={action} />
        </div>
      ))}
    </div>
  );
}

export default Board;
