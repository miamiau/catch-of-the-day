import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyByjX4Jf0xzbtwY2eAuMrqSfz61oas_Q8o",
    authDomain: "catch-of-the-day-cct.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-cct-default-rtdb.firebaseio.com",
    projectId: "catch-of-the-day-cct",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;