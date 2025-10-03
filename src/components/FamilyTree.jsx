import React, { createContext, useState } from 'react';
import GrandPaa from './GrandPaa';
import './FamilyTree.css'

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money, setMoney] = useState(0);
    const asset = 'Jomi';
    const asset2 = 'Vita';

    return (
        <div>
            <div className='family-tree'>
                <h2>Family Tree</h2>
                <h4>Total Money: {money}</h4>

                <MoneyContext value={[money, setMoney]}>
                    <AssetContext.Provider value={asset2}>
                        <GrandPaa asset = {asset}></GrandPaa>
                    </AssetContext.Provider>
                </MoneyContext>
            </div>
        </div>
    );
};

export default FamilyTree;