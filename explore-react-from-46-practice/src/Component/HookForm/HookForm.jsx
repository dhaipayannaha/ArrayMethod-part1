import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='border-2' defaultValue={name} onChange={nameOnChange} type="text" />
                <br />

                <input className='border-2' defaultValue={email} onChange={emailOnChange} type="text" />
                <br />

                <input className='border-2' defaultValue={password} onChange={passwordOnChange} type="text" />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;