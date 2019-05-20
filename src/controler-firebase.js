/* Registra usuarios nuevos */

export const signUp = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)}
  /* Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ... */
  

  
  /* Acceso a usuarios existentes */

export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)}
    /* Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    ... */
  
 
