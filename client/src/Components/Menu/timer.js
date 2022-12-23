import { useEffect, useMemo, useState } from "react";
import timerdata from "../../developer/timer.json"
import '../Css/menucomponenets.css'
import * as api from '../../api/index.js'

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Timer = () => {
    const deadline = timerdata.deadline;
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    const HandleClick = (e) => {
        e.preventDefault() 
        timerdata.items.map(data=>(
            api.addCartItem({name:data.name,quantity:data.quantity,price:data.price})
        ))
    }
    
    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container timerbg">
            <div className="row deal-of-the-day">
                <div className="col">
                    <h1 className="">Special Offer</h1>
                    <h6 className="">{timerdata.items[0].name}</h6>
                    <h6 className="">{timerdata.items[1].name}</h6>
                    <div className="row m-2">
                        {Object.entries({
                            Days: time / DAY,
                            Hours: (time / HOUR) % 24,
                            Minutes: (time / MINUTE) % 60,
                            Seconds: (time / SECOND) % 60,
                        }).map(([label, value]) => (
                            <>
                                <div className="col m-1 bg-white">
                                    {`${Math.floor(value)}`.padStart(2, "0") + " "}
                                    <span className="text">{label + " "}</span>
                                </div>{/*</p>*/}
                            </>
                        ))}
                    </div>
                    <h6 className="">Days To Go</h6>
                    <button
                        onClick={HandleClick}
                        type="submit"
                        className="btn btn-success px-4 mb-3">
                        Add to cart
                    </button>
                </div>

                <div className="col">
                    <div className="row">
                        <div className="col">
                            <img className="img-fluid" src={timerdata.img1} alt="Card image cap" />
                        </div>
                        <div className="col">
                            <img className="img-fluid" src={timerdata.img2} alt="Card image cap" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Timer;