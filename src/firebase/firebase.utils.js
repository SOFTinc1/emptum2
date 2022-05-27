import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAmBoqxLd0p-mca1tFOFFsbJ0OECP28ryg",
  authDomain: "e-commerce-db-37aea.firebaseapp.com",
  projectId: "e-commerce-db-37aea",
  storageBucket: "e-commerce-db-37aea.appspot.com",
  messagingSenderId: "446660634235",
  appId: "1:446660634235:web:e709c10f59e6c63b0064de",
  measurementId: "G-371GG7QVBF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid }`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date ();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user:", error.message);
    }
  }

  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider).catch(function(e) {
    if (e.code === 'auth/popup-blocked') {
      auth.signInWithRedirect(provider);
    }
}); 
