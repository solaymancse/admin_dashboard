import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6PO11BiVs7Cr-RhiGMYeOMxZCRpu7y3w",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "admindashboard-2d4e4",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
