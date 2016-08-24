import React from 'react';

function SubHeader(props) {
    return (
        <div className="row">
            <div className="sub-header">
                <h3>{props.number}</h3>
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}

export default SubHeader;