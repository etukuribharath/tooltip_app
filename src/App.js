import React, {useEffect, useState} from 'react';

import './App.css';
import './registerForm.css';
import data from './data';
import RegisterForm from './RegisterForm'

function App() {
    const [inElem, setInElem] = useState(null);
    const [data1, setData] = useState(data);

    useEffect(() => {
        let b = document.getElementById('tooltip1');
        setInElem(b);
        setData(data1);
        let a = Object.keys(data1);
        a.map((e) => {
            console.log(data1[e])
        });
        if (b) {
            b.style.display = "block";
        }
    }, []);

    function show(elem1, elem2,index) {
        if(Object.keys(data1).length!=index+1){
        let a = document.getElementById(elem1);
        let b = document.getElementById(elem2);
        b.style.display = 'block';
        a.style.display = '';
        } else{
            let a = document.getElementById(elem2);
            let b = document.getElementById("myModal");
            a.style.display = '';
            b.style.display = 'block';
            // alert("Process Flow Completed");

        }
    }
    function closeModal(){
        let span = document.getElementById("myModal");
        span.style.display = "none";
    }

    function dom() {
        let elements = Object.keys(data1).map((e,index) => {
            return <div className="name" onClick={() => {show(data[e].id, data[e].nextId, index)}}>
                {data[e].DisplayText}
                <div className="tooltip" id={data[e].id}>
                    {data[e].tooltipText}
                </div>
            </div>
        })
        return elements;
    }


    return (
        <div style={{backgroundColor: 'red', display:'inline'}}>
            <div className="App">
                <header className="App-header">
                    Tooltip Player
                </header>
                <div>{dom()}</div>
                {/*{ inElem?(inElem.style.display='block'):undefined}*/}
            </div>
            <div id="myModal" className="modal">

                <div className="modal-content">
                    <span className="close" onClick={()=>closeModal()}>&times;</span>
                    <p>Process Flow Completed</p>
                </div>

            </div>
        </div>
    );
}

export default App;
