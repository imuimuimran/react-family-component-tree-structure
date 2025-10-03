import React, { use, useState } from 'react';
import { MoneyContext } from './FamilyTree';

const Sister = () => {
    const [money, setMoney] = use(MoneyContext);
    const [sisGet, setSisGet] = useState(0);

    const handleGetMoney = () => {
        if (money >= 500) {
            setMoney(money - 500);
            setSisGet(sisGet + 500);
        }
    }

    return (
        <div>
            <h3>Sister</h3>
            <button onClick={handleGetMoney}>Sis Get</button>
            <h3>Get: {sisGet}</h3>
        </div>
    );
};

export default Sister;