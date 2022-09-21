// Import the functions you need from the SDKs you need
// import * as model from "./model";
// import * as controller from "./controller";
import * as view from "./view";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeUtlyItMgcxzD10ShwD2BRSEKHu-VNRo",
  authDomain: "chatapp-rikkei.firebaseapp.com",
  projectId: "chatapp-rikkei",
  storageBucket: "chatapp-rikkei.appspot.com",
  messagingSenderId: "404374812882",
  appId: "1:404374812882:web:7beb57fe30c08a7b95950b",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);

view.setActiveScreen("loginPage");
