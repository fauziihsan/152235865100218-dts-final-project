import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyBVXvwxaDPQeCdy5s-sAAXwZux8vB2qIaw",
    authDomain: "fauzi-app.firebaseapp.com",
    projectId: "fauzi-app",
    storageBucket: "fauzi-app.appspot.com",
    messagingSenderId: "584740670371",
    appId: "1:584740670371:web:7475c70dac97b9c1536816"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };