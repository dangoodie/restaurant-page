import MenuItem from "../components/menuItem.js";
import Navbar from "../components/navbar.js";

import MozzarellaPizza from "../assets/img/mozzarella-pizza.jpg";

const Menu = () => {
  const menu = document.createElement("div");
  menu.appendChild(Navbar());
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));

  return menu;
};
export default Menu;
