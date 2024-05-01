import React from 'react';

function  Chips(){
    return (
        <div>
            <h1>Chips</h1>
            <p>Description: Delicious chips!</p>
            {/* Add more details as needed */}
            <link to='/'>Back</link>
        </div>
    )
}

function Candy(){
    return (
        <div>
            <h1>Candy</h1>
            <p>Description: Sweet candy!</p>
            {/* Add more details as needed */}
            <link to='/'>Back</link>
        </div>
    );
}

function Soda(){
    return (
        <div>
            <h1>Soda</h1>
            <p>Description: Refreshing soda!</p>
            {/* Add more details as needed */}
            <link to='/'>Back</link>
        </div>
    );
}



export default Chips, Candy, Soda;


