import React from 'react';

function Steps(props) {
    return (
        <div className="steps col-md-4"  data-bg-number={props.children.key}>
            <div className="content">
                <h4>{props.children.text}</h4>
            </div>
        </div>
    );
}

export default Steps;