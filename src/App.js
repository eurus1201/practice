import React, { useState, useEffect, useRef } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [items, setItem] = useState([]);
    const [add, setAdd]=useState();
    const intervalRef = useRef();

    const handleCancel = () => {
        clearInterval(intervalRef.current);
    }
    const handleChange = ()=>{
        setAdd(!add);
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if(!add){
                setCount(c=> c+1)
                setItem(items => [...items,count])
            }else if(!!add){
                setCount(c=>c-1)
                setItem(items => [count,...items])
            }
        }, 1000);
        return () => clearInterval(intervalRef.current);
    });
 
    return (
        <>
            <div>
                {items.map((item, i) => <li key={i}>{item}<input></input></li>)}
            </div>
            <div>
                <button onClick={handleChange}>
                    {add?'toggel':'reverse'}
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