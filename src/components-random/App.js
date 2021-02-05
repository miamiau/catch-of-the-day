import React from 'react';

import User from './User';

const defaultUsers = {
    0: {
        name: 'John',
        age: 24,
        profession: "IT",
        country: "US"
    },
    1: {
        name: 'Mary',
        age: 28,
        profession: "IT",
        country: "EN"
    },
    2: {
        name: 'Carol',
        age: 34,
        profession: "IT",
        country: "FR"
    },
}

const App = props => {
    const [users, setUsers] = React.useState(defaultUsers);

    const deleteUser = userKey => {
        // Object.keys(users)
        //     .map(key =>
        //         key === userKey ? delete remainingUsers[key] : remainingUsers
        //     )
        // remainingUsers[userKey] = undefined;

        const remainingUsers = { ...users };
        delete remainingUsers[userKey];
        setUsers(remainingUsers);

        console.log(remainingUsers);
    }

    return (
        <>
            <h1>USERS</h1>
            <ul>
                {
                    Object.keys(users).map(key =>
                        <li>
                            <h1>User {key}</h1>
                            <User key={key} user={users[key]} deleteUser={deleteUser} index={key}></User>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default App