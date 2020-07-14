import React from "react";

import "./App.scss";
import Header from "./Header";
import Board from "./Board";
import BoxStart from "./BoxStart";
import BoxEnd from "./BoxEnd";
import ControlledDice from "./ControlledDice";
import ActionModal from "./ActionModal";
import RegistrationModal from "./RegistrationModal";

const App: React.FC = () => {
  return (
    <main className="App">
      <Header />

      <BoxStart />
      <Board />
      <BoxEnd />

      <ControlledDice />

      <ActionModal />
      <RegistrationModal />
    </main>
  );
};

export default App;
