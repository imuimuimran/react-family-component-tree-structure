import React from 'react';
import Cousin from './Cousin';
import Special from './Special';

const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin asset={asset} name='Mandar'></Cousin>
                <Cousin name='Minu'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;