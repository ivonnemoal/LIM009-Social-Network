export default () => {
    const formWelcome  = document.createElement("div");
    const tmpWelcome = `
        <div >
        <header>
            <ul class='header'>
                <li><a id='sign-out'>Cerrar Sesión</a></li>
            </ul>
        </header>
        <h2> Bienvenido </h2>
        </div>
        `
        formWelcome.innerHTML = tmpWelcome;
        return formWelcome;

}