/* Registra usuarios nuevos */

export const signUp = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  /* Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ... */
  });
};
  
  /* Acceso a usuarios existentes */

export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    /* Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    ... */
  });
}; 