import Home from "./pages/home.js";
import Menu from "./pages/menu";
import Contact from "./pages/contact";

const DisplayController = () => {
  function updateDisplay(menuItem) {
    document.body.innerHTML = "";

    switch (menuItem) {
      case "#home":
        document.body.appendChild(Home());
        break;
      case "#menu":
        document.body.appendChild(Menu());
        break;
      case "#contact":
        document.body.appendChild(Contact());
        break;

      default:
        console.error("cannot recognise selection");
        break;
    }
    navEventListeners();
  }

  function handleClick(e) {
    e.preventDefault();
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
