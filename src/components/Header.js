import React, {Component} from 'react';

import scrollTo from '../helpers/scrollTo'

const Header = React.createClass({
    getInitialState() {
        return {
            active: false,
            fixed: false
        }
    },

    componentDidMount () {
        window.addEventListener("resize", this.handleDimensions);
        window.addEventListener('scroll', this.handleScroll);
    },

    componentWillUnmount () {
        window.removeEventListener("resize", this.handleDimensions);
        window.removeEventListener('scroll', this.handleScroll);
    },

    handleDimensions(){
        let width = window.innerWidth;
        if (width > 768) this.setState({active: false});
    },

    handleScroll(){
        let scrollTop = event.srcElement.body.scrollTop;

        if (scrollTop > 10) return this.setState({fixed: true});
        return this.setState({fixed: false});
    },

    handleClick(e) {
        e.preventDefault();
        this.setState({active: !this.state.active});
    },

    handleScrollTo(id){
        scrollTo.smoothScroll(id);
        this.setState({active: false});
    },

    render() {
        const data = this.props.data;
        let menuOpen = this.state.active;
        let menuFixed = this.state.fixed;

        return (
            <header
                className={"main-header " + (menuOpen ? 'main-header-open ' : '') + (menuFixed ? 'main-header-fixed' : '')}>
                <nav className="main-nav">
                    <ul>
                        {data.map((content) => {
                            return (
                                <li key={content.key}>
                                    <a onClick={() => this.handleScrollTo(content.href)}>{content.text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <button type="button" className="hamburger-menu" onClick={this.handleClick}>
                    <div className="hamburger-inner"></div>
                </button>
            </header>
        );
    }
});

export default Header;


