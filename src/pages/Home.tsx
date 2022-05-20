import React from 'react';
import UserForm from '../components/UserForm';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Home = () => {

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
    
    return (
        <main>
            <div>
                <UserForm />
            </div>
        </main>
    )
}

export default Home;