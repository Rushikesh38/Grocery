import './Css/main.css'
import Hero from '../Images/finalhero.png'
import { AiTwotoneStar } from "react-icons/ai";
function main() {
    return (
        <>
            <div class="container">
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
                        <img src={Hero} alt="" class="heroimg"/>
                    </div>
                </div>
            </div>

            {/* <div class="container">
                <div class="customer-info">
                    <div class="cutomer-info-item">
                        <h3>Active Users</h3>
                    </div>
                    <span>|</span>
                    <div class="cutomer-info-item">
                        <h3>Ratings</h3>
                        <AiTwotoneStar size="3rem"/>
                     
                       
                    </div>
                    <i class="fa-solid fa-star-sharp"></i>
                </div>
               
                
                <i class="fa-sharp fa-solid fa-star"></i>
            </div> */}

        </>
    );
}

export default main;