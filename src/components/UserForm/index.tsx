import React from 'react';

const UserForm = () => {
    return (
        <div>
            <form className="add-user">
                <label htmlFor="username">github username: </label>
                <input type="text" name="username" placeholder="Example: jtboyman" required/>

                <button>Add a new user</button>
            </form>
        </div>
            
    )
}

export default UserForm;