import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCR7o3zNZ_ps3rDkeNDlo8UtXRaxPS2WTw",
    authDomain: "snapchat-b5c8d.firebaseapp.com",
    projectId: "snapchat-b5c8d",
    storageBucket: "snapchat-b5c8d.appspot.com",
    messagingSenderId: "454383136578",
    appId: "1:454383136578:web:e7153b00682e3ab24322db"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, storage, provider} 