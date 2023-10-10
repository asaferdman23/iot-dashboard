import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB4UdMmZjiaYdFhG7RVlbvNzduuIN6Rx84",
    authDomain: "iotcamera-e404b.firebaseapp.com",
    projectId: "iotcamera-e404b",
    storageBucket: "iotcamera-e404b.appspot.com",
    messagingSenderId: "313470553103",
    appId: "1:313470553103:web:7d63d8193313a18205677a"
};
  
const app = initializeApp(firebaseConfig);
export default app;