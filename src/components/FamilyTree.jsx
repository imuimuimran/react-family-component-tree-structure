import React from 'react';
import GrandPaa from './GrandPaa';
import './FamilyTree.css'

const FamilyTree = () => {
    const asset = 'Jomi';

    return (
        <div>
            <div className='family-tree'>
                <h2>Family Tree</h2>
                <GrandPaa asset = {asset}></GrandPaa>
            </div>
        </div>
    );
};

export default FamilyTree;