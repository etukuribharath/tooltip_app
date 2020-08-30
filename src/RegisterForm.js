import React,{useEffect,useState} from 'react';
import './App.css';
import data from "./data";

function RegisterForm() {

    function show(elem) {
        let a = document.getElementById(elem);
        // let b = document.getElementById(elem2);
        a.style.display = "block";
        // a.style.display = "";
    }

    return(
        <div className="registerForm">
            <form action="">
                <div>
                <label htmlFor="fname">First Name</label>
                    <input type="text" id="lname" name="lname" placeholder="Your name.." onFocus={()=>show('tooltip')}/>
                    <div className="tooltip" id="tooltip">
                        something
                    </div>
                </div>
            <div>
                    <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lname" placeholder="Your name.."/>
            </div><div>
                        <label htmlFor="country">Country</label>
                        <select id="country" name="country">
                                <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select></div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
)
}

export default RegisterForm;