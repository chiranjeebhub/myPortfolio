import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    //<BrowserRouter basename={process.env.PUBLIC_URL}>
    <HashRouter basename="/">
      <div className="App">
        <Nav />
      </div>
    </HashRouter>
    //</BrowserRouter>
  );
}

export default App;
