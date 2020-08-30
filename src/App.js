import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const [inElem,setInElem]=useState(null);
  useEffect(() => {
    let b = document.getElementById('tooltip1');
    setInElem(b);
  },[]);
  function show (elem1,elem2) {
    let a = document.getElementById(elem1);
    let b = document.getElementById(elem2);
    b.style.display="block";
    a.style.display="";
  }

  // let b = document.getElementById('tooltip1');
  // b?b.style.display="block":null;

  return (
    <div className="App1">
      <header className="App-header">
        Tooltip Player
      </header>

      <div className="name" onClick={()=>{show('tooltip1', 'tooltip2')}}>
        NAME
        <div className="tooltip" id="tooltip1">
          PROFILE DETAILS
        </div>
      </div>

      <div className="name" onClick={()=>{show('tooltip2', 'tooltip3')}}>
        NAME 2
        <div className="tooltip" id="tooltip2">
          PROFILE DETAILS 2
        </div>
      </div>

      <div className="name" onClick={()=>{show('tooltip3', 'tooltip3')}}>
        NAME 3
        <div className="tooltip" id="tooltip3">
          PROFILE DETAILS 3
        </div>
      </div>
      { inElem?inElem.style.display="block":null}
    </div>
  );
}

export default App;
