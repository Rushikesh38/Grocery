import { useEffect, useMemo, useState } from "react";
import timerdata from "../../developer/timer.json"

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
        <div className="container">
        <div className="row bg-primary">
        <div className="col">
            <h1 className="">Deal Of The Day</h1>        
            <div className="row m-2">
        {Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Minutes: (time / MINUTE) % 60,
                Seconds: (time / SECOND) % 60,
            }).map(([label, value]) => (
                    <>
                        <div className="col m-2 bg-danger">{`${Math.floor(value)}`.padStart(2, "0") + " "}</div>{/*</p>*/}
                        {/* <span className="text">{label + " "}</span> */}
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
            <div className="row bg-warning">
            <div className="col">
                img1
                </div>
                <div className="col">
                img2
                </div>
                </div>
        </div>
        </div>
        </div>        
    );
};

export default Timer;