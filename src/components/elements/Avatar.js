import React from 'react';

function Avatar(props) {
    const image = require(`../../assets/avatar/${props.user}.png`);
    const image2x = require(`../../assets/avatar/${props.user}@2x.png`);
    return (
        <img className="avatar" src={image} srcSet={image2x + " 2x"}/>
    );
}

export default Avatar;