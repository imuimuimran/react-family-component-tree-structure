import React from 'react';
import Special from './Special';

const MySelf = ({asset}) => {
    return (
        <div>
            <h3>My Self</h3>
            <section>
                <Special name='Ami' asset={asset}></Special>
                <Special name='Tmi'></Special>
            </section>
        </div>
    );
};

export default MySelf;