// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCweHdCCiEOEe_1UFROdhlOoC_SU_1AlEI",
  authDomain: "komplexaci.firebaseapp.com",
  projectId: "komplexaci",
  storageBucket: "komplexaci.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export auth for use in other files
const auth = firebase.auth();
