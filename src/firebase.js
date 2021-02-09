import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZox_XShASCpf3s0S8BQ6xaXLNmsDuo_0",
    authDomain: "gdrive-clone-build.firebaseapp.com",
    projectId: "gdrive-clone-build",
    storageBucket: "gdrive-clone-build.appspot.com",
    messagingSenderId: "669976774418",
    appId: "1:669976774418:web:e4892268d96b29819d95cb"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, storage, db }