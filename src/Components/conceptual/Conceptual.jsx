import React from 'react';
import Card from '../Card/Card';


const Conceptual = ({conceptual}) => {
    return (
        <div>
            {
                conceptual.map((l1) => <Card key={l1.title} cardData={l1}></Card>)
            }
        </div>
    );
};

export default Conceptual;