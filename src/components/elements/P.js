import React from 'react';

function P(props) {
    return (
        <p className='paragraph'>
            {props.children}
        </p>
    );
}

export default P;