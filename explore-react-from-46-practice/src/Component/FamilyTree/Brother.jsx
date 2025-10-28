import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {
    const [money, setMoney] = use(MoneyContext)
    return (
        <div>
            <h3>brother</h3>
            <button onClick={() => setMoney(money + 1000)}>1000 TK</button>
        </div>
    );
};

export default Brother;