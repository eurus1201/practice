import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggel = () => {
    setIsActive(!isActive);
  }
  // const count= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  const renderItem = (item) => {
    return [
      <>
        <li>{item}</li>
      </>
    ]
  }


  const stop = () => {
    setCount(0);
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

  const list = !!count && setInterval(()=>{
    count.map(renderItem);
  },1000);

  return <>
    <div>
      {count}s
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
