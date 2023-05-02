import "normalize.css"
import "./assets/styles/style.css";
import Home from "./pages/home.js";
import DisplayController from "./displayController";
import Menu from "./pages/menu";

function index() {
  const contentDiv = document.createElement("div");
  contentDiv.id = "content"
  contentDiv.appendChild(Menu());

  return contentDiv;
}

document.body.appendChild(index());


DisplayController();
