import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0)
            return;
        if(+age < 0)
            return;
        console.log(username, age);
        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" value={username} type="text" onChange={usernameHandler} />
                <label htmlFor='age'>Age (Years)</label>
                <input id="age" value={age} type="number" onChange={ageHandler} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;