import React from 'react';

const FormAction = () => {
    const submitHandle = (formData) => {
        console.log(formData.get('name'))
        console.log(formData.get('email'))
    }
    return (
        <div>
            <form action={submitHandle} className='flex flex-col gap-3 mt-3'>
                <input className='border-2 rounded-lg p-2' placeholder='enter your name' type="text" name='name' />

                <input className='border-2 rounded-lg p-2' placeholder='enter your email' type="text" name='email' />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;