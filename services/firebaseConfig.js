import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAertKgTnWxbzr1sbGZakKAx_jBV6fa4Bw",
    authDomain: "getitagain-8cacf.firebaseapp.com",
    databaseURL: "https://getitagain-8cacf.firebaseio.com",
    projectId: "getitagain-8cacf",
    storageBucket: "getitagain-8cacf.appspot.com",
    messagingSenderId: "440670844922",
    appId: "1:440670844922:web:d08b215ba54515d3891643",
    measurementId: "G-DRY4S3YXDC"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();