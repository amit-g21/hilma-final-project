import { Link } from "react-router-dom";
import "../clientCss/navbar.css";

function Navbar() {
  return (
    <nav id="menu-container">
      <div class="navbar">
        <div>
          <Link to={Navbar}>Home</Link>
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
    </nav>
  );
}

export default Navbar;
