import React, { useState } from 'react';

const ControlledField = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password, name);
    }


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }


    return (
        <div>
            <form className='flex flex-col ' onSubmit={handleSubmit}>
                <input className='border-2 ' type="text" onChange={handleNameChange} defaultValue={name} />

                <input className='border-2 ' type="email" onChange={handleEmailChange} defaultValue={email}/>

                <input className='border-2 ' type="password" onChange={handlePasswordChange} defaultValue={password}/>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;