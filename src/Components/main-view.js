import './Css/main.css'
import Hero from '../Images/finalhero.png'
import { AiTwotoneStar } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
function main() {
    return (
        <>
            <div className="container">
                {/* one more commite */}
                <div className="row">
                    <div className="col-12 col-mid-6 col-lg-6 lantext">
                        <div className="col1">
                            <div className="heading">
                                <h1>Lets Now Shop for
                                    <h2>Daily And Food Neccessary</h2>
                                </h1>
                            </div>
                            <div className="para">
                                we are trusted grocery shop you can buy your necessary product use your phone
                            </div>
                        </div>
                        <div className="btn-section">
                            <span>
                                <button className="btn btn-danger">Shop Now</button>
                            </span>
                        </div>
                    </div>
                    <div className="col-12 col-mid-6 col-lg-6">
                        <img src={Hero} alt="" className="heroimg" />
                    </div>
                </div>
            </div>

            <div className="container">





                <div className="customer-info">
                    <div className="cutomer-info-item">
                        <h4 className='consumertext'>Active Users</h4>
                        <FaUsers size="1rem" />
                        {/* <FaUsers size="1rem/> */}
                    </div>
                    <div className="customer-info-item lasttwo">
                        <span><TbMinusVertical size="1.6rem"/></span>
                    </div>
                    <div className="consumer-info-item lasttwo">
                        <h4 className="consumertext">Ratings</h4>

                        <div className="rating-info">
                            <div className="rating-info-item">
                            <AiTwotoneStar size="1rem" />
                            </div>
                            <div className="rating-info-item">
                            <p className='num last'>4.5</p>
                                </div>
                        </div>
                       
                        


                    </div>
                    {/* <div className="cutomer-info-item">
                        <h3 className='consumertext'>Ratings</h3>
                        <div className="rating">
                            <AiTwotoneStar size="1rem" />
                            <p>4.5</p>
                        </div>
                    </div> */}
                    {/* <i className="fa-solid fa-star-sharp"></i> */}
                </div>
            </div>

        </>
    );
}

export default main;