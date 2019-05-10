import {changeTmp} from "./router.js"

// Este es el punto de entrada de tu aplicacion
// Your web app's Firebase configuration
/*
  var firebaseConfig = {
    apiKey: "AIzaSyAm8CnD_j8aeA7_yMtIbiWZn_a0EnJQ6To",
    authDomain: "usuarios-939f4.firebaseapp.com",
    databaseURL: "https://usuarios-939f4.firebaseio.com",
    projectId: "usuarios-939f4",
    storageBucket: "usuarios-939f4.appspot.com",
    messagingSenderId: "928455288646",
    appId: "1:928455288646:web:3d4bfc1361a7a604"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
*/

  
  var firebaseConfig = {
    apiKey: "AIzaSyDX6B4kisWX89t09DIgPMa6wEpLjVwmR9c",
    authDomain: "usuarios-7e5a0.firebaseapp.com",
    databaseURL: "https://usuarios-7e5a0.firebaseio.com",
    projectId: "usuarios-7e5a0",
    storageBucket: "usuarios-7e5a0.appspot.com",
    messagingSenderId: "41490320294",
    appId: "1:41490320294:web:52694242490d9143"
  };

const init = () => {
    changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => changeTmp(window.location.hash));
  }
  
  window.addEventListener('load', init);