import Logo from "./keepcount-logo.svg";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="header-comp">
      <div className="header-container">
        <img className="logo" src={Logo} alt="logo" />
        <div className="button-group">
          <Link className="header-link" to="/about-us">
            About us
          </Link>
          <Link className="header-link" to="/register">
            Register
          </Link>
          <Link className="header-link" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
