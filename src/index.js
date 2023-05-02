import "./assets/styles/style.css";

import Home from "./pages/home.js";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import DisplayController from "./displayController";

function index() {
  const index = document.createElement("div");
  index.appendChild(Home());

  return index;
}

document.body.appendChild(index());


DisplayController();
