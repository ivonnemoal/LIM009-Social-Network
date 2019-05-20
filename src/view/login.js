//import { logInOnSubmit } from ' ./view-controller ';

export default () => {
    const formLogin  = document.createElement('div');
    const tmpLogin = `
        <h2> Inicia Sesión </h2>
        <form class="form align-center" >
          <input type='email' id='email' placeholder ='Email' class='display-block'/>
          <input type='password' id='password' placeholder ='Password'  class='display-block'/>
          <button type='button' id='btn-login' class='display-block'>Log in</button>
          <p>Si no  tienes una cuenta <span><a href='#/register'>Registrate</a></span></p>
        </form>
        `
        formLogin.innerHTML = tmpLogin;
   
    //const btnlogIn = document.getElementById('btn-login');
    //btnlogIn.addEventListener('click', logInOnSubmit);
    return formLogin;
    
};

