import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  /* return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Puna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Milouzze",
      animal: "dog",
      breed: "Dalmatien",
    }),
    React.createElement(Pet, {
      name: "Fugazi",
      animal: "dog",
      breed: "Royal Bourbon",
    }),
  ]); */
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Japanese" />
      <Pet name="Milouze" animal="Dog" breed="Dalamata" />
      <Pet name="Fuzi" animal="Dog" breed="Bourbon" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
