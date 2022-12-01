import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Timer = () => {
    {/* deadline = new Date().toString() */}
    const deadline = "November, 20, 2022";
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
        <div className="timer">
            {Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Minutes: (time / MINUTE) % 60,
                Seconds: (time / SECOND) % 60,
            }).map(([label, value]) => (
                // <div key={label} className="col-4">
                    // <div className="box">
                    <>
                        {/*<p>*/}{`${Math.floor(value)}`.padStart(2, "0") + " "}{/*</p>*/}
                        <span className="text">{label + " "}</span>
                    </>
                    // </div>
                // </div>
            ))}
        </div>
    );
};

export default Timer;