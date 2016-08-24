import React from 'react';

function Cards(props) {
    const image = require(`../../assets/icons/${props.children.icon}.svg`);
    const image2x = require(`../../assets/icons/${props.children.icon}@2x.png`);

    return (
        <div className="card col-md-4">
            <div className="icon">
                <img src={image} srcSet={image2x + " 2x"} />
            </div>
            <div className="content">
                <h4>{props.children.title}</h4>
                <p>{props.children.description}</p>
            </div>
        </div>
    );
}

export default Cards;