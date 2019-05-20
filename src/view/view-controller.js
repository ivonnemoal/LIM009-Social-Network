import {signIn, signUp} from '../controler-firebase.js'

const changeHash = (hash) => {
  location.hash = hash;

};


export const logInOnSubmit= () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  if (email === '' || password === '') {
    alert('Ingresa tus datos para iniciar sesión');
  } else {
    signIn(email, password)
    .then(() => changeHash('/home'))
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
          alert('El correo es inválido')
        } else if (errorCode == 'auth/wrong-password') {
          alert('La contraseña es equivocada.')
        } else if (errorCode == 'auth/weak-password') {
          alert('El nivel de seguridad de la contraseña es : débil.');
        }  else {
          alert('Usuario no registrado')
        }
        console.log(errorMessage);
      });
    }
}

export const signUpUser = () => {
  const email = document.querySelector('#email2').value;
  const password = document.querySelector('#password2').value;
  console.log(email);
  console.log(password);
}
