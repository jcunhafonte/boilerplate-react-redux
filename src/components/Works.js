import React, {Component} from 'react';

import SubHeader from './elements/SubHeader'
import Steps from './elements/Steps'
import Button from './elements/Button'

export default class Works extends Component {
    render() {
        const data = this.props.data;

        return (
            <section className="works" id="works">
                <div className="container">
                    <SubHeader number='02' title='how it works'/>
                    <div className="container-steps row">
                        {data.title.map((content) => {
                            return (<Steps key={content.key}>{content}</Steps>);
                        })}
                    </div>
                    <div className="works-btn row">
                        <Button fullWidth={true} anchor={null}>{data.button}</Button>
                    </div>

                </div>
            </section>
        );
    }
}
