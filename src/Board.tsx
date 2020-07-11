import React, { useMemo } from "react";
import Box from "./Box";
import "./Board.scss";

interface Action {
  id: number;
  action: string;
  explanation: string;
}

function Board() {
  const actions = useMemo(
    () =>
      Array.from({ length: 100 }).fill({
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
