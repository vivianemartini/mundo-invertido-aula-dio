  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD2ey4iGba3ZRY2hzJTnUmxhg9mddd3qhk",
    authDomain: "mundo-invertido-f8330.firebaseapp.com",
    projectId: "mundo-invertido-f8330",
    storageBucket: "mundo-invertido-f8330.appspot.com",
    messagingSenderId: "278028792100",
    appId: "1:278028792100:web:c369f15e23e9d1626e83b1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app