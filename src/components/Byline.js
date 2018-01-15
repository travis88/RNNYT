import React, { PropTypes } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Smalltext from './SmallText';
import * as globalStyles from '../styles/global';

const Byline = ({ date, author, location }) => (
    <View>
        <View style={styles.row}>
            <Smalltext>{date}</Smalltext>
            <Smalltext>{author}</Smalltext>
        </View>

        {location ? (
            <View style={styles.row}>
                <Smalltext style={styles.location}>{location}</Smalltext>
            </View>
        ): null}
    </View>
);

Byline.propTypes = {
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    location: PropTypes.string
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    location: {
        color: globalStyles.MUTED_COLOR
    }
});