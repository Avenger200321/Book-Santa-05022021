import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = { apiKey: "AIzaSyBBCCRRdUMF9Ma3l5G-XuaZ2TXPs6PqwDw", authDomain: "book-santa-21d4b.firebaseapp.com", databaseURL: "https://book-santa-21d4b.firebaseio.com", projectId: "book-santa-21d4b", storageBucket: "book-santa-21d4b.appspot.com", messagingSenderId: "355037318282", appId: "1:355037318282:web:68c8203ff1b708f1fd3173", measurementId: "G-C6EVCQBFM9" };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();