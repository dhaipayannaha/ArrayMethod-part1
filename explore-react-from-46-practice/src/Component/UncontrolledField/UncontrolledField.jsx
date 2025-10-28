import React from 'react';
import { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-3'>
                <input ref={emailRef} type="email" className='border-2 rounded-lg' />
                <input ref={passwordRef} type="password" className='border-2 rounded-lg' />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;