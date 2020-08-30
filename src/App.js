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
        if (inElem) {
            inElem.style.display = "block";
        }
    }, []);

    function show(elem1, elem2) {
        let a = document.getElementById(elem1);
        let b = document.getElementById(elem2);
        b.style.display = "block";
        a.style.display = "";
    }

    function dom() {
        let elements = Object.keys(data1).map((e) => {
            return <div className="name" onClick={() => {show(data[e].id, data[e].nextId)}}>
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
                { inElem?(inElem.style.display):undefined}
            </div>
        </div>
    );
}

export default App;
