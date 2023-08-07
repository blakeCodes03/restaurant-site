import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAXJcmQZzJgZ3zvWMlrGwSdqozNSj8Az7w",
    authDomain: "tesla-clone-81043.firebaseapp.com",
    projectId: "tesla-clone-81043",
    storageBucket: "tesla-clone-81043.appspot.com",
    messagingSenderId: "92850844808",
    appId: "1:92850844808:web:15ca87164b03c5d3c15b3d"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage};