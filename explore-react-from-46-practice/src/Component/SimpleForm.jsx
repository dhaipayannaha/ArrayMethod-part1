import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const name = e.target.name.value;
        const email = e.target.email.value;

        console.log(name, email);
    }
    
    return (
        <div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-3'>
            <input className='border-2 rounded-lg pl-2' type="text" placeholder='Enter your Name' name='name' />

            <input className='border-2 rounded-lg pl-2' type="text" placeholder='Enter your email' name='email' />

            <button>Submit</button>
          </form>
        </div>
    );
};

export default SimpleForm;