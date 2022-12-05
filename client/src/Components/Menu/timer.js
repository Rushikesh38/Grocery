import { useEffect, useMemo, useState } from "react";
import timerdata from "../../developer/timer.json"
import '../Css/menucomponenets.css'

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Timer = () => {
    const deadline = timerdata.deadline;
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );

        return () => clearInterval(interval);
    }, []);

    return (        
        <div className="container timerbg">
        <div className="row">
        <div className="col">
            <h1 className="">Deal Of The Day</h1>        
            <h6 className="">{timerdata.text1}</h6>
            <h6 className="">{timerdata.text2}</h6>
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
        type="submit"
        className="btn btn-success px-4 mb-3">
        Buy Now
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