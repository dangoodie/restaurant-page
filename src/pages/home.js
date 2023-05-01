import Description from "../components/description.js";
import Navbar from "../components/navbar.js";
import TitleRow from "../components/titleRow.js";

const Home = () => {
  const home = document.createElement("div");
  home.appendChild(Navbar());
  home.appendChild(TitleRow());
  home.appendChild(Description());

  return home;
}
 export default Home;