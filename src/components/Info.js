import React, {Component, PropTypes} from 'react';

import H1 from './elements/H1';
import P from './elements/P';
import Button from './elements/Button'

export default class Info extends Component {
    render() {
        const data = this.props.data;
        return (
            <section className={"info info-" + this.props.position}>
                <div className="container">
                    <div className="content">
                        <H1>{data.title}</H1>
                        <P>{data.description}</P>
                        <Button
                            fullWidth={false}
                            anchor={(this.props.position === "top" ? 'comments' : null)}>
                            {data.button}
                        </Button>
                    </div>
                </div>
            </section>
        );
    }
}