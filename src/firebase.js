import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBoP90sbJ6aj7UY6U25sKz-uYenlqbVzEM",
    authDomain: "balu-earthmovers.firebaseapp.com",
    projectId: "balu-earthmovers",
    storageBucket: "balu-earthmovers.appspot.com",
    messagingSenderId: "795863043121",
    appId: "1:795863043121:web:f797abd30fd1be0a915910",
    measurementId: "G-7S6NTSSB2H"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;

