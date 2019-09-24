import firebaseApp from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
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
      .catch(err => Promise.reject(err));
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
