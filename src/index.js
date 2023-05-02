import "./assets/styles/style.css";
import Contact from "./pages/contact";
import Home from "./pages/home.js";
import Menu from "./pages/menu";

function index() {
  const index = document.createElement("div");
  index.appendChild(Home());

  return index;
}

document.body.appendChild(index());

const nav = document.querySelector("nav");

function handleClick(e) {
  console.log(e.target.attributes.href.value);
}

nav.childNodes.forEach((element) => {
  element.addEventListener("click", handleClick);
});
