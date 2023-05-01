import './assets/styles/style.css'
import Home from './pages/home.js';

function index() {
  const index = document.createElement("div");
  index.appendChild(Home());

  return index;
}

document.body.appendChild(index())
