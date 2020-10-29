import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD4jmIqhKuvzGj2kYkMgKZ4-bXUg7_zs_4",
    authDomain: "chatter-b77b3.firebaseapp.com",
    databaseURL: "https://chatter-b77b3.firebaseio.com",
    projectId: "chatter-b77b3",
    storageBucket: "chatter-b77b3.appspot.com",
    messagingSenderId: "155398469967",
    appId: "1:155398469967:web:d765d52404ad48cedead3a",
    measurementId: "G-10CXX24V47"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore();
const auth= firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;
