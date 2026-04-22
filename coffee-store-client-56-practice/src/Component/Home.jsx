import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(initialCoffees)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => <CoffeeCard
                    key={coffee._id}
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>

            <div className=' flex justify-center p-4 bg-amber-800 mt-10'>
                <Link  to='/addCoffee'>Go to add</Link>
            </div>
        </div>
    );
};

export default Home;