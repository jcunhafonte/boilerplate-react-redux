import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as CommentsActions from '../actions/CommentsActions';

import data from '../data/data';

import Head from '../components/Head';
import Header from '../components/Header';
import Info from '../components/Info';
import About from '../components/About';
import Works from '../components/Works';
import Comments from '../components/Comments';
import Footer from '../components/Footer';

export default class App extends Component {
    render() {
        const {comments, actions} = this.props;
        return (
            <div className='wrapper'>
                <Head />
                <Header data={data.header}/>
                <Info data={data.top} position='top'/>
                <About data={data.about}/>
                <Works data={data.works}/>
                <Comments comments={comments} actions={actions}/>
                <Info data={data.bottom} position={'bottom'}/>
                <Footer data={data.footer}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CommentsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
