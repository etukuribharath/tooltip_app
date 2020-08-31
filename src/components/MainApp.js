import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import '../styles/registerForm.css';
import RegisterForm from './RegisterForm'
import App from './App';


function MainApp() {
    return (
        <div className="mainDiv">
            <App/>
            <RegisterForm/>
        </div>
    );
}

export default MainApp;