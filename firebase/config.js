import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfb-rm9wgblC0BVBZF8w1BUFhtU5aBXWc",
  authDomain: "goit-react-native-hw-55f16.firebaseapp.com",
  projectId: "goit-react-native-hw-55f16",
  storageBucket: "goit-react-native-hw-55f16.appspot.com",
  messagingSenderId: "1085931829952",
  appId: "1:1085931829952:web:2031e38468a268e0a64b25",
  measurementId: "G-X65TFC3KZ6",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
