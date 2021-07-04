import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBGWqTVA0f5XjBOl7DBrSHUMYn0zX4V2Hk",
    authDomain: "discord-273a7.firebaseapp.com",
    projectId: "discord-273a7",
    storageBucket: "discord-273a7.appspot.com",
    messagingSenderId: "37875700927",
    appId: "1:37875700927:web:13d42f9356056e8063e20a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
