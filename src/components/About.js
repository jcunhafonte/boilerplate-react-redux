import React, {Component} from 'react';

import SubHeader from './elements/SubHeader'
import Cards from './elements/Cards'

export default class Intro extends Component {
    render() {
        const data = this.props.data;
        return (
            <section className="about" id="about">
                <div className="container">
                    <SubHeader number='01' title='about us'/>
                    <div className="container-cards row">
                        {data.map((content) => {
                            return (<Cards key={content.key}>{content}</Cards>);
                        })}
                    </div>
                </div>
            </section>
        );
    }
}
