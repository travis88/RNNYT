import React, { Component, PropTypes } from 'react';
import NewsFeedContainer from '../containers/NewsFeedContainer';

export default class Homescreen extends Component {
    render() {
        return <NewsFeedContainer />;
    }
}

HomeScreen.propTypes = {
    selectedTab: PropTypes.string,
    tab: PropTypes.func.isRequired
};