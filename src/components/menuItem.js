const MenuItem = (img, title, price) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const _img = new Image();
  _img.classList.add("menu-item-img");
  _img.src = img;

  const _title = document.createElement("p");
  _title.classList.add("menu-item-title");
  _title.textContent = title;

  const _price = document.createElement("p");
  _price.classList.add("menu-item-price");
  _price.textContent = price;

  menuItem.appendChild(_img);
  menuItem.appendChild(_title);
  menuItem.appendChild(_price);
  return menuItem;
};

export default MenuItem;
