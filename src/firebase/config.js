
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBAUaUig26WToMRvIw4W7HeJN12JmoZgzA",

  authDomain: "magicgaming-a9527.firebaseapp.com",

  projectId: "magicgaming-a9527",

  storageBucket: "magicgaming-a9527.appspot.com",

  messagingSenderId: "414447183390",

  appId: "1:414447183390:web:291f5e5ac50e6fb92af00f"

};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);