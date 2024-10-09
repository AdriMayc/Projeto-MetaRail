import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-LQHPNjo7h8sLcF1Pb38yjoPm4RSO69M",
  authDomain: "metarail-47d34.firebaseapp.com",
  projectId: "metarail-47d34",
  storageBucket: "metarail-47d34.appspot.com",
  messagingSenderId: "480333060886",
  appId: "1:480333060886:web:483fc41e72558651a9ce37",
  measurementId: "G-WJF2RGZW6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);