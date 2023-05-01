import Logo from "../assets/img/logo.png";

const titleRow = () => {
  const titleRow = document.createElement("div");
  const titleImg = new Image();
  const titleText = document.createElement("p");

  titleImg.src = Logo;
  titleText.textContent = "Mellow Mozzarella";

  titleRow.classList.add("title-row");
  titleImg.classList.add("title-img");
  titleText.classList.add("title-text");

  titleRow.appendChild(titleImg);
  titleRow.appendChild(titleText);

  return titleRow;
}

export default titleRow;
