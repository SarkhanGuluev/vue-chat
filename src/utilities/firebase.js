import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCJTsUXAMzhUIEHQkXjTxBnjuaJVYcz3sk",
    authDomain: "vue-chat-cfa04.firebaseapp.com",
    databaseURL: "https://vue-chat.firebase.com",
    projectId: "vue-chat-cfa04",
    storageBucket: "vue-chat-cfa04.appspot.com",
    messagingSenderId: "201194034820",
    appId: "1:201194034820:web:36bff3640d1ff3572f94d1"
  }

  firebase.initializeApp(firebaseConfig);

  export default firebase