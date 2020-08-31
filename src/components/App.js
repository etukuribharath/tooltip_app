import React, {useEffect, useState} from 'react';

import '../styles/App.css';
import '../styles/registerForm.css';
import data from '../data/data';

function App() {
    const [intialElemement, setintialElemement] = useState(null);
    const [data1, setData] = useState(data);

    useEffect(() => {
        let b = document.getElementById(data1[Object.keys(data1)[0]].id);
        setintialElemement(b);
        setData(data1);
        let a = Object.keys(data1);
        a.map((e) => {
            console.log(data1[e])
        });
        if (b) {
            b.style.display = "block";
        }
    }, []);

    function show(elem1, elem2, index) {
        if (Object.keys(data1).length != index + 1) {
            let a = document.getElementById(elem1);
            let b = document.getElementById(elem2);
            b.style.display = 'block';
            a.style.display = '';
        } else {
            let a = document.getElementById(elem2);
            let b = document.getElementById(elem1);
            let c = document.getElementById("myModal");
            a.style.display = 'block';
            b.style.display = '';
            c.style.display = 'block';
            // alert("Process Flow Completed");

        }
    }

    function prev(currentElement, PrevElement) {
        let a = document.getElementById(currentElement);
        let b = document.getElementById(PrevElement);
        a.style.display = '';
        b.style.display = 'block';
    }

    function closeModal() {
        let span = document.getElementById("myModal");
        span.style.display = "none";
    }

    function dom() {
        let elements = Object.keys(data1).map((e, index) => {
            return <div>
                <div className="name">
                    <div onClick={() => {
                        show(data[e].id, data[e].nextId, index)
                    }}>{data[e].DisplayText}</div>
                    <div className="tooltip" id={data[e].id}>
                        <span style={{backgroundColor:'lightblue',color:'white',padding:'0px 5px 0px 5px'}}>Step {index + 1}/{Object.keys(data1).length}</span>
                        <div>{data[e].tooltipText}</div>
                        {index != 0 &&
                        <input type="button" id={data[e].id} value="Previous Step" placeholder={data[e].id}
                               onClick={() => prev(data[e].id, data[e].previousId)}/>}
                    </div>

                </div>

            </div>
        });
        return elements;
    }


    return (
        <div style={{backgroundColor: 'red', display: 'inline'}}>

            <div className="App">
                <header className="App-header">
                    Tooltip Player
                </header>
                <h3>Click on the steps to know the flow</h3>
                <div>{dom()}</div>
            </div>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => closeModal()}>&times;</span>
                    <p>Process Flow Completed</p>
                </div>

            </div>
        </div>
    );
}

export default App;
