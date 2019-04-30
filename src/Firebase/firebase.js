import firebaseApp from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAc1RCtc9aPmEruAcN7aroX-KN-DIqIO8o",
  authDomain: "jobapplix-d1a88.firebaseapp.com",
  databaseURL: "https://jobapplix-d1a88.firebaseio.com",
  projectId: "jobapplix-d1a88",
  storageBucket: "jobapplix-d1a88.appspot.com",
  messagingSenderId: "366842059681"
};

class Firebase {
  constructor() {
    firebaseApp.initializeApp(config);

    this.auth = firebaseApp.auth();
    this.auth.setPersistence(firebaseApp.auth.Auth.Persistence.LOCAL);
  }

  doSetInitializationListener = cb => {
    return this.auth.onAuthStateChanged(item => {
      cb();
    });
  };

  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth
      .setPersistence(firebaseApp.auth.Auth.Persistence.LOCAL)
      .then(() => this.auth.createUserWithEmailAndPassword(email, password))
      .catch(err => {
        console.log("Firebase error:", err);
      });
  };

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => {
    return this.auth.currentUser.updatePassword(password);
  };

  doUpdateUserEmail = email => {
    return this.auth.currentUser.updateEmail(email);
  };

  doGetCurrentUserIdToken = async () => {
    if (this.auth.currentUser) {
      return this.auth.currentUser.getIdToken();
    } else {
      return null;
    }
  };
}

export default Firebase;
