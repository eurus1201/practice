import React, { useEffect, useState,useRef } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [add, setAdd] = useState(true);
  const [reverse, setReverse] = useState(false);
  // const [counter, setCounter] = useState([]);
  const counter = useRef(0);
  const intervalRef = useRef();

  const toggel = () => {
    setAdd(!add);
    setReverse(!reverse)
  }
  // const count = () => {
  //   let i = 0 ;
  //   if (add) {
  //       setCounter(i++);
  //   } else if (!add) {
  //       setCounter(--i);
  //   }
  // }
  useEffect(() => {
    counter.current = counter.current + 1;
  }, [])

  useEffect(() => {
    let interval = null;
    if (add) {
      interval = setInterval(() => {
        setItems(items => [...items,`${counter}`])
      }, 1000);
    } else if (reverse && items!== 0) {
      interval = setInterval(() => {
        setItems(items => [`${counter}`, ...items])
      }, 1000);
    }
    intervalRef.current = interval;

    return () => clearInterval(intervalRef.current);
  }, [add])

  const stop = () => {
    setAdd(!add);
    clearInterval(intervalRef.current);
}

  return (
    <div>
      <div>
        {items.map((item, i) => <li key={i}>{item}<input></input></li>)}
      </div>
      <button onClick={toggel} >
        {reverse ? 'revers' : 'toggel'}
      </button>
      <button onClick={stop}>
        {add?'stop':'start'}
        </button>
    </div>
  )
}

export default App;