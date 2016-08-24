import React from 'react';

function H1(props) {
    return (
        <h1 className='heading-1'>
            {props.children}
        </h1>
    );
}

export default H1;