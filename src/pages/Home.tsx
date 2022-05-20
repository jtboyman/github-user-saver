import React from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const Home = () => {

    return (
        <main>
            <div>
                <UserForm />
            </div>
            <div>
                <UserList />
            </div>
        </main>
    )
}

export default Home;