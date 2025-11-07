// firebaseConfig.js
import { initializeApp } from "firebase/app";
// Import Analytics safely (client-side only)
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDqb9fNTj2z9PuYPFFn5j2H4O4XfEhmIaY",
  authDomain: "ratemydorm-8912d.firebaseapp.com",
  projectId: "ratemydorm-8912d",
  storageBucket: "ratemydorm-8912d.firebasestorage.app",
  messagingSenderId: "1095337287909",
  appId: "1:1095337287909:web:50c21250431cccc505b40c",
  measurementId: "G-SN8WCV53YV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics safely (only if browser supports it)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized ✅");
    } else {
      console.log("Analytics not supported in this environment.");
    }
  });
}

export { app, analytics };

