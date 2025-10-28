import React, { use } from 'react';
import Cousion from './Cousion';
import { MoneyContext } from './FamilyTree';

const Aunty = ({asset}) => {
    const [money, setMoney] = use(MoneyContext);

    const handleMoney = () => {
        money > 500 ? setMoney(money - 500): alert('Not Posible')
    }
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousion asset = {asset} name='Tom Tom'></Cousion>
                <Cousion name='Jo Joo'></Cousion>


                
            </section>
            <button onClick={() => handleMoney()}>Less 500</button>
        </div>
    );
};

export default Aunty;