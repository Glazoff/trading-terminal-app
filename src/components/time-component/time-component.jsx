import { useEffect, useState } from "react";

function TimeComponent () {
    const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());


    useEffect(() => {
        const setTime = setInterval(() => setTimeNow(new Date().toLocaleTimeString()), 1000);

        return () => clearInterval(setTime)
    },[]);

    return(
        <time className="time">
            {timeNow}
        </time>
    );
}

export default TimeComponent;