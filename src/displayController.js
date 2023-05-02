import Home from "./pages/home.js";
import Menu from "./pages/menu";
import Contact from "./pages/contact";

const DisplayController = () => {
  function updateDisplay(menuItem) {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    switch (menuItem) {
      case "#home":
        contentDiv.appendChild(Home());
        break;
      case "#menu":
        contentDiv.appendChild(Menu());
        break;
      case "#contact":
        contentDiv.appendChild(Contact());
        break;

      default:
        console.error("cannot recognise selection");
        break;
    }
    navEventListeners();
  }

  function handleClick(e) {

    const menuItem = e.target.attributes.href.value;
    updateDisplay(menuItem);
  }

  function navEventListeners() {
    const nav = document.querySelector("nav");
    nav.childNodes.forEach((element) => {
      element.addEventListener("click", handleClick);
    });
  }
  navEventListeners();
};

export default DisplayController;
