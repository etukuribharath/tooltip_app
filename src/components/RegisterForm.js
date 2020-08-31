import React, {useEffect, useState} from 'react';
import '../styles/registerForm.css';
import data from '../data/registerFormData';

function RegisterForm() {
    const [formdata, setFormData] = useState(data);

    useEffect(() => {
        let a = document.getElementById(formdata[Object.keys(formdata)[0]].id);
        if (a) {
            a.style.display = "block";
        }
    }, []);

    function show(currentElement, nextElement) {
        let a = document.getElementById(currentElement);
        let b = document.getElementById(nextElement);
        a.style.display = '';
        b.style.display = 'block';
    }

    function prev(currentElement,PrevElement){
        let a = document.getElementById(currentElement);
        let b = document.getElementById(PrevElement);
        a.style.display = '';
        b.style.display = 'block';
    }

    function form() {
        return Object.keys(formdata).map((e) => {
            return (
                <div>
                    <label>{formdata[e].label}</label>
                    <input type={formdata[e].type} id={""} name={formdata[e].name} placeholder={formdata[e].placeHolder}
                           onFocus={() => show(formdata[e].id, formdata[e].nextId)}/>
                    {/*<div className="registerFormtooltip" id={formdata[e].id}>*/}
                    {/*{formdata[e].tooltipText}*/}
                    {/*</div>*/}
                    <div id={formdata[e].id} className="registerFormtooltip">
                        <div className="tooltip-content">
                            <span>{formdata[e].tooltipText}</span>
                            {/*<input type="button" id={""} name={formdata[e].name} placeholder={formdata[e].placeHolder}*/}
                                   {/*onFocus={() => show(formdata[e].id, formdata[e].nextId)}/>*/}
                        </div>
                    </div>
                </div>
            )
        });
    }

    return (
        <div className="registerForm">
            <form action="/">
                {form()}
            </form>
        </div>
    )
}

export default RegisterForm;