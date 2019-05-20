export default () => {
    const formError = document.createElement('div')
    const tmpError = `
        <h2> 404 pagina no encontrada </h2>
        <p> Comprube que la url este bien especificado, ya que lo solicitado no se encuentra en este sitio web </p>
        <p> Por favor inténtelo nuevamente </P>   
    `
    formError.innerHTML = tmpError;
    return formError;
    
}