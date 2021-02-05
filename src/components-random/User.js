import React from 'react';

const User = props => {

    const { name, age, profession, country } = props.user;
    const { index, deleteUser } = props;
    console.log(props);

    const handleClick = event => {
        deleteUser(index);
    }

    return (
        <React.Fragment>
            <h3>{name}</h3>
            <p>{age} {profession} {country}</p>
            <button onClick={handleClick}>Delete</button>
        </React.Fragment>
    );
}

export default User;