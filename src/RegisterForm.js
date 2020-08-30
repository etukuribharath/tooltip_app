import React,{useEffect,useState} from 'react';
import './registerForm.css';
import data from "./registerFormData";

function RegisterForm() {
    const [formdata, setFormData] = useState(data);

    useEffect(() => {
        let a = document.getElementById(formdata[Object.keys(formdata)[0]].id);
        if (a) {
            a.style.display = "block";
        }
    }, []);

    function show(currentElement,nextElement) {
        let a = document.getElementById(currentElement);
        let b = document.getElementById(nextElement);
        a.style.display = '';
        b.style.display = 'block';
    }

    function form(){
        return Object.keys(formdata).map((e)=>{
            return (
                <div>
                    <label>{formdata[e].label}</label>
                    <input type={formdata[e].type} id={""} name={formdata[e].name} placeholder={formdata[e].placeHolder} onFocus={()=>show(formdata[e].id,formdata[e].nextId)}/>
                    {/*<div className="registerFormtooltip" id={formdata[e].id}>*/}
                        {/*{formdata[e].tooltipText}*/}
                    {/*</div>*/}
                    <div id={formdata[e].id} className="registerFormtooltip">
                        <div className="tooltip-content">
                            <span>{formdata[e].tooltipText}</span>
                        </div>
                    </div>
                </div>
            )
        });
    }

    return(
        <div className="registerForm">
            {/*<form action="">*/}
                {/*<div>*/}
                {/*<label htmlFor="fname">First Name</label>*/}
                    {/*<input type="text" id="lname" name="lname" placeholder="Your name.." onFocus={()=>show('tooltipId')}/>*/}
                    {/*<div id="tooltipId" className="registerFormtooltip">*/}

                        {/*<div className="tooltip-content">*/}
                            {/*<span>Process Flow Completed</span>*/}
                        {/*</div>*/}

                    {/*</div>*/}
                {/*</div>*/}
            {/*<div>*/}
                    {/*<label htmlFor="lname">Last Name</label>*/}
                {/*<input type="text" id="lname" name="lname" placeholder="Your name.."/>*/}
            {/*</div><div>*/}
                        {/*<label htmlFor="country">Country</label>*/}
                        {/*<select id="country" name="country">*/}
                                {/*<option value="australia">Australia</option>*/}
                            {/*<option value="canada">Canada</option>*/}
                            {/*<option value="usa">USA</option>*/}
                        {/*</select></div>*/}
                {/*<input type="submit" value="Submit"/>*/}
            {/*</form>*/}
            <form action="/">
            {form()}
            </form>
        </div>
)
}

export default RegisterForm;