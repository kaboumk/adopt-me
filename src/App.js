import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Toto from "./Toto";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
