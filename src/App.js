import React, { useState, useEffect, useRef } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [items, setItem] = useState([]);
    const intervalRef = useRef();

    const handleCancel = () => {
        clearInterval(intervalRef.current);
    }
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(c=> c+1)
            setItem(items => [...items,count])
        }, 1000);
        return () => clearInterval(intervalRef.current);
    });
 
    return (
        <>
            <div>
                {items.map((item, i) => <li key={i}>{item}<input></input></li>)}
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