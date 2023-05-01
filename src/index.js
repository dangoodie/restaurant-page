import './assets/styles/style.css'
import description from './components/description';
import navbar from './components/navbar';
import titleRow from "./components/titleRow";

function index() {
  const index = document.createElement("div");
  index.appendChild(navbar());
  index.appendChild(titleRow());
  index.appendChild(description())

  return index;
}

document.body.appendChild(index());
