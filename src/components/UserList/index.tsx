import React from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const UserList = () => {

    //configure firebase
    const firebaseConfig = {
        apiKey: "AIzaSyAJAs6tNK4FHAEg4zzgZxe5fq2_W7Jy0Fo",
        authDomain: "github-user-saver-fd198.firebaseapp.com",
        projectId: "github-user-saver-fd198",
        storageBucket: "github-user-saver-fd198.appspot.com",
        messagingSenderId: "864174371592",
        appId: "1:864174371592:web:aed9687e4872e139d3b2bd"
    };

    //initialize firebase app
    initializeApp(firebaseConfig);
    
    //initialize firestore service
    const db = getFirestore();

    //reference collection from db
    const colRef = collection(db, 'users');

    //get collection data
    getDocs(colRef)
        .then((snapshot) => {
            let users: {}[] = [];
            snapshot.docs.forEach((doc) => {
                users.push({ ...doc.data(), id: doc.id})
            })
            console.log(users);
        })
        .catch(err => {
            console.log(err.message)
        });

    return (
        <div>here the users lol</div>
    )
}

export default UserList;