import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <SearchParams />
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Japanese" />
      <Pet name="Milouze" animal="Dog" breed="Dalamata" />
      <Pet name="Fuzi" animal="Dog" breed="Bourbon" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
