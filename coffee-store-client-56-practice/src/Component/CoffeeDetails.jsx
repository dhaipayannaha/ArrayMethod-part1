import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    return (
        <div>
            <h3>This is coffee details {coffee.name}</h3>
        </div>
    );
};

export default CoffeeDetails;