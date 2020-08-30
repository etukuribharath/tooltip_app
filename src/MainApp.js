import React, {useEffect, useState} from 'react';

import './App.css';
import './registerForm.css';
import data from './data';
import RegisterForm from './RegisterForm'
import App from './App'

function MainApp() {
    return(
     <div>
         <App/>
     <RegisterForm/>
     </div>
    );
}

export default MainApp;