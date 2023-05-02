import MenuItem from "../components/menuItem.js";
import Navbar from "../components/navbar.js";
import MenuDatabase from "../database/menu.csv"

const Menu = () => {
  const menuPage = document.createElement("div");
  menuPage.appendChild(Navbar());

  const menu = document.createElement("div");
  menu.classList.add("menu");

  MenuDatabase.forEach(item => {
    menu.appendChild(MenuItem(item))
  });


  menuPage.appendChild(menu);

  return menuPage;
};
export default Menu;
