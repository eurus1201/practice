import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState([[0]]);
  const [isActive, setIsActive] = useState(false);

  const toggel = () => {
    setIsActive(!isActive);
  }

  const renderItem = (item) => {
    return [
      <>
        <li>{item}</li>
      </>
    ]
  }


  const stop = () => {
    setCount([[0]]);
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCount(count => count + 1);
      }, 1000);
    } else if (!isActive && count !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, count ]);

  console.log(count)

  const list = !!count&& count.push(renderItem);
  

  return <>
    <div>
      {list}
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
