import {components} from "./view/components.js";

 export const changeTmp = (hash) => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    switch (hash) {
       
        case '#/login':
            { return root.appendChild(components.login()); }
        case '#/':
        case '#/accesorios':
        case '#/lugares':
            { return root.appendChild(components.register()); }
        
    }
};