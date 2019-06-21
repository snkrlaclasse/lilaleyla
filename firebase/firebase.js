import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAZ0YjjbCfg5cKnPjZKuW5I72JypSObAUU",
  authDomain: "lilaleyla-5e3cb.firebaseapp.com",
  databaseURL: "https://lilaleyla-5e3cb.firebaseio.com",
  projectId: "lilaleyla-5e3cb",
  storageBucket: "lilaleyla-5e3cb.appspot.com",
  messagingSenderId: "988063789524",
  appId: "1:988063789524:web:f155fa56c29c5173"
  };

  firebase.initializeApp(firebaseConfig);
  export const database = firebase.database();
  export const storage = firebase.storage();
  export const auth = firebase.auth()
 
  export default firebase