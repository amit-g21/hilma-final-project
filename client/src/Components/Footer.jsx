import { Link } from "react-router-dom";
import "../clientCss/footer.css";


function Footer() {
  return (
    <div id="footer">
      <div id='information'>
        <h2>information</h2>
        <Link id="link" to={'/home'}>shipping policy</Link>
        <Link id="link" to={'/home'}>return policy</Link>
        <Link id="link" to={'/home'}>about us</Link>
        <Link id="link" to={'/home'}>Terms of service</Link>
      </div>

      <div id='hilmaBall'>
        <h2>hilmaBall</h2>
        <Link id="link" to={'/home'}>Our team</Link>
        <Link id="link" to={'/home'}>Questions</Link>
        <Link id="link" to={'/home'}>help</Link>

      </div>

      <div id="subscribe">
        <h2>subscribe to our newsteller</h2>
        <input id="inputEmail" type="email" placeholder="Enter your email" />
      </div>

      {/* <div>
          <Link to={'/home'}>Home</Link>
        </div>
        <div>
          <Link to={Footer}>
            Menu
          </Link>
        </div>
        <div>
          <Link to={Footer}>About</Link>
        </div>
        <div>
          <Link to={Footer}>contact</Link>
        </div> */}
    </div>
  );
}

export default Footer;
