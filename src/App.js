import React, { useEffect, useState,useRef } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [add, setAdd] = useState(true);
  const [reverse, setReverse] = useState(false);
  let [counter, setCounter] = useState([]);
  const intervalRef = useRef();

  const toggel = () => {
    setAdd(!add);
    setReverse(!reverse)
  }

  const count = () => setCounter(counter++);

  // useEffect(()=>{
  //   count()
  // },[])

  // useEffect(() => {
  //   if (add) {
  //     counter = counter+1;
  //   }else if (!add){
  //     counter = counter-1;
  //   }
  // }, [])

  useEffect(() => {
    count();
    let interval = null;
    if (add) {
      interval = setInterval(() => {
        setItems(items => [...items,`${counter++}`])
      }, 1000);
    } else if (reverse &&items!== 0) {
      interval = setInterval(() => {
        setItems(items => [`${counter--}`,...items])
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