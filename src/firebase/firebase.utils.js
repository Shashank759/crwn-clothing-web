import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJuuC2zBHVbhTlJDtMciMbPHOthTUxm5E",
  authDomain: "crwn-clothing-6e711.firebaseapp.com",
  projectId: "crwn-clothing-6e711",
  storageBucket: "crwn-clothing-6e711.appspot.com",
  messagingSenderId: "319926663890",
  appId: "1:319926663890:web:c37661cef04fb16e564b0b",
  measurementId: "G-QWZMHRS1TX",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
