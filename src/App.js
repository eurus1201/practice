import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [add, setAdd] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState([]);

  const toggel = () => {
    setAdd(!add);
    setReverse(!reverse)
  }

  const count = () => {
    let i = 0 ;
    if (add) {
        setCounter(i++);
    } else if (!add) {
        setCounter(--i);
    }
  }
  useEffect(() => {
    count()
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
    return () => clearInterval(interval);
  }, [add])

  const stop = () => {
    setAdd(!add);
}

  return (
    <div>
      <div>
        {items.map((item, i) => <li key={i}>{item}<input></input></li>)}
      </div>
      <button onClick={toggel} >
        toggel
      </button>
      <button onClick={stop}>stop</button>
    </div>
  )
}

export default App;