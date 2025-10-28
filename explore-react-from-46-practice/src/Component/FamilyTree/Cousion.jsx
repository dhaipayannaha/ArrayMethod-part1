import React from 'react';
import Spacial from './Spacial';
import Friends from './Friends';

const Cousion = ({name, asset}) => {
    return (
        <div>
            {name}
            {
                name === 'Tom Tom' && <Spacial asset = {asset}></Spacial>
            }
            {
                name === 'Jo Joo' && <Friends></Friends>
            }
        </div>
    );
};

export default Cousion;