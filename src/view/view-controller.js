import {signIn, signUp} from '../controler-firebase.js'

const changeHash = (hash) => {
  location.hash = hash;

};


export const logInOnSubmit= () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  /*if (email === '' || password === '') {
    alert('Ingresa tus datos para iniciar sesión');
  } else {*/
    signIn(email, password)
    .then(() => changeHash('/welcome'))
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        /*if (errorCode == 'auth/invalid-email') {
          alert('El correo es inválido')
        } else if (errorCode == 'auth/wrong-password') {
          alert('La contraseña es equivocada.')
        }  else {
          alert('Usuario no registrado')
        }
        console.log(errorMessage);*/
      });
    }


export const signUpUser = () => {
  const email = document.querySelector('#email2').value;
  const password = document.querySelector('#password2').value;
  //if (email === '' || password === '') {
    //alert('Ingresa tus datos para registrarte');
    console.log(email);
    console.log(password);

  signUp(email, password)
  .then(() => changeHash('/welcome'))
  
}
