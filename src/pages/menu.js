import MenuItem from "../components/menuItem.js";
import Navbar from "../components/navbar.js";

const Menu = () => {
  const menu = document.createElement("div");
  menu.appendChild(Navbar());
  menu.appendChild(MenuItem())

  return menu;
};
export default Menu;
