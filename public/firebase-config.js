// Replace this with your actual Firebase config from the Firebase console
// Go to: console.firebase.google.com > your project > Project Settings > Your apps > SDK setup
const firebaseConfig = {
  apiKey: "AIzaSyDi9aZbzg_Z0ujWA0Mlp50h8gqhtWgKw3o",
  authDomain: "cosmic-proxy.firebaseapp.com",
  projectId: "cosmic-proxy",
  storageBucket: "cosmic-proxy.firebasestorage.app",
  messagingSenderId: "355269850252",
  appId: "1:355269850252:web:4abd89347749df0b06b7a9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
