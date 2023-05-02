

const MenuItem = (item) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const _img = new Image();
  _img.classList.add("menu-item-img");

  _img.src = item.img;

  const _title = document.createElement("p");
  _title.classList.add("menu-item-title");
  _title.textContent = item.title;

  const _span = document.createElement("span");
  _span.textContent = "-"

  const _price = document.createElement("p");
  _price.classList.add("menu-item-price");
  _price.textContent = item.price;

  const _topRow = document.createElement("div");
  _topRow.classList.add("menu-top-row");

  _topRow.appendChild(_title);
  _topRow.appendChild(_span);
  _topRow.appendChild(_price);

  const _description = document.createElement("p");
  _description.classList.add("menu-description");
  _description.textContent = item.description;

  const _container = document.createElement("div");
  _container.classList.add("menu-container")

  _container.appendChild(_topRow);
  _container.appendChild(_description);



  menuItem.appendChild(_img);
  menuItem.appendChild(_container);

  
  return menuItem;
};

export default MenuItem;
