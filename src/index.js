import './assets/styles/style.css'
import Home from './pages/home.js';
import Menu from './pages/menu';

function index() {
  const index = document.createElement("div");
  index.appendChild(Menu());

  return index;
}

document.body.appendChild(index())
