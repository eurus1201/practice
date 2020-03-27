import React, { useEffect, useState,useRef } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [add, setAdd] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState([]);
  const counterRef = useRef(0);
  const intervalRef = useRef();

  const toggel = () => {
    setAdd(!add);
    setReverse(!reverse)
  }

  // const count = () => {
  //   if (add) {
  //       setCounter(counterRef.current = counterRef.current+1);
  //   } else if (!add) {
  //       setCounter(counterRef.current = counterRef.current-1);
  //   }
  // }

  // useEffect(()=>{
  //   count()
  // },[])

  useEffect(() => {
    if (add) {
      counterRef.current = counterRef.current++;
    }else if (!add){
      counterRef.current = counterRef.current--;
    }
  }, [])

  useEffect(() => {
    let interval = null;
    if (add) {
      interval = setInterval(() => {
        setItems(items => [...items,`${counterRef}`])
      }, 1000);
    } else if (reverse && !add &&items!== 0) {
      interval = setInterval(() => {
        setItems(items => [`${counterRef}`, ...items])
      }, 1000);
    }
    intervalRef.current = interval;
    return () => clearInterval(intervalRef.current);
  }, [add,reverse])

  const stop = () => {
    setAdd(!add) ;
    setReverse(false);
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
        {add || reverse ?'stop':'start'}
        </button>
    </div>
  )
}

export default App;