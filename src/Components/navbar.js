import { Link } from "react-router-dom";
import logo from "../Images/logo.webp";
function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        {/* start of navbar */}
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <div className="img-section">
              <img src={logo} alt="logo" />
            </div> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="items">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link active">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link active">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link active">
                  Contactus
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* End of navbar */}
      </nav>
    </div>
  );
}

export default navbar;
