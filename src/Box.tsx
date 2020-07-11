import React from "react";

interface Action {
  id: number;
  action: string;
  explanation: string;
}

interface Props {
  action: Action;
}

const Box: React.FC<Props> = ({ action }) => {
  return (
    <>
      <h1>{action.id}</h1>
      <p>{action.action}</p>
    </>
  );
};

export default Box;
