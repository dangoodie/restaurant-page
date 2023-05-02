import './assets/styles/style.css'
import Contact from './pages/contact';
import Home from './pages/home.js';
import Menu from './pages/menu';

function index() {
  const index = document.createElement("div");
  index.appendChild(Contact());

  return index;
}

document.body.appendChild(index())
