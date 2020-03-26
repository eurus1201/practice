import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState([0]);
  const [isTrue, setIsTrue] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggel = () => {
    setIsActive(true);
    setIsTrue(false);
  }

  let i = 0
 useEffect(()=>{
   setInterval(() => {   
     setCount(count=>count=i++)
   }, 1000);
 })

  useEffect(()=>{
    if (!isTrue) {
      setInterval(() => {
        count.push(i++)
      }, 1000);

    }else if(!isActive){
      setInterval(() => {
        count.unshift(i--)
      }, 1000);
    }
  },[isTrue,isActive])
      
  const stop = () => {
    setIsActive(!isActive);
    setIsActive(!isTrue);
  }
console.log(ar)
  return <>

    <div>
      {ar}
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
