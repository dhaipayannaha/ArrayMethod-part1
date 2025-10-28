import React from 'react';

const ProductTable = ({product}) => {
    return (
        <div className='mt-4'>
            <h3>Start table, and Product length: {product.length}</h3>
            <table>
                 <thead>
                    <tr>
                        <th>No. </th>
                        <th>Product </th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((product, index) => <tr className=''>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;