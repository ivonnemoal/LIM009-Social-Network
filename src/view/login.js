export default () => {
    const formularioLogin  = document.createElement("div");
    const formLogin = `
        <form>
        <input type="email" id="email" placeholder ="Email"/>
        <input type="password" id="password" placeholder ="Password"/>
        <button type="button" id="btn-login">Log in</button>
        <p>Si no  tienes una cuenta <span><a href="#/register">Registrate</a></span></p>
        </form>
        `
    formularioLogin.innerHTML = formLogin;
    return formularioLogin;
   
};


  