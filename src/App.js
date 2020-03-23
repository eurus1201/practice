import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggel = () => {
    setIsActive(!isActive);
  }

  const stop = () => {
    setCount(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCount(count => count + 1);
        setItems(items.map((item,selectedIndex)=>renderItem(item, selectedIndex)));
      }, 1000);
    } else if (!isActive && count !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, count , items]);

  const renderItem = (item, selectedIndex) => {
    return [
      1 + selectedIndex,
      <>
        <li>{item}</li>
      </>
    ]
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>
    <div>
      {count}
      {/* {renderItem()} */}
    </div>

    <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}
      onClick={toggel} >
      {isActive ? 'revers' : 'toggel'}
    </button>
    <button
      onClick={stop}>stop</button>
  </>
}

export default App;
