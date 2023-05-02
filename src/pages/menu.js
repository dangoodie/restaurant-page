import MenuItem from "../components/menuItem.js";
import Navbar from "../components/navbar.js";

import MozzarellaPizza from "../assets/img/mozzarella-pizza.jpg";

const Menu = () => {
  const menuPage = document.createElement("div");
  menuPage.appendChild(Navbar());

  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  menu.appendChild(MenuItem(MozzarellaPizza, "Mozzarella Pizza", "$20"));
  
  menuPage.appendChild(menu);

  return menuPage;
};
export default Menu;
