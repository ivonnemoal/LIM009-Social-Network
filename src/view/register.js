export default () => {
    const formRegister  = document.createElement("div");
    const tmpRegister = `
        <form>
        <input type="email" id="email2" placeholder ="Email"/>
        <input type="password" id="password2" placeholder ="Password"/>
        <button type="button" id="btn-signup">Sign Up</button>
        <p>Ya tienes una cuenta <span><a href="#/login">Inicia Sesion</a></span></p>
        </form>
        `
    formRegister.innerHTML = tmpRegister;
    return formRegister;
};
