import {components} from "./view/components.js";

 export const changeTmp = (hash) => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    switch (hash) {
       
        //case '#/login':
           // { return root.appendChild(components.login()); }
        case '#/':
            {return root.appendChild(components.login()); }
        case '#/register':
            { return root.appendChild(components.register()); }
        
    }
};
/*
const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/signIn');
    } else if (hash === '#/signIn' || hash === '#/home') {
      return viewTmp(hash);
    } else {
      return viewTmp('#/signIn');
    }
  }
  export const initRouter = () => {
    window.addEventListener('load', changeTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
  }  */