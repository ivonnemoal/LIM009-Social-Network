// Este es el punto de entrada de tu aplicacion

import login from './view/login.js';

const element = document.getElementById('root');

const pagLogin = login();
    
element.appendChild(pagLogin)