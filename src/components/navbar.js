const navbar = () => {
  const nav = document.createElement("nav");
  const home = document.createElement("a");
  const menu = document.createElement("a");
  const contact = document.createElement("a");

  home.classList.add("nav-btn");
  menu.classList.add("nav-btn");
  contact.classList.add("nav-btn");

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  home.href = "#home"
  menu.href = "#menu";
  contact.href = "#contact";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
};

export default navbar;
