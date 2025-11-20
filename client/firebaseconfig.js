// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZRpvGnjuC9yfbq9riEPzs7CcPrr2I5lo",
  authDomain: "ratemydorm-1661c.firebaseapp.com",
  projectId: "ratemydorm-1661c",
  storageBucket: "ratemydorm-1661c.firebasestorage.app",
  messagingSenderId: "1027124600360",
  appId: "1:1027124600360:web:c60f57cb816652bfe71f1d",
  measurementId: "G-1FM2C047L6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth instance
const auth = getAuth(app);

// Analytics (optional)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

export { app, auth, analytics };