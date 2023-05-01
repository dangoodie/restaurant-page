const titleRow = () => {
  const titleRow = document.createElement("div");
  const titleImg = document.createElement("img");
  const titleText = document.createElement("p");

  titleText.textContent = "Mellow Mozzarella";

  titleRow.appendChild(titleImg);
  titleRow.appendChild(titleText);

  return titleRow;
}

export default titleRow;
