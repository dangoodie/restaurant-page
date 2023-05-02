import Img from "../assets/img/mozzarella-pizza.jpg";

const MenuItem = () => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const img = new Image();
  img.classList.add("menu-item-img");
  img.src = Img;

  const title = document.createElement("p");
  title.classList.add("menu-item-title");
  title.textContent = "Mozzarella Pizza";

  const price = document.createElement("p");
  price.classList.add("menu-item-price");
  price.textContent = "$20";

  menuItem.appendChild(img);
  menuItem.appendChild(title);
  menuItem.appendChild(price);
  return menuItem;
}

export default MenuItem;