import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([0]);
  const [active, setActive] = useState(false);

  const toggel=()=>{
    setActive(!active)
  }

  useEffect(()=>{
    let interval = null;
    if(active){
      interval = setInterval(() => {
        setItems(items => [...items, items++])
      }, 1000);
    }else if(!active) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[active,items])

  const stop = () => {
    setActive(active);
    setItems([0]);
  }

  return (
    <div>
    <div>
    {items.map((items,i)=><li key={i}>{items}<input></input></li>)}
    </div>
      <button onClick={toggel} >
        toggel
      </button>
      <button onClick={stop}>stop</button>
    </div>
  )
}

export default App;
