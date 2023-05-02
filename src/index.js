import "./assets/styles/style.css";
import Home from "./pages/home.js";
import DisplayController from "./displayController";

function index() {
  const contentDiv = document.createElement("div");
  contentDiv.id = "content"
  contentDiv.appendChild(Home());

  return contentDiv;
}

document.body.appendChild(index());


DisplayController();
