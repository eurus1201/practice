import React,{useEffect} from 'react';
import './App.css';

function App() {

const toggelHandler =()=>{
  console.log('hi')
}
const stopHandler =()=>{
  console.log('bye')
}
 return <>
 <button
 onClick={toggelHandler} >toggel</button>
 <button
 onClick={stopHandler}>stop</button>
 </>
}

export default App;
