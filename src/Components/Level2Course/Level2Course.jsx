import React from 'react';
import Card from '../Card/Card';

const Level2Course = ({level2}) => {
    return (
        <div>
            {
                level2.map((l1) => <Card key={l1.title} cardData={l1}></Card>)
            }
        </div>
    );
};

export default Level2Course;