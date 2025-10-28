import React from 'react';
import Cousion from './Cousion';

const Uncle = () => {
    return (
        <div>
            <h3>uncle</h3>
            <section className='flex'>
                <Cousion name='Rafsan'></Cousion>
                <Cousion name='Japsa'></Cousion>
            </section>
        </div>
    );
};

export default Uncle;