import { logInOnSubmit } from "./view-controller.js";

export default () => {
    const formLogin  = document.createElement("div");
    const tmpLogin = `
        <form>
        <input type="email" id="email" placeholder ="Email"/>
        <input type="password" id="password" placeholder ="Password"/>
        <button type="button" id="btn-login">Log in</button>
        <p>Si no  tienes una cuenta <span><a href="#/register">Registrate</a></span></p>
        </form>
        `
    formLogin.innerHTML = tmpLogin;
   
    const btnlogIn = formLogin.querySelector('#btn-login');
    btnlogIn.addEventListener('click', logInOnSubmit);
    return formLogin;
    
};

