import React from 'react';

import Article from './Article'

function ListComments(props) {
    let totalComments = props.children.length;
    let comments = props.children;

    return (
        <div className="list-comments row">
            <div className="total">
                <h3>{totalComments} Comments</h3>
            </div>
            {comments.map((comment, i) => {
                return (
                    <div key={i}>
                        <Article answer={true}>{comment}</Article>
                        {
                            comment.relationships.response.map((response, i) => {
                                return (
                                    <div key={i} className="responses">
                                        <Article answer={false}>{response}</Article>
                                    </div>
                                )
                            })}
                    </div>
                );
            })}
        </div>
    );
}

export default ListComments;