import React,{useEffect,useState} from 'react';
import './App.css';
import data from './data';

function App() {
  const [inElem,setInElem]=useState(null);
  const [data1,setData]=useState(data);
  useEffect(() => {
    let b = document.getElementById('tooltip1');
    setInElem(b);
    setData(data1);
    // let data1= data;
    console.log(data1.firstElement);
    console.log(data1);
    let a = Object.keys(data1);
        a.map((e)=>{
      console.log(data1[e])
    })
  },[]);
  function show (elem1,elem2) {
    let a = document.getElementById(elem1);
    let b = document.getElementById(elem2);
    b.style.display="block";
    a.style.display="";
  }

  // let b = document.getElementById('tooltip1');
  // b?b.style.display="block":null;
  function dom(){
  let elements = Object.keys(data1).map((e)=>{
   return <div className="name" onClick={()=>{show(data[e].id, data[e].nextId)}}>
      NAME
      <div className="tooltip" id={data[e].id}>
        {data[e].id}
      </div>
    </div>
  })
    return elements;
  }

  return (
    <div className="App1">
      <header className="App-header">
        Tooltip Player
      </header>
      {dom()}
      {/*<div className="name" onClick={()=>{show('tooltip1', 'tooltip2')}}>*/}
        {/*NAME*/}
        {/*<div className="tooltip" id="tooltip1">*/}
          {/*PROFILE DETAILS*/}
        {/*</div>*/}
      {/*</div>*/}

      {/*<div className="name" onClick={()=>{show('tooltip2', 'tooltip3')}}>*/}
        {/*NAME 2*/}
        {/*<div className="tooltip" id="tooltip2">*/}
          {/*PROFILE DETAILS 2*/}
        {/*</div>*/}
      {/*</div>*/}

      {/*<div className="name" onClick={()=>{show('tooltip3', 'tooltip3')}}>*/}
        {/*NAME 3*/}
        {/*<div className="tooltip" id="tooltip3">*/}
          {/*PROFILE DETAILS 3*/}
        {/*</div>*/}
      {/*</div>*/}
      { inElem?inElem.style.display="block":null}
    </div>
  );
}

export default App;
