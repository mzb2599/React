import firebase from 'firebase/app';
import 'firebase/auth';

export const auth =firebase.initializeApp( {
  apiKey: "AIzaSyCwbRsyCZF2qi7aRZch84JCnPjWjgXrdBE",
  authDomain: "chatsapp-74359.firebaseapp.com",
  projectId: "chatsapp-74359",
  storageBucket: "chatsapp-74359.appspot.com",
  messagingSenderId: "575141390463",
  appId: "1:575141390463:web:b82138407213725859774a",
}).auth();

