import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6PO11BiVs7Cr-RhiGMYeOMxZCRpu7y3w",
  authDomain: "admindashboard-2d4e4.firebaseapp.com",
  projectId: "admindashboard-2d4e4",
  storageBucket: "admindashboard-2d4e4.appspot.com",
  messagingSenderId: "176260203082",
  appId: "1:176260203082:web:cca412e5b723e76aff9cb3",
  measurementId: "G-VDRS3QBTGK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
