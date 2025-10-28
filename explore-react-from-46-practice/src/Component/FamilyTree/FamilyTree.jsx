import React, { createContext, useState } from 'react';
import GrandPa from './GrandPa';
import './FamilyTree.css'

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);



const FamilyTree = () => {

    const [money, setMoney] = useState(0);
    

    const asset = 'DIAMOND'
    const newAsset = 'PLATINUM'


    return (
        <div className='family-tree'>
            <h1>this is here</h1>
            <h4>Total Family Money {money}</h4>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <GrandPa asset={asset}></GrandPa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;