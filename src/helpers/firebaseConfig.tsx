import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYrJmh27suJ0gm5AxojLK9gGVQ-Oa_VAI",
  authDomain: "agro-info-262516.firebaseapp.com",
  databaseURL: "https://agro-info-262516.firebaseio.com",
  projectId: "agro-info-262516",
  storageBucket: "agro-info-262516.appspot.com",
  messagingSenderId: "1080129383052",
  appId: "1:1080129383052:web:35e8de688849fef89de9a9"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
