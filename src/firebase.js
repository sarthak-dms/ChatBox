import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBhdsQIw74bzeyVgQ9wAEM-Q-pO5_eh_Uw",
    authDomain: "chat-box-129cb.firebaseapp.com",
    projectId: "chat-box-129cb",
    storageBucket: "chat-box-129cb.appspot.com",
    messagingSenderId: "513593481042",
    appId: "1:513593481042:web:e71fddcad4566cce5bcc8b",
    measurementId: "G-2QCHZ32S8M"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {auth,db}