import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDS5B8xMyEniWcP0jr4YI5NhWJlYr9D_gM",
  authDomain: "project-mngr-fda3b.firebaseapp.com",
  databaseURL: "https://project-mngr-fda3b.firebaseio.com",
  projectId: "project-mngr-fda3b",
  storageBucket: "project-mngr-fda3b.appspot.com",
  messagingSenderId: "203293265460"
};
firebase.initializeApp(config);
const db = firebase.firestore();

// To handle timestamps properly
// db.settings({ timestampsInSnapshots: true })

export default db;