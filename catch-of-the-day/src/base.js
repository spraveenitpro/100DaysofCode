import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASF6xTt44MM-co_aGDngkDMs68bOc3brQ",
  authDomain: "catch-of-the-day-praveen-82936.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-praveen-82936.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;
