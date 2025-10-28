import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Spacial = ({name, asset}) => {
    const newAsset = useContext(AssetContext)
    return (
        <div>
            <h3>spacial {name}</h3>
            <p>Assets is : {asset}</p>
            <p>New Assets is : {newAsset}</p>
        </div>
    );
};

export default Spacial;