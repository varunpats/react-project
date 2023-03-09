import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter valid name and age."
            })
            return;
        }
        if (+age < 0) {
            setError({
                title: "Invalid age",
                message: "Please enter valid age."
            })
            return;
        }
        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onRemove={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id="username" value={username} type="text" onChange={usernameHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id="age" value={age} type="number" onChange={ageHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;