import React from 'react';

import scrollTo from '../../helpers/scrollTo'

function Button(props) {
    return (
        <a
            onClick={
                () => (props.anchor !== null ? scrollTo.smoothScroll(props.anchor) : null)
            }
            className={"btn btn-anchor btn-red " + (props.fullWidth ? 'btn-full-width' : '')}>
            {props.children}
        </a>
    );
}

export default Button;