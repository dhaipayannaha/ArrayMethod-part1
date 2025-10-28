import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const productManagement = () => {
    const [product, setProduct] = useState([])

    const handleProduct = (newProduct) => {
        const newProducts = [...product, newProduct]
        setProduct(newProducts)
    }
console.log(product)
    


    return (
        <div>
            <h1>sdfsdfs</h1>
           <ProductForm handleProduct={handleProduct}></ProductForm>
           <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default productManagement;