import './Css/main.css'
import Hero from '../Images/finalhero.png'
import { AiTwotoneStar } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
function main() {
    return (
        <>
            <div class="container">
                {/* one more commite */}
                <div class="row">
                    <div class="col-12 col-mid-6 col-lg-6 lantext">
                        <div class="col1">
                            <div class="heading">
                                <h1>Lets Now Shop for
                                    <h2>Daily And Food Neccessary</h2>
                                </h1>
                            </div>
                            <div class="para">
                                we are trusted grocery shop you can buy your necessary product use your phone
                            </div>
                        </div>
                        <div class="btn-section">
                            <span>
                                <button class="btn btn-danger">Shop Now</button>
                            </span>
                        </div>
                    </div>
                    <div class="col-12 col-mid-6 col-lg-6">
                        <img src={Hero} alt="" class="heroimg" />
                    </div>
                </div>
            </div>

            <div class="container">





                <div class="customer-info">
                    <div class="cutomer-info-item">
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
                    {/* <div class="cutomer-info-item">
                        <h3 className='consumertext'>Ratings</h3>
                        <div className="rating">
                            <AiTwotoneStar size="1rem" />
                            <p>4.5</p>
                        </div>
                    </div> */}
                    {/* <i class="fa-solid fa-star-sharp"></i> */}
                </div>
            </div>

        </>
    );
}

export default main;