import React from 'react';
// import UserForm from '../components/UserForm';
// import UserList from '../components/UserList';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Home = () => {
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

    //create users variable
    //type userObject = {username: string,  name: string, created_at: string, followers: number, following: number, public_gists: number, public_repos: number};
    const users: {}[] = [];

    //get collection data
    getDocs(colRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                users.push(doc.data())
            })
            console.log(users);
        })
        .catch(err => {
            console.log(err.message)
        });

    return (
        <main>
            <div>
                <p>form would be here</p>
            </div>
            <div>
            </div>
        </main>
    )
}

export default Home;