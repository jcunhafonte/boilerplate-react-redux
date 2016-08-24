import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        const data = this.props.data;

        return (
            <footer className="main-footer">
                <ul className="social-list">
                    <li>
                        <div className="share-on">Share on</div>
                    </li>
                    {data.map((content, i) => {
                        const image = require(`../assets/social/${content.name}.svg`);
                        const image2x = require(`../assets/social/${content.name}@2x.png`);

                        return (
                            <li key={i}>
                                <a href={content.url} target="_blank">
                                    <img src={image} srcSet={image2x + " 2x"}/>
                                </a>
                            </li>
                        );
                    })}
                </ul>

            </footer>
        );
    }
}
