import titleRow from "./components/titleRow";

function component() {
  const element = document.createElement("div");
  element.appendChild(titleRow());

  return element;
}

document.getElementById("content").appendChild(component());
