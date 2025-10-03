import React from 'react';
import Daddy from './Daddy';
import Uncle from './Uncle';
import Aunty from './Aunty';
import FamilyBusinessIncome from './FamilyBusinessIncome';

const GrandPaa = ({asset}) => {
    return (
        <div>
            <h3>Grand Paa</h3>
            <section className='flex'>
                <Daddy asset = {asset}></Daddy>
                <Uncle asset={asset}></Uncle>
                <Aunty></Aunty>
                <FamilyBusinessIncome></FamilyBusinessIncome>
            </section>
        </div>
    );
};

export default GrandPaa;