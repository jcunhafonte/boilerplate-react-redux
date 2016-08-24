import React, {Component, PropTypes} from 'react';

import SubHeader from './elements/SubHeader'
import Avatar from './elements/Avatar'
import ListComments from './elements/ListComments'

const Comments = React.createClass({
    getInitialState() {
        return {
            placeholderText: "Write your comment here...",
            error: false,
        }
    },

    handleSubmit(e){
        e.preventDefault();
        let comment = this.refs.comment.value;
        let inputError = this.state.error;

        if (inputError) return false;
        if (comment.length <= 0) return this.formResponse("Ooh man! Just write your comment here!", true);

        let commentSubmit = {
            body: comment,
            time: 'few seconds ago',
            relationships: {
                author: [
                    {
                        id: 1,
                        name: 'Alfred Henderson'
                    }
                ],
                response: []
            }
        };
        this.props.actions.addComment(commentSubmit);
        this.refs.commentForm.reset();
    },

    handleChange(e){
        e.preventDefault();
        let inputError = this.state.error;
        if (inputError) return this.formResponse("Write your comment here...", false);
    },

    formResponse(text, error){
        this.setState({
            placeholderText: text,
            error: error
        });
    },

    render() {
        let placeholderText = this.state.placeholderText;
        let inputError = this.state.error;
        let classNameError = inputError ? 'error' : '';
        let disabledButton = inputError ? true : false;

        return (
            <section className="comments" id="comments">
                <div className="container">
                    <SubHeader number='03' title='comments'/>
                    <div className="input-comments row">
                        <form ref='commentForm' onSubmit={this.handleSubmit} onChange={this.handleChange}>
                            <div className="avatar-wrapper col-sm-12 col-md-2">
                                <Avatar user="1"/>
                            </div>
                            <div className="input-wrapper col-sm-12 col-md-8">
                                <input className={classNameError}
                                       type="text" ref='comment' placeholder={placeholderText}/>
                            </div>
                            <div className="button-wrapper col-sm-12 col-md-2">
                                <button className={classNameError} type='submit' disabled={disabledButton}/>
                            </div>
                        </form>
                    </div>
                    <ListComments>{this.props.comments}</ListComments>
                </div>
            </section>
        );
    }
});

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default Comments;