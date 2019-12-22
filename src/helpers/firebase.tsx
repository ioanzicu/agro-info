import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYrJmh27suJ0gm5AxojLK9gGVQ-Oa_VAI",
  authDomain: "agro-info-262516.firebaseapp.com",
  databaseURL: "https://agro-info-262516.firebaseio.com",
  projectId: "agro-info-262516",
  storageBucket: "agro-info-262516.appspot.com",
  messagingSenderId: "1080129383052",
  appId: "1:1080129383052:web:35e8de688849fef89de9a9"
};

// Utility class
class Firebase {
  auth: any;
  db: any;
  constructor() {
    app.initializeApp(firebaseConfig);
    // Authorization API
    this.auth = app.auth();
    // Access to the Cloud Firestore
    this.db = app.firestore();
  }

  login(email: string, password: string) {
    email = email.trim();
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name: string, email: string, password: string) {
    email = email.trim();
    await this.auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error: any) => console.log("Register catch", error));
    return this.auth.currentUser.updateProfile({ displayName: name });
  }

  addQuote(quote: string) {
    // if not authorized, alert
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    // store the quote in the firestore with the key: quote
    return this.db.doc(`users_agro_info/${this.auth.currentUser.uid}`).set({
      quote
    });
  }

  // check if the state is initialized
  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUserName() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  async getCurrentUserQuote() {
    if (this.auth.currentUser && this.auth.currentUser.uid) {
      const quote = await this.db
        .doc(`users_agro_info/${this.auth.currentUser.uid}`)
        .get();
      return quote.get("quote"); // get by the key
    }
    return "";
  }
}

export default new Firebase();
