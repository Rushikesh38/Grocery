import {Link} from 'react-router-dom';
import logo from '../Images/logo.webp';
function navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">

                
                {/* start of navbar */}
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                   
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="img-section">
                                <img src={logo} alt="logo" />
                            </div>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="items">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link active">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/menu" class="nav-link active">Menu</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/aboutus" class="nav-link active">About us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/contactus" class="nav-link active">Contactus</Link>
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