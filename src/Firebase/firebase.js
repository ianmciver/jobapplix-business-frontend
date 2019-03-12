import firebaseApp from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAc1RCtc9aPmEruAcN7aroX-KN-DIqIO8o",
  authDomain: "jobapplix-d1a88.firebaseapp.com",
  databaseURL: "https://jobapplix-d1a88.firebaseio.com",
  projectId: "jobapplix-d1a88",
  storageBucket: "jobapplix-d1a88.appspot.com",
  messagingSenderId: "366842059681"
};

class Firebase {
  constructor(){
    firebaseApp.initializeApp(config)

    this.auth = firebaseApp.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => {
    return this.auth.currentUser.updatePassword(password);
  }

  doGetCurrentUserIdToken = () => this.auth.currentUser.getIdToken();
}

export default Firebase