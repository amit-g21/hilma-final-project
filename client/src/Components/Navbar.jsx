import { Link } from "react-router-dom";
import "../clientCss/navbar.css";
import Home from "./HomePage";

function Navbar() {
  return (
      <div id="navbar">
        <div>
          <Link to={'/home'}>Home</Link>
        </div>
        <div>
          <Link to={Navbar}>
            Menu
          </Link>
        </div>
        <div>
          <Link to={Navbar}>About</Link>
        </div>
        <div>
          <Link to={Navbar}>contact</Link>
        </div>
      </div>
  );
}

export default Navbar;
