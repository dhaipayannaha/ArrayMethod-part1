import React, { useState } from 'react';

const ProductForm = ({handleProduct}) => {
    const [error, setError] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        
       

        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value

        if (name.length === 0){
            setError('passwordd will 6 char');
            return;
        }
        else if (price.length === 0) {
            setError('Please provide a price');
            return;
        }
        else if (price < 0) {
            setError('Price can not be negative');
            return;
        }
        else {
            setError('');
        }

        const newProduct = {
            name,
            price,
            quantity
        }

        handleProduct(newProduct);
    }
        return (
        <div>
             <form onSubmit={handleSubmit}>
                <input className='border-2' type="text" name='name'/>
                <input className='border-2' type="text" name='price'/>
                <input className='border-2' type="text" name='quantity'/>

                <input type="submit" value="Submit" />
            </form>

            <p><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;