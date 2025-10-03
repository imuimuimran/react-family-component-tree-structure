import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const FamilyBusinessIncome = () => {
    const BusinessProfit = 5000;
    const [money, setMoney] = use(MoneyContext)

    const handleAddMoney = () => {
        setMoney(money + BusinessProfit);
    }

    return (
        <div>
            <h3>Family Business Income</h3>
            <button onClick={handleAddMoney}>Add Business Profit</button>
        </div>
    );
};

export default FamilyBusinessIncome;