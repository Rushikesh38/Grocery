import { Link } from 'react-router-dom';
import logo from '../Images/logo.webp';
import './Css/nav.css';
function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">


                {/* start of navbar */}
                <div className="container-fluid">
                    <div className="img-container">
                        <img src={logo} alt="" className="face" className='facelogo' />
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <div className="img-section">
                                <img src={logo} alt="logo" />
                            </div> */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="items">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/menu" className="nav-link active">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link active">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactus" className="nav-link active">Contactus</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link active">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/owner" className="nav-link active">Owner</Link>
                            </li>
                        </ul>

                        <div className="form-inline my-2 my-lg-0">
                           <button className='btn btn-danger'>Sign In</button>
                        </div>
                        {/* <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form> */}
                    </div>
                </div>
                {/* End of navbar */}
            </nav>
        </div>
    );
}

export default navbar;