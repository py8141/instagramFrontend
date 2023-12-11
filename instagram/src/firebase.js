// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage, ref as StorageRef , uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoZJ2htllCi5-jx2Xqe5TB8YpWkAN7l08",
  authDomain: "instagram-3cb13.firebaseapp.com",
  projectId: "instagram-3cb13",
  storageBucket: "instagram-3cb13.appspot.com",
  messagingSenderId: "43665196133",
  appId: "1:43665196133:web:36d91d2f3cef6bf6cfb28c",
  measurementId: "G-LWQV9958KE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage();

export default {
  app,
  storage,
  StorageRef,
  uploadBytes,
  getDownloadURL
}