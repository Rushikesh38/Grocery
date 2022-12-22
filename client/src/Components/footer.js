import { FaInstagramSquare,FaFacebookSquare,FaTwitter} from "react-icons/fa";
import { AiFillLinkedin,AiFillCopyrightCircle} from "react-icons/ai";

import './Css/footer.css';
const footer = () => {
    return (
        <>
            <div className="footer d-flex justify-content-between">
                <div className="footer-item">
                    <p>Term and Condition     Privarcy Policy</p>
                </div>
                <div className="footer-item">
                    <AiFillCopyrightCircle/> Eco Market 2023
                </div>
                <div className="footer-item3 d-flex justify-content-between">
                    <div className="social-item">
                    <FaInstagramSquare/>
                    </div>
                    <div className="social-item">
                    <FaFacebookSquare/>
                    </div>
                    <div className="social-item">
                    <FaTwitter/>
                    </div>
                    <div className="social-item">
                    <AiFillLinkedin/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default footer;