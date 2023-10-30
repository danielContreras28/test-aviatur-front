// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDRH2ie5xdi-c5bek2Fq-_vtsght-8Z6EI',
  authDomain: 'aviatur-6144b.firebaseapp.com',
  projectId: 'aviatur-6144b',
  storageBucket: 'aviatur-6144b.appspot.com',
  messagingSenderId: '556338832296',
  appId: '1:556338832296:web:443983a44d4decf1bdf39d',
  measurementId: 'G-4R8CSRD2VY'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
