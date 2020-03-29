import React, { useState, useEffect, useRef } from "react";

function App() {
    const [count, setCount] = useState([0]);
    const [item, setItem] = useState([]);
    const intervalRef = useRef();


    useEffect(() => {
        const id = setInterval(() => {
            setCount(count => [+ count + 1])
            setItem(item => [...item, `${count}`])
        }, 1000);
        intervalRef.current = id;
        return () => clearInterval(intervalRef.current);
    }, [count]);
    const handleCancel = () => clearInterval(intervalRef.current);

    return (
        <>
            <div>
                {item.map((item, i) => <li key={i}>{item}<input></input></li>)}
            </div>
            <div>
                <button>
                    toggel
                </button>
                <button
                onClick={handleCancel}>
                    stop
                </button>
            </div>
        </>
    );
}
export default App;