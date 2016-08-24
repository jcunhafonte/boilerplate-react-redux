import React from 'react';

import Avatar from './Avatar';

function Article(props) {
    return (
        <article className="comment-item">
            <div className="header">
                <div className="avatar-wrapper">
                    <Avatar user={props.children.relationships.author[0].id}/>
                </div>
                <div className="information">
                    <h5>{props.children.relationships.author[0].name}</h5>
                    <small>{props.children.time}</small>
                </div>
                {props.answer ? (<div className="answer">
                    <button onClick={() => {

                    }}/>
                </div>) : null}
            </div>
            <div className="text">
                <p>{props.children.body}</p>
            </div>
        </article>
    );
}

export default Article;