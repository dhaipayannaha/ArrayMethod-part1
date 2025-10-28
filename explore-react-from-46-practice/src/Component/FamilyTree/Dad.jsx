import React from 'react';
import MySels from './MySels'
import Brother from './Brother'
import Sister from './Sister'

const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <MySels asset = {asset}></MySels>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;